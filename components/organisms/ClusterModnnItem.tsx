import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import moment from 'moment';

import Panel from '../atoms/Panel';

import Util from '../../lib/utilMethods';

const StyledItemWrapper = styled.div`
  position: relative;
  flex: 0 0 100%;
  margin: 5px;
  padding-top: 100px;
`;
const StyledItemTitle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 5px;
  left: 5px;
  color: #fff;
  font-size: 14px;
  user-select: none;
  & > .upper {
    text-transform: uppercase;
    margin-right: 5px;
  }
`;
const StyledItemLegendList = styled.ul`
  position: absolute;
  top: 35px;
  left: 5px;
  width: calc(100% - 10px);
  max-height: 60px;
  overflow-y: auto;
  color: #fff;
  font-size: 14px;
  user-select: none;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  & > li {
    display: flex;
    align-items: center;
  }
`;
const StyledItemChartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

type ChartDataProps = {
  time: string;
  values: {};
};

type InfoProps = {
  dtInputTime: string;
  sNodeId: string;
  sType: string;
  sGroup: string;
  sDataName: string;
  nDataValue: number;
};

export type ClusterModnnItemProps = {
  /**
   *
   */
  node: string;
  /**
   *
   */
  type: string;
  /**
   * Datas for chart
   */
  info: InfoProps[];
};

const FIN_DATA = -1;
const EMPTY_DATA = 'N/A';

export const ClusterModnnItem: React.FC<ClusterModnnItemProps> = ({ node, type, info }) => {
  const [imgsec, setImgsec] = useState<InfoProps[]>([]);
  const [imgsecNames, setImgsecNames] = useState<string[]>([]);
  const [imgsecChart, setImgsecChart] = useState<ChartDataProps[]>([]);

  const [tflops, setTflops] = useState<InfoProps[]>([]);
  const [tflopsNames, setTflopsNames] = useState<string[]>([]);
  const [tflopsChart, setTflopsChart] = useState<ChartDataProps[]>([]);

  useEffect(() => {
    if (info) {
      setImgsec(info.filter((el) => el.sDataName.toUpperCase() === 'IMAGES/SEC'));
      setTflops(info.filter((el) => el.sDataName.toUpperCase() === 'TFLOPS'));
    }
  }, [info]);

  useEffect(() => {
    if (imgsec.length > 0) {
      const timeList = [];
      const nameList = [];
      imgsec.forEach((info: InfoProps) => {
        if (!timeList.some((el) => el === info.dtInputTime)) {
          timeList.push(info.dtInputTime);
        }
        if (!nameList.some((el) => el === info.sGroup)) {
          nameList.push(info.sGroup);
        }
      });
      setImgsecNames(nameList);

      //  make timeline
      const dataList: ChartDataProps[] = [];
      const empty = {};
      nameList.forEach((el) => (empty[el] = EMPTY_DATA));
      timeList.forEach((el) => {
        dataList.push({
          time: el,
          values: JSON.parse(JSON.stringify(empty))
        });
      });

      //  parse
      imgsec.forEach((info: InfoProps) => {
        dataList.forEach((el) => {
          if (info.dtInputTime === el.time) {
            el.values[info.sGroup] = info.nDataValue;
            return false;
          }
        });
      });

      //  update 'N/A' to prev data
      dataList.forEach((el, elIdx) => {
        nameList.forEach((name) => {
          if (el.values[name] === FIN_DATA) {
            el.values[name] = 0;
          } else if (el.values[name] === EMPTY_DATA) {
            el.values[name] = elIdx === 0 ? 0 : dataList[elIdx - 1].values[name];
          }
        });
      });

      setImgsecChart(dataList);
      // console.log(dataList);
    }
  }, [imgsec]);

  useEffect(() => {
    if (tflops.length > 0) {
      const timeList = [];
      const nameList = [];
      tflops.forEach((info: InfoProps) => {
        if (!timeList.some((el) => el === info.dtInputTime)) {
          timeList.push(info.dtInputTime);
        }
        if (!nameList.some((el) => el === info.sGroup)) {
          nameList.push(info.sGroup);
        }
      });
      setTflopsNames(nameList);

      //  make timeline
      const dataList: ChartDataProps[] = [];
      const empty = {};
      nameList.forEach((el) => (empty[el] = EMPTY_DATA));
      timeList.forEach((el) => {
        dataList.push({
          time: el,
          values: JSON.parse(JSON.stringify(empty))
        });
      });

      //  parse
      tflops.forEach((info: InfoProps) => {
        dataList.forEach((el) => {
          if (info.dtInputTime === el.time) {
            el.values[info.sGroup] = info.nDataValue;
            return false;
          }
        });
      });

      //  update 'N/A' to prev data
      dataList.forEach((el, elIdx) => {
        nameList.forEach((name) => {
          if (el.values[name] === FIN_DATA) {
            el.values[name] = 0;
          } else if (el.values[name] === EMPTY_DATA) {
            el.values[name] = elIdx === 0 ? 0 : dataList[elIdx - 1].values[name];
          }
        });
      });

      setTflopsChart(dataList);
    }
  }, [tflops]);

  const getOption = (param: string, label: string) => {
    if (param === 'image/sec') {
      return {
        title: {
          text: `${label}`,
          textStyle: {
            color: '#ccc',
            fontSize: 11
          }
        },
        grid: {
          top: 35,
          left: 30,
          right: 10,
          bottom: 70
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#aaa',
            fontFamily: 'SpoqaHanSans-Regular'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: imgsecChart.map((el) => moment(el.time).format('hh:mm:ss'))
        },
        yAxis: {
          type: 'value',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#ddd',
            fontFamily: 'SpoqaHanSans-Regular'
          }
          // min: 'dataMin',
          // max: 'dataMax'
        },
        dataZoom: [
          {
            start: 80
          },
          {
            type: 'inside'
          }
        ],
        legend: {
          data: imgsecNames,
          textStyle: { color: '#fff' }
        },
        series: imgsecNames.map((device, deviceIndex) => {
          const color = Util.colors[deviceIndex % Util.colors.length];
          return {
            name: device,
            data: imgsecChart.map((el) => el.values[device]),
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            itemStyle: {
              color: color
            },
            symbol: 'circle',
            symbolSize: 5,
            areaStyle: {
              opacity: 0.2,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: color
                },
                {
                  offset: 1,
                  color: '#211510'
                }
              ])
            }
          };
        })
      };
    } else if (param === 'tflops') {
      return {
        title: {
          text: `${label}`,
          textStyle: {
            color: '#ccc',
            fontSize: 11
          }
        },
        grid: {
          top: 35,
          left: 30,
          right: 10,
          bottom: 70
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#aaa',
            fontFamily: 'SpoqaHanSans-Regular'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: tflopsChart.map((el) => moment(el.time).format('hh:mm:ss'))
        },
        yAxis: {
          type: 'value',
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#ddd',
            fontFamily: 'SpoqaHanSans-Regular'
          }
          // min: 'dataMin',
          // max: 'dataMax'
        },
        dataZoom: [
          {
            start: 80
          },
          {
            type: 'inside'
          }
        ],
        legend: {
          data: tflopsNames,
          textStyle: { color: '#fff' }
        },
        series: tflopsNames.map((device, deviceIndex) => {
          const color = Util.colors[deviceIndex % Util.colors.length];
          return {
            name: device,
            data: tflopsChart.map((el) => el.values[device]),
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            itemStyle: {
              color: color
            },
            symbol: 'circle',
            symbolSize: 5,
            areaStyle: {
              opacity: 0.2,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: color
                },
                {
                  offset: 1,
                  color: '#211510'
                }
              ])
            }
          };
        })
      };
    }
  };

  if (info.length > 0) {
    return (
      <Panel>
        <StyledItemWrapper>
          <StyledItemTitle>
            <span className={'upper'}>[{type === '0001' ? 'AMD' : type === '0002' ? 'NVIDIA' : type}]</span>
            {node}
          </StyledItemTitle>
          <StyledItemChartWrapper>
            {imgsecChart.length > 0 && (
              <ReactEcharts
                option={getOption('image/sec', 'Image/sec')}
                notMerge={true}
                lazyUpdate={true}
                style={{ height: '300px', width: '400px' }}
              />
            )}
            {tflopsChart.length > 0 && (
              <ReactEcharts
                option={getOption('tflops', 'TFLOPS')}
                notMerge={true}
                lazyUpdate={true}
                style={{ height: '300px', width: '400px' }}
              />
            )}
          </StyledItemChartWrapper>
        </StyledItemWrapper>
      </Panel>
    );
  } else {
    return <span>Error. [ClusterModnnItem]</span>;
  }
};

export default ClusterModnnItem;

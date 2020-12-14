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

export type ClusterNodeItemProps = {
  /**
   * Datas for chart
   */
  info: any;
};

type CardProps = {
  card: string;
  order: number;
  values: [];
};

export const ClusterNodeItem: React.FC<ClusterNodeItemProps> = ({ info }) => {
  const node = info[0].node;
  const type = info[0].type;
  const datas = info[0].datas;

  const [chartData, setChartData] = useState<any>(undefined);
  const [legends, setLegends] = useState<string[]>([]);

  useEffect(() => {
    if (datas[0].data) {
      const jsonArray = JSON.parse(datas[0].data);
      const card = {};
      jsonArray.forEach((el: CardProps) => {
        card[`${el.card} (${el.order})`] = {
          label: `${el.card} (${el.order})`,
          temp_gpu: [],
          temp_mem: [],
          util_gpu: [],
          util_mem: []
        };
      });

      const parseData = {
        time: [],
        cards: card
      };

      datas.forEach((el: { time: string; data: any }) => {
        const json = JSON.parse(el.data);
        parseData.time.push(el.time);
        json.forEach((_card: any) => {
          parseData.cards[`${_card.card} (${_card.order})`]['temp_gpu'].push(parseInt(_card.values['temp_gpu'], 10));
          parseData.cards[`${_card.card} (${_card.order})`]['temp_mem'].push(parseInt(_card.values['temp_mem'], 10));
          parseData.cards[`${_card.card} (${_card.order})`]['util_gpu'].push(parseInt(_card.values['util_gpu'], 10));
          parseData.cards[`${_card.card} (${_card.order})`]['util_mem'].push(parseInt(_card.values['util_mem'], 10));
        });
      });
      setLegends(jsonArray.map((el: CardProps) => `${el.card} (${el.order})`));
      setChartData(parseData);
    }
  }, [datas]);

  const getOption = (param: string, label: string) => {
    if (chartData) {
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
          bottom: 30
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'category',
          inverse: true,
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
          data: chartData.time.map((el) => moment(el).format('mm:ss'))
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
        series: Object.keys(chartData.cards).map((device, deviceIndex) => {
          const color = Util.colors[deviceIndex % Util.colors.length];
          return {
            name: chartData.cards[device].label,
            data: chartData.cards[device][param],
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
          {/* <StyledItemLegendList>
            {chartData &&
              legends.map((gpuName, gpuNameIndex) => (
                <li key={gpuNameIndex}>
                  <div
                    style={{
                      backgroundColor: Util.colors[gpuNameIndex % Util.colors.length],
                      width: '10px',
                      height: '10px',
                      borderRadius: '2px',
                      margin: '4px'
                    }}
                  ></div>
                  {gpuName}
                </li>
              ))}
          </StyledItemLegendList> */}
          <table style={{ width: '100%', border: '1px solid #999' }}>
            <colgroup>
              <col width={'*'}></col>
              <col width={'15%'}></col>
              <col width={'15%'}></col>
              <col width={'15%'}></col>
              <col width={'15%'}></col>
            </colgroup>
            <thead style={{ border: '1px solid #999' }}>
              <tr>
                <th>Device</th>
                <th>Temperature GPU (C)</th>
                <th>Temperature Memory (C)</th>
                <th>Utilization GPU (%)</th>
                <th>Utilization Memory (%)</th>
              </tr>
            </thead>
            <tbody>
              {chartData &&
                Object.keys(chartData.cards).map((device, deviceIndex) => (
                  <tr key={deviceIndex}>
                    <td>{chartData.cards[device].label}</td>
                    <td
                      style={{
                        color:
                          chartData.cards[device]['temp_gpu'][0] < 30
                            ? '#d4edda'
                            : chartData.cards[device]['temp_gpu'][0] < 60
                            ? 'yellow'
                            : 'red'
                      }}
                    >
                      {chartData.cards[device]['temp_gpu'][0]}
                    </td>
                    <td
                      style={{
                        color:
                          chartData.cards[device]['temp_mem'][0] < 30
                            ? '#d4edda'
                            : chartData.cards[device]['temp_mem'][0] < 60
                            ? 'yellow'
                            : 'red'
                      }}
                    >
                      {chartData.cards[device]['temp_mem'][0]}
                    </td>
                    <td
                      style={{
                        color:
                          chartData.cards[device]['util_gpu'][0] < 30
                            ? '#d4edda'
                            : chartData.cards[device]['util_gpu'][0] < 60
                            ? 'yellow'
                            : 'red'
                      }}
                    >
                      {chartData.cards[device]['util_gpu'][0]}
                    </td>
                    <td
                      style={{
                        color:
                          chartData.cards[device]['util_mem'][0] < 30
                            ? '#d4edda'
                            : chartData.cards[device]['util_mem'][0] < 60
                            ? 'yellow'
                            : 'red'
                      }}
                    >
                      {chartData.cards[device]['util_mem'][0]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <StyledItemChartWrapper>
            {chartData && (
              <>
                <ReactEcharts
                  option={getOption('temp_gpu', 'Temperature GPU (C)')}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{ height: '150px', width: '200px' }}
                />
                <ReactEcharts
                  option={getOption('temp_mem', 'Temperature Memory (C)')}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{ height: '150px', width: '200px' }}
                />
                <ReactEcharts
                  option={getOption('util_gpu', 'Utilization GPU (%)')}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{ height: '150px', width: '200px' }}
                />
                <ReactEcharts
                  option={getOption('util_mem', 'Utilization Memory (%)')}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{ height: '150px', width: '200px' }}
                />
              </>
            )}
          </StyledItemChartWrapper> */}
        </StyledItemWrapper>
      </Panel>
    );
  } else {
    return <span>Error. [ClusterNodeItem]</span>;
  }
};

export default ClusterNodeItem;

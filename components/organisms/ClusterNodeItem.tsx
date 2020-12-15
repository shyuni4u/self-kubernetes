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
  padding-top: 40px;
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
  flex: 1 1 auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  .title {
    position: absolute;
    top: 0px;
    left: 0px;
  }
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
        const shortName = el.card.length > 24 ? el.card.substring(0, 24) + '...' : el.card;
        card[`${el.card} (${el.order})`] = {
          label: `${shortName} (${el.order})`,
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

  const getOption = (param: string, device: string, deviceIndex: number) => {
    if (chartData) {
      const EXCEPT_RANGE = 30;
      const _title = chartData.cards[device].label;
      // const color = Util.colors[deviceIndex % Util.colors.length];
      const _xTempData = chartData.time.map((el: string) => moment(el).format('mm:ss'));
      const _xEditData = _xTempData.filter((el: string, elIdx: number) => elIdx < _xTempData.length - EXCEPT_RANGE);
      const _tempData = chartData.cards[device][param];
      const _editTempData = _tempData.map((el: number, elIdx: number) => {
        if (el < 0) {
          let dummyCnt = 0;
          let dummySum = 0;
          for (let n = elIdx; n < elIdx + EXCEPT_RANGE && n < _tempData.length; n++) {
            dummyCnt++;
            dummySum += _tempData[n];
          }
          return dummyCnt === 0 ? 0 : dummySum / dummyCnt;
        } else {
          return el;
        }
      });
      const _editData = _editTempData.filter(
        (el: string, elIdx: number) => elIdx < _editTempData.length - EXCEPT_RANGE
      );

      const _xAvgEditData = [];
      const _valueAvgEditData = [];
      let _dummyAvgCnt = 0;
      let _dummyAvgSum = 0;
      _xEditData.forEach((el: string, elIdx: number) => {
        _dummyAvgCnt++;
        _dummyAvgSum += _editData[elIdx];
        if (elIdx % EXCEPT_RANGE === 0) {
          _xAvgEditData.push(el);
          _valueAvgEditData.push(_dummyAvgCnt === 0 ? 0 : Math.round((_dummyAvgSum / _dummyAvgCnt) * 100) / 100);
          _dummyAvgCnt = 0;
          _dummyAvgSum = 0;
        }
      });
      const _xData = _xAvgEditData;
      const _valueData = _valueAvgEditData;

      return {
        title: {
          text: _title,
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
          splitLine: {
            show: false
          },
          axisLabel: {
            color: '#aaa',
            fontFamily: 'SpoqaHanSans-Regular'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          boundaryGap: false,
          data: _xData
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
          },
          min: 0,
          max: 100
        },
        visualMap: {
          show: false,
          pieces: [
            {
              gt: 0,
              lte: 30,
              color: '#00bc8c'
            },
            {
              gt: 30,
              lte: 60,
              color: '#f39c12'
            },
            {
              gt: 60,
              lte: 100,
              color: '#e74c3c'
            }
          ],
          outOfRange: {
            color: '#999'
          }
        },
        series: {
          name: _title,
          data: _valueData,
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          symbol: 'circle',
          symbolSize: 5
        }
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
          <div style={{ display: 'flex' }}>
            {/* <table style={{ flex: '1 0 600px', border: '1px solid #999', marginRight: '20px' }}>
              <colgroup>
                <col width={'*'}></col>
                <col width={'150px'}></col>
                <col width={'150px'}></col>
              </colgroup>
              <thead style={{ border: '1px solid #999' }}>
                <tr>
                  <th>Device</th>
                  <th>
                    Utilization
                    <br />
                    GPU (%)
                  </th>
                  <th>
                    Utilization
                    <br />
                    Memory (%)
                  </th>
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
                            chartData.cards[device]['util_gpu'][0] < 30
                              ? '#d4edda'
                              : chartData.cards[device]['util_gpu'][0] < 60
                              ? '#ffde33'
                              : '#cc0033'
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
                              ? '#ffde33'
                              : '#cc0033'
                        }}
                      >
                        {chartData.cards[device]['util_mem'][0]}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table> */}
            <StyledItemChartWrapper>
              <span className={'title'}>Utilization GPU (%)</span>
              {chartData &&
                Object.keys(chartData.cards).map((device, deviceIndex) => (
                  <ReactEcharts
                    key={deviceIndex}
                    option={getOption('util_gpu', device, deviceIndex)}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{ height: '150px', width: '200px' }}
                  />
                ))}
            </StyledItemChartWrapper>
            <StyledItemChartWrapper>
              <span className={'title'}>Utilization Memory (%)</span>
              {chartData &&
                Object.keys(chartData.cards).map((device, deviceIndex) => (
                  <ReactEcharts
                    key={deviceIndex}
                    option={getOption('util_mem', device, deviceIndex)}
                    notMerge={true}
                    lazyUpdate={true}
                    style={{ height: '150px', width: '200px' }}
                  />
                ))}
            </StyledItemChartWrapper>
          </div>
        </StyledItemWrapper>
      </Panel>
    );
  } else {
    return <span>Error. [ClusterNodeItem]</span>;
  }
};

export default ClusterNodeItem;

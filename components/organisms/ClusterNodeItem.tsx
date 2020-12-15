import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment';

import Panel from '../atoms/Panel';

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
      setChartData(parseData);
    }
  }, [datas]);

  const getOption = (param: string, device: string, deviceIndex: number) => {
    if (chartData) {
      const EXCEPT_RANGE = 10;
      const _title = chartData.cards[device].label;
      const _tempData = chartData.cards[device][param];

      const _xData2 = [];
      const _valueData2 = [];
      const PREV_RANGE = 70;

      if (type === '0001') {
        _tempData.forEach((_: number, elIdx: number) => {
          if (elIdx > PREV_RANGE && elIdx + EXCEPT_RANGE < _tempData.length) {
            let dummyCnt = 0;
            let dummySum = 0;
            for (let n = elIdx; n < elIdx + EXCEPT_RANGE; n++) {
              if (_tempData[n] !== 0) {
                dummyCnt++;
                dummySum += _tempData[n];
              }
            }
            _xData2.push(moment(chartData.time[elIdx]).format('mm:ss'));
            _valueData2.push(dummyCnt === 0 ? 0 : Math.round((dummySum / dummyCnt) * 100) / 100);
          }
        });
      } else {
        const EXCEPT_RANGE2 = 5;
        _tempData.forEach((_: number, elIdx: number) => {
          if (elIdx > PREV_RANGE && elIdx + EXCEPT_RANGE < _tempData.length) {
            let dummyCnt = 0;
            let dummySum = 0;
            for (let n = elIdx; n < elIdx + EXCEPT_RANGE2; n++) {
              if (_tempData[n] !== 0) {
                dummyCnt++;
                dummySum += _tempData[n];
              }
            }
            _xData2.push(moment(chartData.time[elIdx]).format('mm:ss'));
            _valueData2.push(dummyCnt === 0 ? 0 : Math.round((dummySum / dummyCnt) * 100) / 100);
          }
        });
      }
      const _xData = _xData2;
      const _valueData = _valueData2;

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
              lte: 10,
              color: '#ffde33'
            },
            {
              gt: 10,
              lte: 80,
              color: '#f39c12'
            },
            {
              gt: 80,
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
          </StyledItemTitle>
          <div style={{ display: 'flex' }}>
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
          </div>
        </StyledItemWrapper>
      </Panel>
    );
  } else {
    return <span>Error. [ClusterNodeItem]</span>;
  }
};

export default ClusterNodeItem;

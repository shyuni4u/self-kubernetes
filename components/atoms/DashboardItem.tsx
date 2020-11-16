import React, { CSSProperties, useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import Util from '../../lib/utilMethods';
import reducerDashboardInfo from '../../reducers/reducerDashboardInfo';

export type DashboardItemProps = {
  /**
   * CSS
   */
  style?: CSSProperties;
  /**
   * Child depth
   */
  depth?: number;
  /**
   * Title
   */
  title: string;
  /**
   * Sub title
   */
  subtitle?: string;
  /**
   * Value
   */
  value: any;
  /**
   * GPU type
   */
  gpu: 'amd' | 'nvidia';
  /**
   * Edit mode
   */
  edit?: boolean;
  /**
   * Refesh value for useEffect []
   */
  refreshValue?: number;
};

type chartProps = {
  x: string;
  val: string;
};

const StyledDashboardItem = styled.div`
  flex: 0 1 auto;
  display: flex;
  border: 1px solid #fff;
  padding: 6px;
  margin: 4px;
  height: fit-content;
  line-height: 1.4;
`;
const StyledDashboardItemTitle = styled.div`
  user-select: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
const StyledChartWrapper = styled.div`
  width: 450px;
  height: 300px;
`;

const CHART_X_SIZE = 100;

/**
 * Primary UI component for user interaction
 */
export const DashboardItem: React.FC<DashboardItemProps> = ({
  style = {},
  title = '',
  subtitle = undefined,
  value = undefined,
  gpu = 'nvidia',
  edit = false,
  refreshValue = undefined,
  ...props
}) => {
  const { dashboardInfo } = reducerDashboardInfo();
  const [chartData, setChartData] = useState<chartProps[]>([]);

  useEffect(() => {
    const tempArray = chartData;
    if (tempArray.length == CHART_X_SIZE) {
      tempArray[CHART_X_SIZE - 1].val = value;
      setChartData([...tempArray]);
    }
  }, [value]);

  useEffect(() => {
    if (!edit && dashboardInfo.get[gpu].realtime.includes(title)) {
      let unmount = false;
      const tempArray: Array<chartProps> = [];

      const updateData = () => {
        if (!unmount) {
          if (tempArray.length === 0) {
            for (let n = 0; n < CHART_X_SIZE; n++) {
              tempArray.push({
                x: '',
                val: '0'
              });
            }
            tempArray[CHART_X_SIZE - 1] = {
              x: Util.getMMSS(),
              val: value
            };
            setChartData([...tempArray]);
          } else {
            const tempValue: chartProps = {
              x: Util.getMMSS(),
              val: value
            };
            if (tempArray.length > CHART_X_SIZE - 1) tempArray.shift();
            tempArray.push(tempValue);
            setChartData(tempArray);
          }
        }
      };

      const interval = setInterval(() => {
        updateData();
      }, 1 * 1000);

      return () => {
        unmount = true;
        clearInterval(interval);
      };
    }
  }, [refreshValue]);

  const updateState = () => {
    if (edit) {
      const temp = dashboardInfo.get;
      if (temp[gpu].realtime.includes(title)) {
        //  realtime -> ignore
        temp[gpu].ignore.push(title);
        const idx = temp[gpu].realtime.indexOf(title);
        if (idx > -1) {
          temp[gpu].realtime.splice(idx, 1);
        }
      } else if (temp[gpu].ignore.includes(title)) {
        //  ignore -> normal
        const idx = temp[gpu].ignore.indexOf(title);
        if (idx > -1) {
          temp[gpu].ignore.splice(idx, 1);
        }
      } else {
        //  normal -> realtime
        temp[gpu].realtime.push(title);
      }
      dashboardInfo.set(temp);
    }
  };

  const getOption = (data: Array<chartProps>) => {
    return {
      title: {
        text: `${title}: ${value}`,
        textStyle: {
          color: '#fff',
          fontSize: 14
        }
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
          color: '#fff',
          fontFamily: 'SpoqaHanSans-Regular'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: data.map((item) => item.x)
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        splitLine: {
          show: false
        }
        // min: 'dataMin',
        // max: 'dataMax'
      },
      series: [
        {
          data: data.map((item) => parseInt(item.val, 10)),
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          itemStyle: {
            color: '#8ec6ad'
          },
          symbol: 'circle',
          symbolSize: 5,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#8ec6ad'
              },
              {
                offset: 1,
                color: '#ffe'
              }
            ])
          }
        }
      ]
    };
  };

  if (typeof value === 'string') {
    if (!edit && dashboardInfo.get[gpu].realtime.includes(title)) {
      return (
        <StyledChartWrapper>
          <ReactEcharts
            option={getOption(chartData)}
            notMerge={true}
            lazyUpdate={true}
            // style={{ height: '100%', width: '100%' }}
            // opts={{ renderer: 'svg' }}
          />
        </StyledChartWrapper>
      );
    } else {
      return (
        <StyledDashboardItem style={style}>
          <StyledDashboardItemTitle
            style={{
              color: dashboardInfo.get[gpu].realtime.includes(title)
                ? 'yellow'
                : dashboardInfo.get[gpu].ignore.includes(title)
                ? 'red'
                : 'white'
            }}
            onClick={() => updateState()}
          >
            {title}
          </StyledDashboardItemTitle>
          :<div>{value}</div>
        </StyledDashboardItem>
      );
    }
  } else if (typeof value === 'object') {
    return (
      <StyledDashboardItem
        style={{
          flexDirection: 'column'
        }}
      >
        <StyledDashboardItemTitle
          style={{
            color: dashboardInfo.get[gpu].realtime.includes(title)
              ? 'yellow'
              : dashboardInfo.get[gpu].ignore.includes(title)
              ? 'red'
              : 'white'
          }}
          onClick={() => updateState()}
        >
          {title}
        </StyledDashboardItemTitle>
        <div style={{ flex: '0 1 auto' }}>{props.children}</div>
      </StyledDashboardItem>
    );
  } else {
    return <></>;
  }
};

export default DashboardItem;

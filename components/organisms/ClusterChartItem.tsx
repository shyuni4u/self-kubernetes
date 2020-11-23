import React, { useEffect, useState, Fragment } from 'react';
import axios, { AxiosInstance } from 'axios';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import Util from '../../lib/utilMethods';
import Setting from '../../lib/setting.json';

const StyledItemWrapper = styled.div`
  position: relative;
  flex: 0 0 400px;
  border: 1px solid #fff;
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
  width: calc(400px - 10px);
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
  width: 400px;
  display: flex;
  flex-wrap: wrap;
`;
const StyledConnectionStatusWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 5px;
  right: 5px;
  color: #fff;
  font-size: 10px;
  user-select: none;
  z-index: 1;
  cursor: zoom-in;
  &:hover {
    font-size: 14px;
  }
`;
const StyledConnectionStatus = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
`;

const CHART_X_SIZE = 50;
type chartProps = {
  x: string;
  value: string[][];
};

export type ClusterChartItemProps = {
  /**
   * Node name
   */
  name: string;
  /**
   * Node type
   */
  type: string; // 'amd' | 'nvidia'
  /**
   * Node IP
   */
  ip: string;
};

const settingAxios = (ip: string): AxiosInstance => {
  const conn = axios.create({
    baseURL: ip,
    timeout: 10 * 1000
  });

  conn.interceptors.request.use(
    (config) => {
      config.params = { startTime: new Date() };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  conn.interceptors.response.use(
    (response) => {
      response.config.params.endTime = new Date();
      response.config.params.duration = response.config.params.endTime - response.config.params.startTime;
      return response;
    },
    (error) => {
      error.config.params.endTime = new Date();
      error.config.params.duration = error.config.params.endTime - error.config.params.startTime;
      return Promise.reject(error);
    }
  );

  return conn;
};

const findTreeInNvidia = (jsonObject: any, search: string) => {
  const token = '>';
  if (search.indexOf(token) < 0) {
    return jsonObject[search];
  } else {
    const target = search.substr(0, search.indexOf(token));
    const param = search.substr(search.indexOf(token) + token.length);
    if (typeof jsonObject[target] === 'object') {
      return findTreeInNvidia(jsonObject[target], param);
    } else if (typeof jsonObject[target] === 'string') {
      return jsonObject[target];
    }
  }
  return undefined;
};

export const ClusterChartItem: React.FC<ClusterChartItemProps> = ({ name, type, ip }) => {
  const conn = settingAxios(ip);
  const [duration, setDuration] = useState<number>(-1);
  const [result, setResult] = useState<any>(undefined);
  const [latency, setLatency] = useState<number>(-1);
  const [amdGpuList, setAmdGpuList] = useState<string[]>([]);
  const [gpuNameList, setGpuNameList] = useState<string[]>([]);
  const [chartData, setChartData] = useState<chartProps[]>([]);

  const envAMD = Setting.amd;
  const envNVIDIA = Setting.nvidia;

  useEffect(() => {
    let unmount = false;
    const onLoadApi = () => {
      const url = type === 'amd' ? `/${type}/api/min` : `/${type}/api`;
      conn
        .get(url)
        .then((response) => {
          if (unmount) return;

          setDuration(response.config.params.duration);

          if (response.status === 200) {
            setLatency(response.data.commandDelay);

            if (type === 'nvidia') {
              if (response.data.error === 'ok') {
                setResult(response.data.smiResult.nvidia_smi_log);
              } else {
                console.error(response.data.error);
              }
            } else if (type === 'amd') {
              if (response.data.error === 'ok') {
                setResult(response);
                if (amdGpuList.length !== response.data.smiResult.length) {
                  setAmdGpuList(Object.keys(response.data.smiResult));
                }
              } else {
                console.error(response.data.error);
              }
            }
          } else {
            setResult(undefined);
          }
        })
        .catch((error) => {
          if (unmount) return;
          setDuration(-1);
          console.log('error', error);
        });
    };

    const interval = setInterval(() => {
      onLoadApi();
    }, 1000);

    return () => {
      unmount = true;
      clearInterval(interval);
    };
  }, []);

  // for AMD
  useEffect(() => {
    if (type === 'amd' && amdGpuList.length > 0) {
      if (result) {
        setGpuNameList(
          amdGpuList
            .filter((device) => device !== 'system')
            .map((device) => result.data.smiResult[device][envAMD.deviceName])
        );
      }
      const tempArray: chartProps[] = [];
      if (chartData.length === 0) {
        for (let n = 0; n < CHART_X_SIZE; n++) {
          tempArray.push({
            x: '',
            value: envAMD.chartItem.map(() => amdGpuList.map(() => '0'))
          });
        }
        setChartData([...tempArray]);
      }
    }
  }, [amdGpuList]);

  useEffect(() => {
    if (result) {
      if (type === 'amd' && amdGpuList.length > 0 && chartData.length > 0) {
        const data = result.data.smiResult;

        const tempArray = chartData;
        const tempValue: chartProps = {
          x: Util.getMMSS(),
          value: envAMD.chartItem.map(() => amdGpuList.map(() => '0'))
        };
        amdGpuList.forEach((device, deviceIndex) => {
          if (device === 'system') return;

          envAMD.chartItem.forEach((el, idx) => {
            if (data[device][el] === undefined) {
            } else {
              tempValue.value[idx][deviceIndex] = data[device][el];
            }
          });
        });
        if (tempArray.length >= CHART_X_SIZE) tempArray.shift();
        tempArray.push(tempValue);
        setChartData(tempArray);
      }
      if (type === 'nvidia') {
        const data = result.gpu;

        if (chartData.length === 0) {
          const tempArray: chartProps[] = [];
          for (let n = 0; n < CHART_X_SIZE; n++) {
            tempArray.push({
              x: '',
              value: envNVIDIA.chartItem.map(() => data.map(() => '0'))
            });
          }
          tempArray[CHART_X_SIZE - 1] = {
            x: Util.getMMSS(),
            value: envNVIDIA.chartItem.map((itemTree) => {
              return data.map((_, deviceIndex) => {
                return findTreeInNvidia(data[deviceIndex], itemTree);
              });
            })
          };
          setChartData([...tempArray]);
        } else {
          const tempArray = chartData;
          const tempValue: chartProps = {
            x: Util.getMMSS(),
            value: envNVIDIA.chartItem.map((itemTree) => {
              return data.map((_, deviceIndex) => {
                return findTreeInNvidia(data[deviceIndex], itemTree);
              });
            })
          };
          if (tempArray.length >= CHART_X_SIZE) tempArray.shift();
          tempArray.push(tempValue);
          setChartData(tempArray);
        }
      }
    }
  }, [result]);

  const getOption = (data: chartProps[], envType: string, envTypeIndex: number) => {
    let parseValue = [];
    if (type === 'amd') {
      parseValue = amdGpuList
        .filter((device) => device !== 'system')
        .map((_, deviceIndex) => {
          const color = Util.colors[deviceIndex % Util.colors.length];
          return {
            name: gpuNameList[deviceIndex],
            data: data.map((item) => parseInt(item.value[envTypeIndex][deviceIndex], 10)),
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
        });
    }
    if (type === 'nvidia') {
      parseValue = result.gpu.map((device, deviceIndex) => {
        const color = Util.colors[deviceIndex % Util.colors.length];
        return {
          name: device[envNVIDIA.deviceName],
          data: data.map((item) => parseInt(item.value[envTypeIndex][deviceIndex], 10)),
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
      });
    }
    return {
      title: {
        text: `${envType}`,
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
        },
        axisLabel: {
          color: '#ddd',
          fontFamily: 'SpoqaHanSans-Regular'
        }
        // min: 'dataMin',
        // max: 'dataMax'
      },
      series: parseValue
    };
  };

  return (
    <>
      <StyledItemWrapper>
        <StyledItemTitle>
          <span className={'upper'}>[{type}]</span>
          {name}
        </StyledItemTitle>
        <StyledItemLegendList>
          {type === 'nvidia' &&
            result &&
            result.gpu &&
            result.gpu.length > 0 &&
            result.gpu.map((device, deviceIndex) => (
              <li key={deviceIndex}>
                <div
                  style={{
                    backgroundColor: Util.colors[deviceIndex % Util.colors.length],
                    width: '10px',
                    height: '10px',
                    borderRadius: '2px',
                    margin: '4px'
                  }}
                ></div>
                {device[envNVIDIA.deviceName]}
              </li>
            ))}
          {type === 'amd' &&
            gpuNameList.length > 0 &&
            gpuNameList.map((gpuName, gpuNameIndex) => (
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
        </StyledItemLegendList>
        <StyledItemChartWrapper>
          {type === 'nvidia' &&
            chartData.length > 0 &&
            envNVIDIA.chartItem.map((envType, envTypeIndex) => (
              <Fragment key={`${name}-${type}-${envTypeIndex}`}>
                <ReactEcharts
                  option={getOption(chartData, envType, envTypeIndex)}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{ height: '180px', width: '200px' }}
                  // opts={{ renderer: 'svg' }}
                />
              </Fragment>
            ))}
          {type === 'amd' &&
            result &&
            result.data &&
            chartData.length > 0 &&
            envAMD.chartItem.map((envType, envTypeIndex) => (
              <Fragment key={`${name}-${type}-${envTypeIndex}`}>
                <ReactEcharts
                  option={getOption(chartData, envType, envTypeIndex)}
                  notMerge={true}
                  lazyUpdate={true}
                  style={{ height: '180px', width: '200px' }}
                  // opts={{ renderer: 'svg' }}
                />
              </Fragment>
            ))}
        </StyledItemChartWrapper>
        <StyledConnectionStatusWrapper>
          <StyledConnectionStatus
            style={{
              backgroundColor: duration === -1 ? 'red' : 'green'
            }}
          ></StyledConnectionStatus>{' '}
          {duration === -1 ? '' : `${duration / 1000}s`} ({latency === -1 ? '' : `${latency / 1000}s`})
        </StyledConnectionStatusWrapper>
      </StyledItemWrapper>
    </>
  );
};

export default ClusterChartItem;

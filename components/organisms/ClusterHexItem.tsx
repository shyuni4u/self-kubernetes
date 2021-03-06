import React, { Fragment, useEffect, useState } from 'react';
import axios, { AxiosInstance } from 'axios';
import styled, { css } from 'styled-components';

import Setting from '../../lib/setting.json';

const hoverSize = {
  width: 400,
  height: 200
};
type mouseXY = {
  x: number;
  y: number;
};
type HexStatus = {
  hover?: boolean | mouseXY;
  connect?: boolean;
  value?: number;
};
type valueProps = {
  name: string;
  value: string;
};

const StyledItemWrapper = styled.div<HexStatus>`
  position: relative;
  flex: 0 0 60px;
  height: 60px;
  border: 2px solid #999;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin: 2px;
  background-color: ${(props) => (props.connect ? '#ffe996' : 'transparent')};
  user-select: none;
  cursor: pointer;
`;
const StyledValueStatus = styled.div<HexStatus>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #e1272c;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  opacity: ${(props) => (props.value ? props.value : 0)};
`;
const StyledConnectionStatus = styled.div<HexStatus>`
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  width: 10px;
  height: 10px;
  border: 1px solid #888;
  background-color: ${(props) => (props.connect ? 'green' : 'red')};
`;
const StyledHoverContent = styled.div<HexStatus>`
  display: ${(props) => (props.hover ? 'block' : 'none')};
  position: absolute;
  width: ${hoverSize.width}px;
  height: ${hoverSize.height}px;
  top: 10px;
  left: 10px;
  z-index: 1;
  ${(props) => {
    if (props.hover && props.hover['x'] && props.hover['x'] + hoverSize.width > window.innerWidth) {
      if (props.hover && props.hover['y'] && props.hover['y'] + hoverSize.height > window.innerHeight) {
        return css`
          right: 0px;
          left: unset;
          bottom: 0px;
          top: unset;
        `;
      }
      return css`
        right: 0px;
        left: unset;
      `;
    }
    if (props.hover && props.hover['y'] && props.hover['y'] + hoverSize.height > window.innerHeight) {
      return css`
        bottom: 0px;
        top: unset;
      `;
    }
  }}
`;
const StyledHoverContentBodyWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: bottom;
  width: ${hoverSize.width}px;
  height: ${hoverSize.height}px;
  overflow: auto;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.hover};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.border};
  & > li {
    border-bottom: 1px solid #eee;
  }
  & > li.subject {
    flex: 0 0 70%;
    font-weight: 600;
    text-align: right;
    padding-right: 10px;
  }
  & > li.value {
    flex: 0 0 30%;
    text-align: right;
    border-left: 1px solid #eee;
  }
`;

export type ClusterHexItemProps = {
  /**
   * Node name
   */
  name: string;
  /**
   * Node type
   */
  type: 'amd' | 'nvidia' | string;
  /**
   * Node IP
   */
  ip: string;
  /**
   * Filter type
   */
  filter: string;
  /**
   * Range type
   */
  range: 'avg' | 'max' | 'min' | string;
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

export const ClusterHexItem: React.FC<ClusterHexItemProps> = ({ name, type, ip, filter, range }) => {
  const conn = settingAxios(ip);
  const filtered = Setting.filterOption.filter((el) => el.value === filter);

  const [duration, setDuration] = useState<number>(-1);
  const [result, setResult] = useState<any>(undefined);
  const [latency, setLatency] = useState<number>(-1);
  const [amdGpuList, setAmdGpuList] = useState<string[]>([]);
  const [hover, setHover] = useState<boolean | mouseXY>(false);
  const [values, setValues] = useState<valueProps[]>([]);
  const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

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

  useEffect(() => {
    if (result) {
      if (type === 'amd' && amdGpuList.length > 0) {
        const data = result.data.smiResult;
        const tempArray: valueProps[] = [];

        amdGpuList.forEach((device) => {
          if (device === 'system') return;
          if (filtered.length > 0) {
            tempArray.push({
              name: data[device][envAMD.deviceName],
              value: data[device][filtered[0].amd]
            });
          }
        });
        setValues(tempArray);
      }
      if (type === 'nvidia') {
        const data = result.gpu;
        const tempArray: valueProps[] = [];
        data.forEach((device, deviceIndex) => {
          tempArray.push({
            name: device[envNVIDIA.deviceName],
            value: findTreeInNvidia(data[deviceIndex], filtered[0].nvidia)
          });
        });
        setValues(tempArray);
      }
    }
  }, [result]);

  const getParseValue = () => {
    if (values.length === 0) return 0;
    switch (range) {
      case 'avg':
        let sum = 0;
        values.forEach((el) => (sum += parseInt(el.value, 10)));
        return sum / values.length || 0;
      case 'max':
        let max = -Infinity;
        values.forEach((el) => (max = Math.max(max, parseInt(el.value, 10))));
        return max;
      case 'min':
        let min = Infinity;
        values.forEach((el) => (min = Math.min(min, parseInt(el.value, 10))));
        return min;
      default:
        return 0;
    }
  };

  return (
    <>
      {/* {test.map((_, key) => ( */}
      <StyledItemWrapper
        // key={key}
        connect={duration !== -1}
        value={0}
        onMouseEnter={(e) => setHover({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setHover(false)}
      >
        <StyledValueStatus value={getParseValue() * 0.01} />
        <StyledConnectionStatus connect={duration !== -1}></StyledConnectionStatus>
        <StyledHoverContent hover={hover}>
          <StyledHoverContentBodyWrapper>
            <li className={'subject'}>Name</li>
            <li className={'value'}>{name}</li>
            <li className={'subject'}>Network</li>
            <li className={'value'}>{duration === -1 ? '' : `${duration / 1000}s`}</li>
            <li className={'subject'}>Command</li>
            <li className={'value'}>{latency === -1 ? '' : `${latency / 1000}s`}</li>
            {values.map((el, elIndex) => (
              <Fragment key={elIndex}>
                <li className={'subject'}>{el.name}</li>
                <li className={'value'}>{el.value}</li>
              </Fragment>
            ))}
          </StyledHoverContentBodyWrapper>
        </StyledHoverContent>
      </StyledItemWrapper>
      {/* ))} */}
    </>
  );
};

export default ClusterHexItem;

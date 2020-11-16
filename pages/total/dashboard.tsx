import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';

import Wrapper from '../../components/organisms/Wrapper';
import Panel from '../../components/atoms/Panel';
import Button from '../../components/atoms/Button';
import DashboardItem from '../../components/atoms/DashboardItem';

import auth from '../../.env/auth.json';

import reducerDashboardInfo from '../../reducers/reducerDashboardInfo';

const StyledHeader = styled.header`
  width: 100%;
  height: 114px;
  position: fixed;
  top: 0px;
  z-index: 1;
  margin-bottom: 10px;
  background-color: #000;
  ${({ theme }) => theme.media.tablet`
    height: auto;
    position: inherit;
  `}
  ${({ theme }) => theme.media.mobile`
    height: auto;
    position: inherit;
  `}
`;
const StyledBody = styled.article`
  scroll-margin-top: 114px;
  margin-top: 114px;
  margin-bottom: 10px;
  ${({ theme }) => theme.media.tablet`
    margin-top: 0;
  `}
  ${({ theme }) => theme.media.mobile`
    margin-top: 0;
  `}
`;

const StyledConnectionStatusWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 15px;
  right: 15px;
  color: #fff;
  align-items: center;
  z-index: 1;
`;
const StyledConnectionStatus = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  & > li {
    flex: 1 1 auto;
    align-self: center;
    text-align: center;
  }
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
  `}
`;
const StyledImportInput = styled.input`
  background-color: #ddd;
  color: #333;
  width: calc(100% - 20px);
  margin: 0 10px 10px;
  padding: 10px;
`;

const nvidiaApi = axios.create({
  baseURL: auth['nvidia-ip'],
  timeout: 5000
});
const amdApi = axios.create({
  baseURL: auth['amd-ip'],
  timeout: 5000
});
const amdApi2 = axios.create({
  baseURL: auth['amd-ip2'],
  timeout: 5000
});

nvidiaApi.interceptors.request.use(
  (config) => {
    config.params = { startTime: new Date() };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

nvidiaApi.interceptors.response.use(
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

amdApi.interceptors.request.use(
  (config) => {
    config.params = { startTime: new Date() };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

amdApi.interceptors.response.use(
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

amdApi2.interceptors.request.use(
  (config) => {
    config.params = { startTime: new Date() };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

amdApi2.interceptors.response.use(
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

export const Dashboard: React.FC = () => {
  const { dashboardInfo } = reducerDashboardInfo();
  const [nvidiaResult, setNvidiaResult] = useState<any>(undefined);
  const [amdResult, setAmdResult] = useState<any>(undefined);
  const [amdResult2, setAmdResult2] = useState<any>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [importInfo, setImportInfo] = useState<string>('');
  const [amdGpuList, setAmdGpuList] = useState<string[]>([]);
  const [amdGpuList2, setAmdGpuList2] = useState<string[]>([]);
  const [nvidiaDuration, setNvidiaDuration] = useState<number>(-1);
  const [amdDuration, setAmdDuration] = useState<number>(-1);
  const [amdDuration2, setAmdDuration2] = useState<number>(-1);
  const [nvidiaLatency, setNvidiaLatency] = useState<number>(-1);
  const [amdLatency, setAmdLatency] = useState<number>(-1);
  const [amdLatency2, setAmdLatency2] = useState<number>(-1);

  useEffect(() => {
    let unmount = false;
    const onLoadApi = async () => {
      await nvidiaApi
        .get('/api')
        .then((response) => {
          if (unmount) return;
          setNvidiaDuration(response.config.params.duration);
          if (response.status === 200) {
            setNvidiaLatency(response.data.commandDelay);
            setNvidiaResult(response.data.smiResult.nvidia_smi_log);
          } else {
            setNvidiaResult(undefined);
          }
        })
        .catch((error) => {
          if (unmount) return;
          setNvidiaDuration(-1);
          console.log('error', error);
        });
      await amdApi
        .get('/api')
        .then((response) => {
          if (unmount) return;
          setAmdDuration(response.config.params.duration);
          if (response.status === 200) {
            setAmdResult(response);
            setAmdLatency(response.data.commandDelay);
            setAmdGpuList(Object.keys(response.data.smiResult));
          } else {
            setAmdResult(undefined);
          }
        })
        .catch((error) => {
          if (unmount) return;
          setAmdDuration(-1);
          console.log('error', error);
        });
      await amdApi2
        .get('/api')
        .then((response) => {
          if (unmount) return;
          setAmdDuration2(response.config.params.duration);
          if (response.status === 200) {
            setAmdResult2(response);
            setAmdLatency2(response.data.commandDelay);
            setAmdGpuList2(Object.keys(response.data.smiResult));
          } else {
            setAmdGpuList2(undefined);
          }
        })
        .catch((error) => {
          if (unmount) return;
          setAmdDuration2(-1);
          console.log('error', error);
        });
    };

    const interval = setInterval(() => {
      onLoadApi();
    }, 1 * 1000);

    return () => {
      unmount = true;
      clearInterval(interval);
    };
  }, []);

  const printAll = (jsonObject: any, edit: boolean, gpu: 'amd' | 'nvidia', refreshValue: number, depth: number = 0) => {
    return Object.keys(jsonObject).map((key: string, index: number) => (
      <Fragment key={`${index}-${refreshValue}-${depth}-${edit}`}>
        {typeof jsonObject[key] === 'string' && (editMode || !dashboardInfo.get[gpu].ignore.includes(key)) && (
          <DashboardItem
            title={key}
            value={jsonObject[key]}
            depth={depth}
            gpu={gpu}
            edit={edit}
            refreshValue={refreshValue}
          ></DashboardItem>
        )}
        {typeof jsonObject[key] === 'object' && (editMode || !dashboardInfo.get[gpu].ignore.includes(key)) && (
          <DashboardItem
            title={key}
            value={jsonObject[key]}
            depth={depth}
            gpu={gpu}
            edit={edit}
            refreshValue={refreshValue}
          >
            {printAll(jsonObject[key], edit, gpu, depth + 1)}
          </DashboardItem>
        )}
      </Fragment>
    ));
  };
  const doImport = () => {
    try {
      const parse = JSON.parse(importInfo);
      dashboardInfo.set(parse);
      toast.success('Success', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
    } catch (e) {
      toast.error('Invalid json', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
    }
  };
  const doExport = () => {
    // navigator.clipboard.writeText(JSON.stringify(dashboardInfo.get));
    const tempElem = document.createElement('textarea');
    tempElem.value = JSON.stringify(dashboardInfo.get);
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);

    toast.success('Copied', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <Wrapper>
      <StyledConnectionStatusWrapper style={{ bottom: '51px' }}>
        <StyledConnectionStatus
          style={{
            backgroundColor: nvidiaDuration === -1 ? 'red' : 'green'
          }}
        ></StyledConnectionStatus>{' '}
        NVIDIA (p100) {nvidiaDuration === -1 ? '' : `${nvidiaDuration / 1000}s`} ({nvidiaLatency === -1 ? '' : `${nvidiaLatency / 1000}s`})
      </StyledConnectionStatusWrapper>
      <StyledConnectionStatusWrapper style={{ bottom: '33px' }}>
        <StyledConnectionStatus
          style={{
            backgroundColor: amdDuration === -1 ? 'red' : 'green'
          }}
        ></StyledConnectionStatus>{' '}
        AMD (rx51) {amdDuration === -1 ? '' : `${amdDuration / 1000}s`} ({amdLatency === -1 ? '' : `${amdLatency / 1000}s`})
      </StyledConnectionStatusWrapper>
      <StyledConnectionStatusWrapper>
        <StyledConnectionStatus
          style={{
            backgroundColor: amdDuration2 === -1 ? 'red' : 'green'
          }}
        ></StyledConnectionStatus>{' '}
        AMD (rx52) {amdDuration2 === -1 ? '' : `${amdDuration2 / 1000}s`} ({amdLatency2 === -1 ? '' : `${amdLatency2 / 1000}s`})
      </StyledConnectionStatusWrapper>
      {nvidiaResult && nvidiaResult.cuda_version === '10.2' && (
        <Fragment>
          <StyledHeader>
            <StyledList>
              <li>
                <a href={'#nvidia'}>
                  <Button>NVIDIA</Button>
                </a>
                <a href={'#amd'}>
                  <Button>AMD</Button>
                </a>
              </li>
              <li>
                <Button primary={editMode} onClick={() => setEditMode((prev) => !prev)}>
                  {editMode ? 'edit' : 'readonly'}
                </Button>
                <Button onClick={() => doImport()}>Import</Button>
                <Button onClick={() => doExport()}>Export</Button>
              </li>
            </StyledList>
            <StyledImportInput
              type="text"
              placeholder={'Import json: '}
              value={importInfo}
              onChange={(e) => setImportInfo(e.target.value)}
            />
          </StyledHeader>
          <StyledBody id={'nvidia'}>
            <Fragment>
              {nvidiaResult.gpu.map((gpuEl, gpuIndex) => (
                <Panel key={gpuIndex}>
                  <h2 className={'panel-title'}>
                    GPU {gpuIndex + 1} : {gpuEl.id}
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {printAll(gpuEl, editMode, 'nvidia', gpuIndex)}
                  </div>
                </Panel>
              ))}
            </Fragment>
          </StyledBody>

          <article id={'amd'} style={{ scrollMarginTop: '114px' }}>
            <Fragment>
              {amdResult &&
                amdResult.data &&
                amdGpuList.map((gpuEl, gpuIndex) => (
                  <Panel key={gpuIndex}>
                    <h2 className={'panel-title'}>GPU: {gpuEl}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {printAll(amdResult.data.smiResult[gpuEl], editMode, 'amd', gpuIndex)}
                    </div>
                  </Panel>
                ))}
            </Fragment>
          </article>

          <article>
            <Fragment>
              {amdResult2 &&
                amdResult2.data &&
                amdGpuList2.map((gpuEl, gpuIndex) => (
                  <Panel key={gpuIndex}>
                    <h2 className={'panel-title'}>GPU: {gpuEl}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {printAll(amdResult2.data.smiResult[gpuEl], editMode, 'amd', gpuIndex)}
                    </div>
                  </Panel>
                ))}
            </Fragment>
          </article>
        </Fragment>
      )}
      {!nvidiaResult && (
        <span>
          Loading ...
          <br />
        </span>
      )}
      {!amdResult && (
        <span>
          Loading ...
          <br />
        </span>
      )}
      {!amdResult2 && (
        <span>
          Loading ...
          <br />
        </span>
      )}
    </Wrapper>
  );
};

export default Dashboard;

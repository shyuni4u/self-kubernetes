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
  margin-top: 114px;
  ${({ theme }) => theme.media.tablet`
    margin-top: 0;
  `}
  ${({ theme }) => theme.media.mobile`
    margin-top: 0;
  `}
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

export const Dashboard: React.FC = () => {
  const { dashboardInfo } = reducerDashboardInfo();
  const [nvidiaResult, setNvidiaResult] = useState<any>(undefined);
  const [amdResult, setAmdResult] = useState<any>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [importInfo, setImportInfo] = useState<string>('');
  const [amdGpuList, setAmdGpuList] = useState<string[]>([]);

  useEffect(() => {
    let unmount = false;
    const onLoadApi = async () => {
      await nvidiaApi
        .get('/api')
        .then((response) => {
          if (unmount) return;
          if (response.status === 200) {
            setNvidiaResult(response.data.nvidia_smi_log);
          } else {
            setNvidiaResult(undefined);
          }
        })
        .catch((error) => {
          if (unmount) return;
          console.log('error', error);
        });
      await amdApi
        .get('/api')
        .then((response) => {
          if (unmount) return;
          if (response.status === 200) {
            setAmdResult(response);
            setAmdGpuList(Object.keys(response.data));
          } else {
            setAmdResult(undefined);
          }
        })
        .catch((error) => {
          if (unmount) return;
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

  const printAll = (
    jsonObject: any,
    edit: boolean,
    gpu: string,
    refreshValue: number,
    depth: number = 0
  ) => {
    return Object.keys(jsonObject).map((key: string, index: number) => (
      <Fragment key={`${index}-${refreshValue}-${depth}-${edit}`}>
        {typeof jsonObject[key] === 'string' &&
          (editMode || !dashboardInfo.get[gpu].ignore.includes(key)) && (
            <DashboardItem
              title={key}
              value={jsonObject[key]}
              depth={depth}
              gpu={gpu}
              edit={edit}
              refreshValue={refreshValue}
            ></DashboardItem>
          )}
        {typeof jsonObject[key] === 'object' &&
          (editMode || !dashboardInfo.get[gpu].ignore.includes(key)) && (
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
      {nvidiaResult && nvidiaResult.cuda_version === '10.2' && (
        <Fragment>
          <StyledHeader>
            <StyledList>
              <li>
                <Button
                  primary={editMode}
                  onClick={() => setEditMode((prev) => !prev)}
                >
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
          <StyledBody>
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

          <article style={{ marginTop: '10px' }}>
            <Fragment>
              {amdResult &&
                amdResult.data &&
                amdGpuList.map((gpuEl, gpuIndex) => (
                  <Panel key={gpuIndex}>
                    <h2 className={'panel-title'}>GPU: {gpuEl}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {printAll(
                        amdResult.data[gpuEl],
                        editMode,
                        'amd',
                        gpuIndex
                      )}
                    </div>
                  </Panel>
                ))}
            </Fragment>
          </article>
        </Fragment>
      )}
      {!nvidiaResult && <span>Can't connect to nvidia server</span>}
      {!amdResult && <span>Can't connect to amd server</span>}
    </Wrapper>
  );
};

export default Dashboard;

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
const StyledPageButton = styled.button.attrs({
  type: 'button'
})`
  line-height: 1.5;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #c77e19;
  color: #f7b10a;
  margin: 10px;
  padding: 6px 15px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #b06601;
    color: #ffd36b;
    outline-width: 0;
  }
  -webkit-transition: 0.2s;
  transition: 0.2s;
`;
const StyledImportInput = styled.input`
  background-color: #ddd;
  color: #333;
  width: calc(100% - 20px);
  margin: 0 10px 10px;
  padding: 10px;
`;

const amdApi = axios.create({
  baseURL: auth['amd-ip'],
  timeout: 5000
});

export const Dashboard: React.FC = () => {
  const { dashboardInfo } = reducerDashboardInfo();
  const [result, setResult] = useState<any>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [importInfo, setImportInfo] = useState<string>('');
  const [selectedGpu, setSelectedGpu] = useState<number>(-1);

  useEffect(() => {
    if (selectedGpu === -1 && result && result.data) {
      Object.keys(result.data).map((gpuEl, gpuIndex) => {
        // console.log(gpuEl, result.data[gpuEl]);
      });
    }
  }, [selectedGpu, result]);

  useEffect(() => {
    let unmount = false;
    const onLoadApi = async () => {
      await amdApi
        .get('/api')
        .then((response) => {
          if (unmount) return;
          if (response.status === 200) {
            setResult(response);
          } else {
            setResult(undefined);
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
    refreshValue: number,
    depth: number = 0
  ) => {
    console.log('printAll');
    return Object.keys(jsonObject).map((key: string, index: number) => (
      <Fragment key={`${index}-${refreshValue}-${depth}`}>
        {typeof jsonObject[key] === 'string' &&
          (editMode || !dashboardInfo.get['amd'].ignore.includes(key)) && (
            <DashboardItem
              title={key}
              value={jsonObject[key]}
              depth={depth}
              gpu={'amd'}
              edit={edit}
              refreshValue={refreshValue}
            ></DashboardItem>
          )}
        {typeof jsonObject[key] === 'object' &&
          (editMode || !dashboardInfo.get['amd'].ignore.includes(key)) && (
            <DashboardItem
              title={key}
              value={jsonObject[key]}
              depth={depth}
              gpu={'amd'}
              edit={edit}
              refreshValue={refreshValue}
            >
              {printAll(jsonObject[key], edit, depth + 1)}
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
      {result && result.data && (
        <Fragment>
          <StyledHeader>
            <StyledList>
              <li>
                {Object.keys(result.data).map(
                  (gpuEl: any, gpuIndex: number) => (
                    <StyledPageButton
                      key={gpuIndex}
                      style={{
                        backgroundColor:
                          gpuIndex === selectedGpu ? '#b06601' : '',
                        color: gpuIndex === selectedGpu ? '#ffd36b' : ''
                      }}
                      onClick={() => setSelectedGpu(gpuIndex)}
                    >
                      {gpuEl}
                    </StyledPageButton>
                  )
                )}
                <StyledPageButton
                  style={{
                    backgroundColor: selectedGpu === -1 ? '#b06601' : '',
                    color: selectedGpu === -1 ? '#ffd36b' : ''
                  }}
                  onClick={() => setSelectedGpu(-1)}
                >
                  ALL
                </StyledPageButton>
              </li>
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
              {selectedGpu !== -1 && result && result.data && (
                <Panel>
                  <h2 className={'panel-title'}>
                    GPU {selectedGpu + 1} : {result.gpu[selectedGpu].id}
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {printAll(result.data[selectedGpu], editMode, selectedGpu)}
                  </div>
                </Panel>
              )}
              {selectedGpu === -1 &&
                result &&
                result.data &&
                Object.keys(result.data).map((gpuEl, gpuIndex) => (
                  <Panel key={gpuIndex}>
                    <h2 className={'panel-title'}>GPU: {gpuEl}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {printAll(result.data[gpuEl], editMode, gpuIndex)}
                    </div>
                  </Panel>
                ))}
            </Fragment>
          </StyledBody>
          {/*  */}
        </Fragment>
      )}
      {!result && <span>Can't connect to server</span>}
    </Wrapper>
  );
};

export default Dashboard;

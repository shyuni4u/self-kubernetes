import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import Wrapper from '../../components/organisms/Wrapper';
import Panel from '../../components/atoms/Panel';
import Button from '../../components/atoms/Button';
import DashboardItem from '../../components/atoms/DashboardItem';

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

const dummy = { "card1": { "GPU ID": "0x731f", "VBIOS version": "113-1E4260U-O4E", "Temperature (Sensor edge) (C)": "49.0", "Temperature (Sensor junction) (C)": "49.0", "Temperature (Sensor mem) (C)": "50.0", "dcefclk clock speed": "506Mhz", "dcefclk clock level": "0", "fclk clock speed": "1085Mhz", "fclk clock level": "1", "mclk clock speed": "100Mhz", "mclk clock level": "0", "pcie clock speed": "8.0GT/s, x16 619Mhz", "pcie clock level": "1", "sclk clock speed": "2045Mhz", "sclk clock level": "1", "socclk clock speed": "1085Mhz", "socclk clock level": "1", "Performance Level": "auto", "GPU OverDrive value (%)": "0", "GPU Memory OverDrive value (%)": "0", "Max Graphics Package Power (W)": "195.0", "Average Graphics Package Power (W)": "10.0", "GPU use (%)": "0", "GPU memory use (%)": "0", "GPU memory vendor": "samsung", "PCIe Replay Count": "0", "Unique ID": "N/A", "Serial Number": "N/A", "Voltage (mV)": "725", "PCI Bus": "0000:3b:00.0", "ASD firmware version": "553648181", "CE firmware version": "37", "DMCU firmware version": "0", "MC firmware version": "0", "ME firmware version": "94", "MEC firmware version": "135", "MEC2 firmware version": "135", "PFP firmware version": "143", "RLC firmware version": "128", "RLC SRLC firmware version": "0", "RLC SRLG firmware version": "0", "RLC SRLS firmware version": "0", "SDMA firmware version": "30", "SDMA2 firmware version": "30", "SMC firmware version": "00.42.58.00", "SOS firmware version": "0x00100050", "TA RAS firmware version": "00.00.00.00", "TA XGMI firmware version": "00.00.00.00", "UVD firmware version": "0x00000000", "VCE firmware version": "0x00000000", "VCN firmware version": "0x0510a00d", "Card series": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "Card vendor": "Sapphire Technology Limited", "Card SKU": "1E4260" }, "card2": { "GPU ID": "0x731f", "VBIOS version": "113-1E4260U-O4E", "Temperature (Sensor edge) (C)": "52.0", "Temperature (Sensor junction) (C)": "52.0", "Temperature (Sensor mem) (C)": "54.0", "dcefclk clock speed": "506Mhz", "dcefclk clock level": "0", "fclk clock speed": "1085Mhz", "fclk clock level": "1", "mclk clock speed": "100Mhz", "mclk clock level": "0", "pcie clock speed": "8.0GT/s, x16 619Mhz", "pcie clock level": "1", "sclk clock speed": "2095Mhz", "sclk clock level": "1", "socclk clock speed": "1085Mhz", "socclk clock level": "1", "Performance Level": "auto", "GPU OverDrive value (%)": "0", "GPU Memory OverDrive value (%)": "0", "Max Graphics Package Power (W)": "195.0", "Average Graphics Package Power (W)": "12.0", "GPU use (%)": "0", "GPU memory use (%)": "0", "GPU memory vendor": "samsung", "PCIe Replay Count": "0", "Unique ID": "N/A", "Serial Number": "N/A", "Voltage (mV)": "725", "PCI Bus": "0000:86:00.0", "ASD firmware version": "553648181", "CE firmware version": "37", "DMCU firmware version": "0", "MC firmware version": "0", "ME firmware version": "94", "MEC firmware version": "135", "MEC2 firmware version": "135", "PFP firmware version": "143", "RLC firmware version": "128", "RLC SRLC firmware version": "0", "RLC SRLG firmware version": "0", "RLC SRLS firmware version": "0", "SDMA firmware version": "30", "SDMA2 firmware version": "30", "SMC firmware version": "00.42.58.00", "SOS firmware version": "0x00100050", "TA RAS firmware version": "00.00.00.00", "TA XGMI firmware version": "00.00.00.00", "UVD firmware version": "0x00000000", "VCE firmware version": "0x00000000", "VCN firmware version": "0x0510a00d", "Card series": "Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]", "Card vendor": "Sapphire Technology Limited", "Card SKU": "1E4260" }, "system": { "Driver version": "5.6.15" } };

export const Manual: React.FC = () => {
  const { dashboardInfo } = reducerDashboardInfo();
  const [editMode, setEditMode] = useState<boolean>(true);
  const [importInfo, setImportInfo] = useState<string>('');
  const amdGpuList = Object.keys(dummy);

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
              edit={!edit}
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
              edit={!edit}
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

      <StyledBody id={'amd'} style={{ scrollMarginTop: '114px' }}>
        <Fragment>
          {amdGpuList.map((gpuEl, gpuIndex) => (
            <Panel key={gpuIndex}>
              <h2 className={'panel-title'}>GPU: {gpuEl}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {printAll(
                  dummy[gpuEl],
                  editMode,
                  'amd',
                  gpuIndex
                )}
              </div>
            </Panel>
          ))}
        </Fragment>
      </StyledBody>
    </Wrapper>
  );
};

export default Manual;

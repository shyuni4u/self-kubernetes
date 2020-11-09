import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Wrapper from '../../components/organisms/Wrapper';
import Panel from '../../components/atoms/Panel';

const dummy = {
  card1: {
    'GPU ID': '0x731f',
    'VBIOS version': '113-1E4112U-O45',
    'Temperature (Sensor edge) (C)': '46.0',
    'Temperature (Sensor junction) (C)': '46.0',
    'Temperature (Sensor mem) (C)': '48.0',
    'dcefclk clock speed': '506Mhz',
    'dcefclk clock level': '0',
    'fclk clock speed': '1085Mhz',
    'fclk clock level': '1',
    'mclk clock speed': '100Mhz',
    'mclk clock level': '0',
    'pcie clock speed': '8.0GT/s, x16 619Mhz',
    'pcie clock level': '1',
    'sclk clock speed': '2095Mhz',
    'sclk clock level': '1',
    'socclk clock speed': '1085Mhz',
    'socclk clock level': '1',
    'Performance Level': 'auto',
    'GPU OverDrive value (%)': '0',
    'GPU Memory OverDrive value (%)': '0',
    'Max Graphics Package Power (W)': '195.0',
    'Average Graphics Package Power (W)': '10.0',
    'GPU use (%)': '0',
    'GPU memory use (%)': '0',
    'GPU memory vendor': 'samsung',
    'PCIe Replay Count': '0',
    'Unique ID': 'N/A',
    'Serial Number': 'N/A',
    'Voltage (mV)': '725',
    'PCI Bus': '0000:3b:00.0',
    'ASD firmware version': '553648181',
    'CE firmware version': '37',
    'DMCU firmware version': '0',
    'MC firmware version': '0',
    'ME firmware version': '94',
    'MEC firmware version': '135',
    'MEC2 firmware version': '135',
    'PFP firmware version': '143',
    'RLC firmware version': '128',
    'RLC SRLC firmware version': '0',
    'RLC SRLG firmware version': '0',
    'RLC SRLS firmware version': '0',
    'SDMA firmware version': '30',
    'SDMA2 firmware version': '30',
    'SMC firmware version': '00.42.58.00',
    'SOS firmware version': '0x00100050',
    'TA RAS firmware version': '00.00.00.00',
    'TA XGMI firmware version': '00.00.00.00',
    'UVD firmware version': '0x00000000',
    'VCE firmware version': '0x00000000',
    'VCN firmware version': '0x0510a00d',
    'Card series': 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]',
    'Card vendor': 'Sapphire Technology Limited',
    'Card SKU': '1E4112'
  },
  card2: {
    'GPU ID': '0x731f',
    'VBIOS version': '113-1E4112U-O45',
    'Temperature (Sensor edge) (C)': '43.0',
    'Temperature (Sensor junction) (C)': '43.0',
    'Temperature (Sensor mem) (C)': '44.0',
    'dcefclk clock speed': '506Mhz',
    'dcefclk clock level': '0',
    'fclk clock speed': '1085Mhz',
    'fclk clock level': '1',
    'mclk clock speed': '100Mhz',
    'mclk clock level': '0',
    'pcie clock speed': '8.0GT/s, x16 619Mhz',
    'pcie clock level': '1',
    'sclk clock speed': '2060Mhz',
    'sclk clock level': '1',
    'socclk clock speed': '1085Mhz',
    'socclk clock level': '1',
    'Performance Level': 'auto',
    'GPU OverDrive value (%)': '0',
    'GPU Memory OverDrive value (%)': '0',
    'Max Graphics Package Power (W)': '195.0',
    'Average Graphics Package Power (W)': '8.0',
    'GPU use (%)': '0',
    'GPU memory use (%)': '0',
    'GPU memory vendor': 'samsung',
    'PCIe Replay Count': '0',
    'Unique ID': 'N/A',
    'Serial Number': 'N/A',
    'Voltage (mV)': '725',
    'PCI Bus': '0000:86:00.0',
    'ASD firmware version': '553648181',
    'CE firmware version': '37',
    'DMCU firmware version': '0',
    'MC firmware version': '0',
    'ME firmware version': '94',
    'MEC firmware version': '135',
    'MEC2 firmware version': '135',
    'PFP firmware version': '143',
    'RLC firmware version': '128',
    'RLC SRLC firmware version': '0',
    'RLC SRLG firmware version': '0',
    'RLC SRLS firmware version': '0',
    'SDMA firmware version': '30',
    'SDMA2 firmware version': '30',
    'SMC firmware version': '00.42.58.00',
    'SOS firmware version': '0x00100050',
    'TA RAS firmware version': '00.00.00.00',
    'TA XGMI firmware version': '00.00.00.00',
    'UVD firmware version': '0x00000000',
    'VCE firmware version': '0x00000000',
    'VCN firmware version': '0x0510a00d',
    'Card series': 'Navi 10 [Radeon RX 5600 OEM/5600 XT / 5700/5700 XT]',
    'Card vendor': 'Sapphire Technology Limited',
    'Card SKU': '1E4112'
  },
  system: { 'Driver version': '5.6.15' }
};

export type amd_result = typeof dummy;

const amdApi = axios.create({
  baseURL: 'http://147.46.219.60:35100',
  timeout: 5000
});

export const Dashboard: React.FC = () => {
  const [result, setResult] = useState<any>(undefined);

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

  const printAll = (jsonObject: any, depth: number = 0) => {
    return Object.keys(jsonObject).map((key: string, index: number) => (
      <div key={index}>
        {typeof jsonObject[key] === 'string' && (
          <span style={{ paddingLeft: `${depth * 20}px` }}>
            {key}: {jsonObject[key]}
            <br />
          </span>
        )}
        {typeof jsonObject[key] === 'object' &&
          printAll(jsonObject[key], depth + 1)}
      </div>
    ));
  };

  return (
    <Wrapper>
      {result && result.data && (
        <>
          {Object.keys(result.data).map((gpuEl, gpuIndex) => (
            <Panel key={gpuIndex}>
              <h2 className={'panel-title'}>GPU: {gpuEl}</h2>
              <div className={'panel-content'} style={{ textAlign: 'left' }}>
                {printAll(result.data[gpuEl])}
              </div>
            </Panel>
          ))}
        </>
      )}
      {!result && <span>Can't connect to server</span>}
    </Wrapper>
  );
};

export default Dashboard;

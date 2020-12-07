import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

import Panel from '../atoms/Panel';

import ModnnConfig from '../../lib/setting.json';

const conn = axios.create({
  baseURL: ModnnConfig.modnn.ip,
  timeout: 10 * 1000
});

export const ClusterModnn: React.FC = () => {
  const [result, setResult] = useState<any>(undefined);

  useEffect(() => {
    let unmount = false;
    const onLoadApi = () => {
      conn
        .get('/modnn')
        .then((response) => {
          if (unmount) return;
          if (response.status === 200) {
            console.log(response.data);
            setResult(response.data);
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

  const cols = ['dtInputTime', 'sNodeId', 'sType', 'sGroup', 'sDataname', 'nDataValue'];

  return (
    <Panel>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            {cols.map((el) => (
              <th>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result &&
            result.map((row) => (
              <tr>
                {cols.map((col) => (
                  <td>{row[col]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </Panel>
  );
};

export default ClusterModnn;

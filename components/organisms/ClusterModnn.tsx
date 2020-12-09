import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Panel from '../atoms/Panel';

import ModnnConfig from '../../lib/setting.json';

const conn = axios.create({
  baseURL: ModnnConfig.modnn.ip,
  timeout: 10 * 1000
});

export const ClusterModnn: React.FC = () => {
  const [modnnResult, setModnnResult] = useState<any>(undefined);

  useEffect(() => {
    let unmount = false;
    const onLoadApi = () => {
      conn
        .get('/modnn')
        .then((response) => {
          if (unmount) return;
          if (response.status === 200) {
            setModnnResult(response.data);
          } else {
            setModnnResult(undefined);
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
            {cols.map((el, elIdx) => (
              <th key={elIdx}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {modnnResult &&
            modnnResult.map((row: any, rowIdx: number) => (
              <tr key={rowIdx}>
                {cols.map((col, colIdx) => (
                  <td key={`${rowIdx}-${colIdx}`}>{row[col]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </Panel>
  );
};

export default ClusterModnn;

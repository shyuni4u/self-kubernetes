import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ClusterModnnItem from './ClusterModnnItem';

import ModnnConfig from '../../lib/setting.json';

const conn = axios.create({
  baseURL: ModnnConfig.modnn.ip,
  timeout: 10 * 1000
});

export const ClusterModnn: React.FC = () => {
  const [modnnResult, setModnnResult] = useState<any>(undefined);
  const [nodeNameList, setNodeNameList] = useState<any[]>([]);

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

  useEffect(() => {
    if (modnnResult) {
      const tempNameList = [];
      modnnResult.forEach((signalInfo: any) => {
        if (!tempNameList.some((el) => el.node === signalInfo.sNodeId && el.type === signalInfo.sType)) {
          tempNameList.push({
            node: signalInfo.sNodeId,
            type: signalInfo.sType
          });
        }
      });
      setNodeNameList(tempNameList);
    }
  }, [modnnResult]);

  return (
    <>
      {nodeNameList.length > 0 &&
        nodeNameList.map((node, nodeIdx) => (
          <ClusterModnnItem
            key={nodeIdx}
            node={node.node}
            type={node.type}
            info={modnnResult.filter((el) => el.sNodeId === node.node && el.sType === node.type)}
          />
        ))}
    </>
  );
};

export default ClusterModnn;

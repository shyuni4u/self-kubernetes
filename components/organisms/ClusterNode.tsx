import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ClustNodeItem from './ClusterNodeItem';

import ModnnConfig from '../../lib/setting.json';

const conn = axios.create({
  baseURL: ModnnConfig.modnn.ip,
  timeout: 10 * 1000
});

export const ClusterNode: React.FC = () => {
  const [gpuResult, setGpuResult] = useState<any>(undefined);
  const [nodeNameList, setNodeNameList] = useState<any[]>([]);
  const [nodeList, setNodeList] = useState<any[]>([]);

  useEffect(() => {
    let unmount = false;
    const onLoadApi = () => {
      conn
        .get('/second/all')
        .then((response) => {
          if (unmount) return;
          if (response.status === 200) {
            setGpuResult(response.data);
          } else {
            setGpuResult(undefined);
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
    if (gpuResult) {
      const tempNameList = [];
      const tempList = [];
      gpuResult.forEach((signalInfo: any) => {
        if (!tempList.some((el) => el.node === signalInfo.sNodeId && el.type === signalInfo.sType)) {
          tempNameList.push({
            node: signalInfo.sNodeId,
            type: signalInfo.sType
          });
          tempList.push({
            node: signalInfo.sNodeId,
            type: signalInfo.sType,
            datas: [
              {
                time: signalInfo.dtInputTime,
                data: signalInfo.sSignal
              }
            ]
          });
        } else {
          tempList.forEach((el) => {
            if (el.node === signalInfo.sNodeId && el.type === signalInfo.sType) {
              el.datas.push({
                time: signalInfo.dtInputTime,
                data: signalInfo.sSignal
              });
            }
          });
        }
      });
      setNodeNameList(tempNameList);
      setNodeList(tempList);
    }
  }, [gpuResult]);

  return (
    <>
      {nodeNameList.length > 0 &&
        nodeNameList.map((node, nodeIdx) => (
          <ClustNodeItem key={nodeIdx} info={nodeList.filter((el) => el.node === node.node && el.type === node.type)} />
        ))}
    </>
  );
};

export default ClusterNode;

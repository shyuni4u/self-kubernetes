import React, { useEffect } from 'react';
import k8s from '@kubernetes/client-node';

export const Todo: React.FC = () => {
  useEffect(() => {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    k8sApi.readNamespace('kubernetes-dashboard').then((response) => {
      console.log(response)
    });
  }, [])

  return (
    <>
      test
    </>
  );
};

export default Todo;

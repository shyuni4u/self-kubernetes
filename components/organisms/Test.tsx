import React, { useEffect } from 'react';
import k8s from '@kubernetes/client-node';

// import Http from '../atoms/KubeAPI';

export const Todo: React.FC = () => {
  useEffect(() => {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    k8sApi.listNamespacedPod('default')
      .then((res) => {
        console.log(res.body);
      });
  }, [])
  // useEffect(() => {
  //   const onLoadTest = async () => {
  //     const res = await Http.get('/api/v1/namespaces', {
  //       // params: { query: text }
  //     });
  //     console.log(res)
  //   }
  //   onLoadTest();
  // }, [])

  return (
    <>
      test
    </>
  );
};

export default Todo;

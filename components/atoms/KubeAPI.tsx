import React, { useEffect, useState } from 'react';
import k8s from '@kubernetes/client-node';

export const KubeAPI: React.FC = () => {

  // useEffect(() => {
  //   const kc = new k8s.KubeConfig();
  //   kc.loadFromDefault();

  //   const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

  //   k8sApi.listNamespacedPod('ingress-nginx').then((res) => {
  //     console.log(res.body)
  //   })
  // }, [])

  return (
    <article>
      <h2>Doing</h2>
      <ul>
        <li>None</li>
      </ul>
    </article>
  );
};

export default KubeAPI;

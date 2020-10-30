import React, { useEffect, useState } from 'react';
import KubeHttp from '../atoms/KubeAPI';

export const Todo: React.FC = () => {
  const [namespaces, setNamespaces] = useState<any>(null)
  useEffect(() => {
    const onLoadTest = async () => {
      await KubeHttp.get('/api/v1/namespaces', {
        // params: { query: text }
      }).then(response => {
        setNamespaces(response)
      }).catch(error => {
        console.error(error)
      });
    }
    onLoadTest();
  }, [])

  return (
    <>
      {namespaces && namespaces.data.items.map(item => item.metadata.name)}
    </>
  );
};

export default Todo;

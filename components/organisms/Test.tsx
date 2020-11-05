import React, { useEffect, useState } from 'react';
import KubeHttp from '../atoms/KubeAPI';

export const Todo: React.FC = () => {
  const [namespaces, setNamespaces] = useState<any>(null)
  useEffect(() => {
    const onLoadTest = async () => {
      await KubeHttp.get('/api/v1/namespaces', {
        // params: { query: text }
      }).then(response => {
        // console.log(response)
        setNamespaces(response)
      }).catch(error => {
        console.log(error)
      });
    }
    onLoadTest();
  }, [])

  return (
    <>
      <ul>
        {namespaces && namespaces.data.items.map((item, idx) => (
          <li key={idx}>
            {item.metadata.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;

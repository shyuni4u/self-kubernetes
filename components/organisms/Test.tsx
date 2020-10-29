import React, { useEffect } from 'react';
import Http from '../atoms/KubeAPI';

export const Todo: React.FC = () => {
  useEffect(() => {
    const onLoadTest = async () => {
      const res = await Http.get('/api/v1/namespaces', {
        // params: { query: text }
      });
      console.log(res)
    }
    onLoadTest();
  }, [])

  return (
    <>
      test
    </>
  );
};

export default Todo;

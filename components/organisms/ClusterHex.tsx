import React from 'react';

import clusterInfo from '../../lib/setting.json';

export const ClusterHex: React.FC = () => {
  return (
    <>
      {clusterInfo.clusters.map((item, key) => (
        <div key={key}>ClusterHex {item.name}</div>
      ))}
    </>
  );
};

export default ClusterHex;

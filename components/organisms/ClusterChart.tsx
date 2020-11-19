import React from 'react';
import styled from 'styled-components';

import clusterInfo from '../../lib/setting.json';

import Item from './ClusterChartItem';

const marginCW = 10;
const StyledClusterWrapper = styled.div`
  width: calc(100% - ${marginCW * 2}px);
  margin: 0 ${marginCW}px 30px;

  &:last-child {
    margin-bottom: 5px;
  }
`;

export const ClusterChart: React.FC = () => {
  return (
    <>
      {clusterInfo.clusters.map((cluster, clusterIndex) => (
        <StyledClusterWrapper key={clusterIndex}>
          <h3>ClusterChart {cluster.name}</h3>
          <hr />
          {cluster.nodes.map((node, nodeIndex) => (
            <Item key={`${clusterIndex}-${nodeIndex}`} name={node.name} type={node.type} ip={node.ip} />
          ))}
        </StyledClusterWrapper>
      ))}
    </>
  );
};

export default ClusterChart;

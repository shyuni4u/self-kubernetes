import React, { Fragment } from 'react';
import styled from 'styled-components';

import clusterInfo from '../../lib/setting.json';

import Item from './ClusterChartItem';

const marginCW = 10;
const StyledClusterWrapper = styled.section`
  width: calc(100% - ${marginCW * 2}px);
  margin: 0 ${marginCW}px 30px;

  &:last-child {
    margin-bottom: 5px;
  }
`;
const StyledClusterItemWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
`;

export const ClusterChart: React.FC = () => {
  return (
    <>
      {clusterInfo.clusters.map((cluster, clusterIndex) => (
        <StyledClusterWrapper key={clusterIndex}>
          <h3>Cluster: {cluster.name}</h3>
          <hr />
          <StyledClusterItemWrapper>
            {cluster.nodes.map((node, nodeIndex) => (
              <Item
                key={`${clusterIndex}-${nodeIndex}-${node.name}-${node.type}-${node.ip}`}
                name={node.name}
                type={node.type}
                ip={node.ip}
              />
            ))}
          </StyledClusterItemWrapper>
        </StyledClusterWrapper>
      ))}
    </>
  );
};

export default ClusterChart;

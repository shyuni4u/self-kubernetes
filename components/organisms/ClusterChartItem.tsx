import React from 'react';
import styled from 'styled-components';

export type ClusterChartItemProps = {
  /**
   * Node name
   */
  name: string;
  /**
   * Node type
   */
  type: string; // 'amd' | 'nvidia'
  /**
   * Node IP
   */
  ip: string;
};

export const ClusterChartItem: React.FC<ClusterChartItemProps> = ({ name, type, ip }) => {
  return (
    <>
      <div>
        {name} / {type} / {ip}
      </div>
    </>
  );
};

export default ClusterChartItem;

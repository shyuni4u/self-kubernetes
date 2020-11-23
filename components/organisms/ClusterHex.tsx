import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import clusterInfo from '../../lib/setting.json';

import Item from './ClusterHexItem';

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

const customStyles = (selectType: string) => {
  return {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? '#999' : '#333'
    }),
    container: (provided: any) => ({
      ...provided,
      width: selectType === 'fil' ? '300px' : '100px',
      marginLeft: '10px'
    })
  };
};

export const ClusterHex: React.FC = () => {
  const filterOptions = clusterInfo.filterOption;
  const rangeOptions = [
    { value: 'avg', label: 'AVG' },
    { value: 'max', label: 'MAX' },
    { value: 'min', label: 'MIN' }
  ];
  const defaultFilter = 2;
  const defaultRange = 0;
  const [filter, setFilter] = useState<string>(filterOptions[defaultFilter].value);
  const [range, setRange] = useState<string>(rangeOptions[defaultRange].value);

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Select
          instanceId={'filter_option'}
          styles={customStyles('fil')}
          options={filterOptions}
          onChange={(e) => setFilter(e['value'])}
          defaultValue={filterOptions[defaultFilter]}
        ></Select>
        <Select
          instanceId={'value_option'}
          styles={customStyles('range')}
          options={rangeOptions}
          onChange={(e) => setRange(e['value'])}
          defaultValue={rangeOptions[defaultRange]}
        ></Select>
      </div>
      {clusterInfo.clusters.map((cluster, clusterIndex) => (
        <StyledClusterWrapper key={clusterIndex}>
          <h3>Cluster: {cluster.name}</h3>
          <hr />
          <StyledClusterItemWrapper>
            {cluster.nodes.map((node, nodeIndex) => (
              <Fragment key={`${clusterIndex}-${nodeIndex}-${node.name}-${node.type}-${node.ip}`}>
                <Item name={node.name} type={node.type} ip={node.ip} filter={filter} range={range} />
              </Fragment>
            ))}
          </StyledClusterItemWrapper>
        </StyledClusterWrapper>
      ))}
    </>
  );
};

export default ClusterHex;

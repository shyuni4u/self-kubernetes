import React, { CSSProperties, useEffect } from 'react';
import styled from 'styled-components';

import reducerDashboardInfo from '../../reducers/reducerDashboardInfo';

export type DashboardItemProps = {
  /**
   * CSS
   */
  style?: CSSProperties;
  /**
   * Is primary
   */
  depth?: number;
  /**
   * Title
   */
  title: string;
  /**
   * Sub title
   */
  subtitle?: string;
  /**
   * Value
   */
  value: string;
  /**
   * GPU type
   */
  gpu: string;
  /**
   * Edit mode
   */
  edit?: boolean;
};

const StyledDashboardItem = styled.div`
  flex: 0 1 auto;
  display: flex;
  border: 1px solid #fff;
  padding: 6px;
  margin: 4px;
  height: fit-content;
  line-height: 1.4;
`;
const StyledDashboardItemTitle = styled.div`
  user-select: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

/**
 * Primary UI component for user interaction
 */
export const DashboardItem: React.FC<DashboardItemProps> = ({
  style = {},
  depth = 0,
  title = '',
  subtitle = undefined,
  value = undefined,
  gpu = 'nvidia',
  edit = false,
  ...props
}) => {
  const { dashboardInfo } = reducerDashboardInfo();

  const updateState = () => {
    if (edit) {
      const temp = dashboardInfo.get;
      if (temp[gpu].realtime.includes(title)) {
        //  realtime -> ignore
        temp[gpu].ignore.push(title);
        const idx = temp[gpu].realtime.indexOf(title);
        temp[gpu].realtime.splice(idx, 1);
      } else if (temp[gpu].ignore.includes(title)) {
        //  ignore -> normal
        const idx = temp[gpu].ignore.indexOf(title);
        temp[gpu].ignore.splice(idx, 1);
      } else {
        //  normal -> realtime
        temp[gpu].realtime.push(title);
      }
      dashboardInfo.set(temp);
    }
  };

  if (typeof value === 'string') {
    return (
      <StyledDashboardItem style={style}>
        <StyledDashboardItemTitle
          style={{
            color: dashboardInfo.get[gpu].realtime.includes(title)
              ? 'yellow'
              : dashboardInfo.get[gpu].ignore.includes(title)
              ? 'red'
              : 'white'
          }}
          onClick={() => updateState()}
        >
          {title}
        </StyledDashboardItemTitle>
        :<div>{value}</div>
      </StyledDashboardItem>
    );
  } else if (typeof value === 'object') {
    return (
      <StyledDashboardItem
        style={{
          flexDirection: 'column'
        }}
      >
        <StyledDashboardItemTitle
          style={{
            color: dashboardInfo.get[gpu].realtime.includes(title)
              ? 'yellow'
              : dashboardInfo.get[gpu].ignore.includes(title)
              ? 'red'
              : 'white'
          }}
          onClick={() => updateState()}
        >
          {title}
        </StyledDashboardItemTitle>
        <div style={{ flex: '0 1 auto' }}>{props.children}</div>
      </StyledDashboardItem>
    );
  } else {
    return <></>;
  }
};

export default DashboardItem;

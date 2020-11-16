import React from 'react';
import styled from 'styled-components';

import Wrapper from '../../components/organisms/Wrapper';
import Button from '../../components/atoms/Button';
import DashboardItem from '../../components/atoms/DashboardItem';

const StyledList = styled.ul`
  & li {
    display: flex;
    align-items: center;
    border-bottom: 1px dotted orange;
    margin: 10px;
    &:first-child {
      border-top: 1px dotted orange;
    }
    & > div:first-child {
      width: 400px;
    }
    & > div:last-child > pre {
      margin-bottom: 10px;
    }
  }
`;
const StyledImportInput = styled.input`
  background-color: #ddd;
  color: #333;
  width: calc(100% - 20px);
  margin: 0 10px 10px;
  padding: 10px;
`;
const StyledConnectionStatusWrapper = styled.div`
  display: flex;
  padding: 10px;
  color: #fff;
  align-items: center;
  z-index: 1;
`;
const StyledConnectionStatus = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Manual: React.FC = () => {
  return (
    <Wrapper>
      <h1 style={{ marginBottom: '20px', textAlign: 'center', fontWeight: 600 }}>Dashboard Manual</h1>
      <StyledList>
        <li>
          <div>
            <Button primary={true}>edit</Button>
          </div>
          <div>[EDIT] : API로 가져온 정보 중 어떤 항목을 보여줄지 설정하는 화면으로 전환</div>
        </li>
        <li>
          <div>
            <Button>readonly</Button>
          </div>
          <div>[READONLY] : 정보를 설정된 화면으로 보여줌</div>
        </li>
        <li>
          <div>
            <div style={{ width: '240px' }}>
              <DashboardItem
                title={'For Manual'}
                value={'<= Click title'}
                depth={0}
                gpu={'amd'}
                edit={true}
                refreshValue={1}
              ></DashboardItem>
            </div>
          </div>
          <div>
            <DashboardItem
              title={'For Manual'}
              value={'50'}
              depth={0}
              gpu={'amd'}
              edit={false}
              refreshValue={1}
            ></DashboardItem>
            <pre>
              [EDIT] 모드일 때, 항목의 이름을 클릭시 흰색, <span style={{ color: 'yellow' }}>노란색</span>,{' '}
              <span style={{ color: 'red' }}>붉은색</span>으로 변경.
              <br />
              흰색: 가공없이 보여줌
              <br />
              <span style={{ color: 'yellow' }}>노란색</span>: [Dashboard]에서 그래프로 표현
              <br />
              <span style={{ color: 'red' }}>붉은색</span>: [Dashboard]에서 제외
            </pre>
          </div>
        </li>
        <li>
          <div>
            <Button>import</Button>
            <StyledImportInput style={{ width: '240px' }} type="text" placeholder={'Import json: '} />
          </div>
          <div>[IMPORT] : 설정 JSON으로 불러오기</div>
        </li>
        <li>
          <div>
            <Button>export</Button>
          </div>
          <div>[EXPORT] : 설정 JSON으로 내보내기 (클릭시 클립보드로 자동저장)</div>
        </li>
        <li>
          <div>
            <StyledConnectionStatusWrapper>
              <StyledConnectionStatus style={{ backgroundColor: 'green' }}></StyledConnectionStatus> GPU (SERVER-NAME)
              0.042s (0.017s)
            </StyledConnectionStatusWrapper>
          </div>
          <div>GPU 종류 (서버명) API 응답시간 (COMMAND 수행 시간)</div>
        </li>
        <li>
          <div>
            <StyledConnectionStatusWrapper>
              <StyledConnectionStatus style={{ backgroundColor: 'red' }}></StyledConnectionStatus>
            </StyledConnectionStatusWrapper>
          </div>
          <div>서버 연결이 안되었을 경우</div>
        </li>
      </StyledList>
    </Wrapper>
  );
};

export default Manual;

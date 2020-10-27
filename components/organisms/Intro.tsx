import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
  padding: 40px;
  ${({ theme }) => theme.media.tablet`
    padding: 15px;
  `}
  ${({ theme }) => theme.media.mobile`
    padding: 15px;
  `}
`;
const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin: 20px 0;
  ${({ theme }) => theme.media.tablet`
    margin: 20px 0 10px;
  `}
  ${({ theme }) => theme.media.mobile`
    margin: 20px 0 10px;
  `}
`;
const StyledContent = styled.div``;
const StyledSubContentWrapper = styled.div`
  padding: 10px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const StyledSubTitle = styled.h4`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.subtitle16};
  margin-bottom: 10px;
`;
const StyledSubContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body14};
  line-height: ${({ theme }) => theme.fontSizes.h3};

  span.sub-title {
    margin-bottom: 10px;
  }
`;
const StyledGoDetail = styled.a`
  font-size: 0.6em;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 2px 5px;
  margin-left: 10px;
  user-select: none;
  cursor: pointer;
  &:hover {
    font-weight: 600;
  }
`;

export const Intro: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Big 5 테스트</StyledTitle>
      <StyledContent>
        <StyledSubContentWrapper
          style={{
            backgroundColor: '#f3ffe3',
            border: '1px solid #9fbd63'
          }}
        >
          <StyledSubTitle>1. Big 5 테스트란 ?</StyledSubTitle>
          <StyledSubContent>
            1976년에 심리학자 폴 코스타(Paul Costa Jr.)와 로버트 매크레이(Robert
            R. McCrae)가 개발했으며, 인간의 성격을 5가지의 상호 독립적인
            요인들로 설명하는 성격심리학적 모형. 학계에서 논의된 5요인 모형(FFM;
            Five-Factor Model)을 기반으로 하며, 검사는 NEO-PI-R이라고 불린다.
            간혹 5가지 요인들의 두문자어를 빌려서 OCEAN이라고도 불린다.
            <StyledGoDetail href={'https://namu.wiki/w/Big5'} target={'_blank'}>
              자세히
            </StyledGoDetail>
          </StyledSubContent>
        </StyledSubContentWrapper>
      </StyledContent>
    </StyledWrapper>
  );
};

export default Intro;

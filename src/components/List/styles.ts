import styled from 'styled-components';

export const OuterWrapper = styled.div`
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const InnerWrapper = styled.div`
  display: block;
  overflow-x: scroll;
  white-space: nowrap;
`;

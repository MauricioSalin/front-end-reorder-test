import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 370px;
  height: 644px;
  overflow: hidden;
  border-radius: 15px;

  @media (max-width: 414px) and (max-height: 896px) {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    left: 50%;
    bottom: 10px;
    border-radius: 24px;
    transform: translate(-50%, 0);
  }
`;

export const Image = styled('img')<{ loading: boolean }>`
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
  filter: ${(props) => (props.loading ? 'blur(3px)' : 'none')};
`;

export const PriceTag = styled.span`
  background: #00a2ff;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 16px;
  padding: 5px 10px;
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 2;
  height: 24px;
`;

export const Dots = styled.span`
  &::after {
    position: absolute;
    font-size: 100px;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ellipsis 1.25s infinite;
    content: '.';
    text-align: left;
  }

  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;

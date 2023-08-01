import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: #fff;
  padding: 15px;
  z-index: 3;
  border-radius: 24px;
  width: 350px;

  @media (max-width: 414px) and (max-height: 896px) {
    width: calc(100% - 20px);
    height: auto;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, 0);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 19.5px;
  color: #000;
`;

export const ClearButton = styled.button`
  color: #fff;
  height: 24px;
  font-size: 10px;
  font-weight: 500;
  line-height: 12.19px;
  letter-spacing: 1.5px;
  border-radius: 0px 8px 0px 8px;
  background-color: #00a2ff;
  border: none;
  text-transform: uppercase;
  padding: 5px 12px;
  vertical-align: middle;
`;

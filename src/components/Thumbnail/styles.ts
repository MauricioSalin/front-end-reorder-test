import styled from 'styled-components';

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ThumbButton = styled('button')<{
  isSelected: boolean | undefined;
  loading: boolean;
}>`
  margin-right: 5px;
  border-radius: 8px;
  border: ${(props) =>
    props.isSelected ? '3px solid #00A2FF' : '3px solid #eaeaea'};
  padding: 0;
  opacity: ${(props) => (props.loading ? '0.4' : '1')};
`;

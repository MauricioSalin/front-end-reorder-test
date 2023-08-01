import { FC, ReactNode } from 'react';

import { Container, ClearButton, Text, Header } from './styles';

interface BackdropProps {
  loading: boolean;
  children: ReactNode;
  handleClear: () => void;
}

export const Backdrop: FC<BackdropProps> = ({
  loading,
  children,
  handleClear,
}) => (
  <Container>
    <Header>
      <Text>Combinar</Text>
      {!loading && (
        <ClearButton onClick={async () => await handleClear()}>
          Limpar
        </ClearButton>
      )}
    </Header>
    {children}
  </Container>
);

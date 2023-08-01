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
  <Container data-testid="backdrop-container">
    <Header data-testid="backdrop-header">
      <Text>Combinar</Text>
      {!loading && (
        <ClearButton
          data-testid="backdrop-clear-button"
          onClick={async () => await handleClear()}
        >
          Limpar
        </ClearButton>
      )}
    </Header>
    {children}
  </Container>
);

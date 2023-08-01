import { FC } from 'react';

import { Container, Image, PriceTag, Dots } from './styles';

interface StageProps {
  loading: boolean;
  imageUrl: string;
  currentPrice: number | undefined;
}

export const Stage: FC<StageProps> = ({ imageUrl, loading, currentPrice }) => {
  const price =
    currentPrice &&
    currentPrice.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <Container data-testid="stage-container">
      <Image
        data-testid="stage-image"
        src={imageUrl}
        alt=""
        loading={loading}
      />
      {loading && <Dots data-testid="loading-dots" />}
      {currentPrice && currentPrice > 0 && (
        <PriceTag data-testid="stage-tag">{price}</PriceTag>
      )}
    </Container>
  );
};

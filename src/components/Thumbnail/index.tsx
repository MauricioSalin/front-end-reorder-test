import { FC } from 'react';
import { Image, ThumbButton } from './styles';

interface Props {
  src: string;
  loading: boolean;
  isSelected: boolean | undefined;
  onClickItem: () => void;
}

export const Thumbnail: FC<Props> = ({
  src,
  loading,
  isSelected,
  onClickItem,
}: Props) => (
  <ThumbButton
    data-testid="thumbnail-button"
    onClick={onClickItem}
    isSelected={isSelected}
    loading={loading}
  >
    <Image data-testid="thumbnail-image" src={src} alt="" />
  </ThumbButton>
);

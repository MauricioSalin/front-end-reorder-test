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
  <ThumbButton onClick={onClickItem} isSelected={isSelected} loading={loading}>
    <Image src={src} alt="" />
  </ThumbButton>
);

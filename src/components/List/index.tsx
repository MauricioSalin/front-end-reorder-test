import { FC, ReactNode } from 'react';
import { OuterWrapper, InnerWrapper } from './styles';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

export const List: FC<ListProps<any>> = <T,>({
  items,
  renderItem,
}: ListProps<T>) => (
  <OuterWrapper>
    <InnerWrapper>
      {items.map((item: T, index) => (
        <>{renderItem(item, index)}</>
      ))}
    </InnerWrapper>
  </OuterWrapper>
);

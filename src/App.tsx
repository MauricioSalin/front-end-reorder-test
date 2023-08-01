import { List } from './components/List';
import { Stage } from './components/Stage';
import { Product } from './types';
import { Backdrop } from './components/Backdrop';
import { Thumbnail } from './components/Thumbnail';

import useProduct from './hooks/useProduct';

const App = () => {
  const {
    loading,
    products,
    selectedProduct,
    handleSelectItem,
    handleClearItems,
  } = useProduct();

  console.log(loading);

  return (
    <>
      <Stage
        imageUrl={selectedProduct.thumbnail}
        currentPrice={selectedProduct.currentPrice}
        loading={loading}
      />
      <Backdrop handleClear={handleClearItems} loading={loading}>
        <List
          items={products}
          renderItem={(product: Product) => (
            <Thumbnail
              src={product.thumbnail}
              onClickItem={() => handleSelectItem(product)}
              isSelected={product.isSelected}
              loading={loading}
            />
          )}
        />
      </Backdrop>
    </>
  );
};

export default App;

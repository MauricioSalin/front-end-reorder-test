import { useState, useEffect } from 'react';
import { Product } from '../../types';

const MOCK_PATH = 'src/data/products.json';

const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product,
  );
  const [loading, setLoading] = useState(true);

  const getRelatedProducts = (
    products: Product[],
    currentItem: Product,
  ): Product[] => {
    return products.filter(
      (product: Product) =>
        product.active &&
        product.parent_identifier !== null &&
        product.identifier !== currentItem.identifier &&
        product.parent_identifier === currentItem.parent_identifier,
    );
  };

  const getCurrentPrice = (listPrice: number, sellingPrice: number): number => {
    if (sellingPrice > 0 && sellingPrice < listPrice) return sellingPrice;

    return Math.min(listPrice, sellingPrice);
  };

  const handleSelectItem = async (item: Product) => {
    setLoading(true);

    await setTimeout(() => {
      const currentPrice = getCurrentPrice(item.list_price, item.selling_price);
      const currentItem = { ...item, isSelected: true, currentPrice };

      const relatedProducts = getRelatedProducts(initialProducts, item);
      const updatedProducts = [currentItem, ...relatedProducts].slice(0, 20);

      setSelectedProduct(currentItem);
      setProducts(updatedProducts);

      document.getElementById('list-wrapper')?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

      setLoading(false);
    }, 900); // loading test
  };

  const handleClearItems = async () => {
    setLoading(true);

    await setTimeout(() => {
      setProducts(initialProducts.slice(0, 20));
      setSelectedProduct(initialProducts[0]);

      setLoading(false);
    }, 900); // loading test
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MOCK_PATH);
        const jsonData = await response.json();
        const currentProducts = jsonData.data.product;

        setProducts(currentProducts.slice(0, 20));
        setInitialProducts(currentProducts);
        setSelectedProduct(currentProducts[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  return {
    loading,
    products,
    selectedProduct,
    handleSelectItem,
    handleClearItems,
  };
};

export default useProduct;

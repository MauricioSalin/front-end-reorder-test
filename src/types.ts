export interface Product {
  url: string;
  identifier: string;
  name: string;
  parent_identifier: string;
  thumbnail: string;
  status: string;
  list_price: number;
  selling_price: number;
  active: boolean;
  category: {
    name: string;
  };
  isSelected?: boolean;
  currentPrice?: number;
}

export interface Order {
  oid: number;
  order_date: string;
  address: string;
  receiver: string;
  phone: string;
  title: string;
  totalQuantity: number;
  total_money: number;
}

export interface OrderSheet {
  items: number[];
  totalQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: Delivery;
}

export interface Delivery {
  address: string;
  receiver: string;
  contact: string;
}

export interface OrderDetailItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export interface OrderDetailItem extends Order {
  detail?: OrderDetailItem[];
}

export interface Order {
  oid: number;
  order_date: string;
  address: string;
  receiver: string;
  phone: string;
  title: string;
  totalQuantity: number;
  total_money: number;
  detail?: OrderDetailItem[];
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
  book_bid: number;
  title: string;
  author: string;
  each_amount: number;
  quantity: number;
}

export interface OrderListItem extends Order {
  detail?: OrderDetailItem[];
}

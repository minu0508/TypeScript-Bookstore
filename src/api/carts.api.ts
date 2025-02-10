import { requestHandler } from './http';

interface AddCartParams {
  book_id: number;
  quantity: number;
}

export const addCart = async (params: AddCartParams) => {
  return await requestHandler<AddCartParams>('post', '/carts', params);
};

export const fetchCart = async () => {
  return await requestHandler('get', './carts');
};

export const deleteCart = async (cartId: number) => {
  return await requestHandler('delete', `/carts/${cartId}`);
};

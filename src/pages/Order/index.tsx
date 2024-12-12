import { useLocation } from 'react-router-dom';

export const Order = () => {
  const location = useLocation();
  const orderDataFromCart = location.state;

  console.log(orderDataFromCart);
  return (
    <div>
      <h1>Order</h1>
    </div>
  );
};

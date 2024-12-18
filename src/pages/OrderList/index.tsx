import { Title } from '../../components/atoms/Title';
import { OrderListTemplate } from '../../components/templates/OrderListTemplate';
import { useOrders } from '../../hooks/useOrders';

export const OrderList = () => {
  const { orders } = useOrders();

  console.log('@@@ orders: ', orders);

  return (
    <>
      <Title size="large">주문 내역</Title>
      <OrderListTemplate>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>주문일자</th>
              <th>주소</th>
              <th>수령인</th>
              <th>전화번호</th>
              <th>대표상품명</th>
              <th>수량</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
            </tr>
          </tbody>
        </table>
      </OrderListTemplate>
    </>
  );
};

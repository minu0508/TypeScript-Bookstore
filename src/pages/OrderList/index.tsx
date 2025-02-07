import { Button } from '../../components/atoms/Button';
import { Title } from '../../components/atoms/Title';
import { OrderListTemplate } from '../../components/templates/OrderListTemplate';
import { useOrders } from '../../hooks/useOrders';
import { formatDate, formatNumber } from '../../utils/format';

export const OrderList = () => {
  const { orders, selectedItemId, selectOrderItem } = useOrders();
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.oid}>
                <td>{order.oid}</td>
                <td>{formatDate(order.order_date, 'YYYY.MM.DD')}</td>
                <td>{order.address}</td>
                <td>{order.receiver}</td>
                <td>{order.phone}</td>
                <td>{order.title}</td>
                <td>{order.totalQuantity}권</td>
                <td>{formatNumber(order.total_money)}원</td>
                <td>
                  <Button size="small" scheme="normal" onClick={() => selectOrderItem(order.oid)}>
                    자세히
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </OrderListTemplate>
    </>
  );
};

import { useLocation } from 'react-router-dom';
import { Title } from '../../components/atoms/Title';
import { CartSummary } from '../../components/atoms/CartSummary';
import { Button } from '../../components/atoms/Button';
import { CartTemplate } from '../../components/templates/CartTemplate';
import { InputText } from '../../components/atoms/InputText';
import { useForm } from 'react-hook-form';
import { Delivery, OrderSheet } from '../../models/order.model';
import { FindAddressButton } from '../../components/atoms/FindAddressButton';

interface DeliveryForm extends Delivery {
  addressDetail: string;
}
export const Order = () => {
  const location = useLocation();
  const orderDataFromCart = location.state;
  const { totalQuantity = 0, totalPrice = 0, firstBookTitle = '' } = orderDataFromCart;

  console.log(totalQuantity);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DeliveryForm>();

  const handlePay = (data: DeliveryForm) => {
    console.log(data);
    const orderData: OrderSheet = {
      ...orderDataFromCart,
      delivery: {
        ...data,
        address: `${data.address} ${data.addressDetail}`,
      },
    };

    console.log('orderData: ', orderData);
  };

  return (
    <>
      <Title size="large">주문서 작성</Title>
      <CartTemplate>
        <div className="content">
          <div className="order-info">
            <Title size="medium" color="text">
              베송 정보
            </Title>
            <form className="delivery">
              <fieldset>
                <label>주소</label>
                <div className="input">
                  <InputText inputType="text" {...register('address', { required: true })} />
                </div>
                <FindAddressButton
                  onCompleted={(address) => {
                    setValue('address', address);
                  }}
                />
              </fieldset>
              {errors.address && <p className="error-text">주소를 입력해주세요.</p>}

              <fieldset>
                <label>상세 주소</label>
                <div className="input">
                  <InputText inputType="text" {...register('addressDetail', { required: true })} />
                </div>
              </fieldset>
              {errors.addressDetail && <p className="error-text">상세 주소를 입력해주세요.</p>}

              <fieldset>
                <label>수령인</label>
                <div className="input">
                  <InputText inputType="text" {...register('receiver', { required: true })} />
                </div>
              </fieldset>
              {errors.receiver && <p className="error-text">수령인을 입력해주세요.</p>}

              <fieldset>
                <label>전화번호</label>
                <div className="input">
                  <InputText inputType="text" {...register('contact', { required: true })} />
                </div>
              </fieldset>
              {errors.contact && <p className="error-text">전화번호를 입력해주세요.</p>}
            </form>
          </div>
          <div className="order-info">
            <Title size="medium" color="text">
              주문 상품
            </Title>
            <strong>
              {firstBookTitle} 등 총 {totalQuantity} 권
            </strong>
          </div>
        </div>
        <div className="summary">
          <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
          <Button size="large" scheme="primary" onClick={handleSubmit(handlePay)}>
            결제하기
          </Button>
        </div>
      </CartTemplate>
    </>
  );
};

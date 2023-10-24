import {
  CheckoutContainer,
  DeliveryAddress,
  OrderInformation,
  PaymentConfirmation,
  PaymentMethod,
  SelectedItems,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <PaymentConfirmation>
        <h1>Complete seu pedido</h1>
        <DeliveryAddress></DeliveryAddress>
        <PaymentMethod></PaymentMethod>
      </PaymentConfirmation>
      <SelectedItems>
        <h1>Cafés selecionados</h1>
        <OrderInformation></OrderInformation>
      </SelectedItems>
    </CheckoutContainer>
  )
}

import {
  ConfirmationContainer,
  ConfirmationMessageAbout,
  ConfirmationMessageTitle,
  TitleAbout,
} from './styles'
import Illustration from '../../assets/Illustration.png'

export function PaymentConfirmation() {
  return (
    <ConfirmationContainer>
      <ConfirmationMessageTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </ConfirmationMessageTitle>
      <ConfirmationMessageAbout>
        <TitleAbout></TitleAbout>
      </ConfirmationMessageAbout>
      <img src={Illustration} alt="" />
    </ConfirmationContainer>
  )
}

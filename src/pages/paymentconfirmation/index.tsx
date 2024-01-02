import {
  ConfirmationContainer,
  ConfirmationMessageAbout,
  ConfirmationMessageTitle,
  InfoTitle,
  TitleAbout,
} from './styles'
import Illustration from '../../assets/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function PaymentConfirmation() {
  return (
    <ConfirmationContainer>
      <ConfirmationMessageTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <ConfirmationMessageAbout>
          <TitleAbout iconProps="purple200">
            <MapPin size={32} weight="fill" />
            <InfoTitle>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br />
              Farrapos - Porto Alegre, RS
            </InfoTitle>
          </TitleAbout>
          <TitleAbout iconProps="yellow200">
            <Timer size={32} weight="fill" />
            <InfoTitle>
              Previsão de entrega <br />
              <strong> 20 min - 30 min</strong>
            </InfoTitle>
          </TitleAbout>
          <TitleAbout iconProps="yellow300">
            <CurrencyDollar size={32} weight="fill" />
            <InfoTitle>
              Pagamento na entrega <br /> <strong> Cartão de Crédito</strong>
            </InfoTitle>
          </TitleAbout>
        </ConfirmationMessageAbout>
      </ConfirmationMessageTitle>

      <img src={Illustration} alt="" />
    </ConfirmationContainer>
  )
}

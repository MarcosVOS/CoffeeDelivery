import {
  ButtonConfirmation,
  CheckoutContainer,
  DeliveryAddress,
  DeliveryAddressContainer,
  DeliveryAddressLabel,
  DeliveryAddressLabelInput,
  DeliveryAddressLabelInputContainer,
  OrderInformation,
  PaymentConfirmation,
  PaymentMethod,
  PaymentMethodLabel,
  PaymentOption,
  PaymentmMethodButtons,
  ProductsButton,
  ProductsButtonContainer,
  SelectedCoffee,
  SelectedItems,
  TotalOrder,
} from './styles'

import coffeImage from '../../assets/expresso.png'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <PaymentConfirmation>
        <h1>Complete seu pedido</h1>

        <DeliveryAddress>
          <DeliveryAddressContainer>
            <DeliveryAddressLabel>
              <MapPin />
              <p>
                Endereço de Entrega
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </p>
            </DeliveryAddressLabel>
            <DeliveryAddressLabelInputContainer>
              <DeliveryAddressLabelInput placeholder="CEP" />
              <DeliveryAddressLabelInput placeholder="Rua" />
              <DeliveryAddressLabelInput placeholder="Número" />
              <DeliveryAddressLabelInput placeholder="Complemento Opcional" />
              <DeliveryAddressLabelInput placeholder="Bairro" />
              <DeliveryAddressLabelInput placeholder="Cidade" />
              <DeliveryAddressLabelInput placeholder="UF" />
            </DeliveryAddressLabelInputContainer>
          </DeliveryAddressContainer>
        </DeliveryAddress>

        <PaymentMethod>
          <PaymentMethodLabel>
            <CurrencyDollar size={22} />
            <p>
              Pagamento
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </p>
          </PaymentMethodLabel>
          <PaymentmMethodButtons>
            <PaymentOption>
              <CreditCard /> Cartão de crédito
            </PaymentOption>
            <PaymentOption>
              <Bank /> cartão de débito
            </PaymentOption>
            <PaymentOption>
              <Money /> dinheiro
            </PaymentOption>
          </PaymentmMethodButtons>
        </PaymentMethod>
      </PaymentConfirmation>

      <SelectedItems>
        <h1>Cafés selecionados</h1>
        <OrderInformation>
          <SelectedCoffee>
            <img src={coffeImage} alt="" />
            <div>
              <p>Expresso Tradicional</p>

              <ProductsButtonContainer>
                <ProductsButton>
                  <button>
                    <Minus />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus />
                  </button>
                </ProductsButton>

                <ProductsButton>
                  <Trash size={16} />
                  Remover
                </ProductsButton>
              </ProductsButtonContainer>
            </div>
            <h2>R$ 9,90</h2>
          </SelectedCoffee>
          {/* Itens */}
          <SelectedCoffee>
            <img src={coffeImage} alt="" />
            <div>
              <p>Expresso Tradicional</p>

              <ProductsButtonContainer>
                <ProductsButton>
                  <button>
                    <Minus />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus />
                  </button>
                </ProductsButton>

                <ProductsButton>
                  <Trash size={16} />
                  Remover
                </ProductsButton>
              </ProductsButtonContainer>
            </div>
            <h2>R$ 9,90</h2>
          </SelectedCoffee>
          {/*  */}
          <TotalOrder>
            <h5>
              Total de itens <span>R$ 29,70</span>
            </h5>
            <h5>
              Entrega <span>R$ 3,50</span>
            </h5>
            <h5>
              Total <span>R$ 33,20</span>
            </h5>
          </TotalOrder>
          <ButtonConfirmation>confirmar pedido</ButtonConfirmation>
        </OrderInformation>
      </SelectedItems>
    </CheckoutContainer>
  )
}

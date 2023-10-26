import {
  ButtonConfirmation,
  CheckoutContainer,
  DeliveryAddress,
  OrderInformation,
  PaymentConfirmation,
  PaymentMethod,
  ProductsButton,
  ProductsButtonContainer,
  SelectedCoffee,
  SelectedItems,
  TotalOrder,
} from './styles'

import coffeImage from '../../assets/expresso.png'
import { Minus, Plus, Trash } from 'phosphor-react'

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

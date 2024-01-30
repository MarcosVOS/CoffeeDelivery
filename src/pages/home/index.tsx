import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import {
  Catalog,
  ContainerIntroduction,
  ContainerIntroductionText,
  Highlights,
  ItemHighlights,
  PriceContainer,
  QuantityOfItems,
  TypesOfCoffeeAvailable,
  TypesOfCoffeeAvailableList,
} from './styles'
import cooffeDelivery from '../../assets/cooffeDelivery.png'

import coffeTypeExpresso from '../../assets/coffeetypes/Type=Expresso.png'
import coffeTypeAmericano from '../../assets/coffeetypes/Type=Americano.png'
import coffeTypeCremoso from '../../assets/coffeetypes/Type=Expresso Cremoso.png'
import coffeTypeGelado from '../../assets/coffeetypes/Type=Café Gelado.png'
import coffeTypeWithMilk from '../../assets/coffeetypes/Type=Café com Leite.png'
import coffeTypeLatte from '../../assets/coffeetypes/Type=Latte.png'
import coffeTypeCapuccino from '../../assets/coffeetypes/Type=Capuccino.png'
import coffeTypeMacchiato from '../../assets/coffeetypes/Type=Macchiato.png'
import coffeTypeMocaccino from '../../assets/coffeetypes/Type=Mochaccino.png'
import coffeTypeChocolateQuente from '../../assets/coffeetypes/Type=Chocolate Quente.png'
import coffeTypeCubano from '../../assets/coffeetypes/Type=Cubano.png'
import coffeTypeHavaiano from '../../assets/coffeetypes/Type=Havaiano.png'
import coffeTypeArabe from '../../assets/coffeetypes/Type=Árabe.png'
import coffeTypeIrlandês from '../../assets/coffeetypes/Type=Irlandês.png'

export function Home() {
  return (
    <>
      <ContainerIntroduction>
        <ContainerIntroductionText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h6>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h6>
          <Highlights>
            <ItemHighlights iconProps="yellow300">
              <ShoppingCart weight="fill" />
              Compra simples e segura
            </ItemHighlights>
            <ItemHighlights iconProps="brown300">
              <Package weight="fill" /> Embalagem mantém o café intacto
            </ItemHighlights>
            <ItemHighlights iconProps="yellow200">
              <Timer weight="fill" />
              Entrega rápida e rastreada
            </ItemHighlights>
            <ItemHighlights iconProps="purple200">
              <Coffee weight="fill" />O café chega fresquinho até você
            </ItemHighlights>
          </Highlights>
        </ContainerIntroductionText>
        <img src={cooffeDelivery} alt="" width={'476px'} height={'360px'} />
      </ContainerIntroduction>

      <Catalog>
        <h1>Nossos cafés</h1>
        <TypesOfCoffeeAvailableList>
          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          <TypesOfCoffeeAvailable>
            <img src={coffeTypeExpresso} alt="Expresso" />
            <p>Tradicional</p>
            <h2>Expresso Tradicional</h2>
            <h3>O tradicional café feito com água quente e grãos moídos</h3>
            <PriceContainer>
              <span>
                R$<strong> 9,90</strong>
              </span>
              <QuantityOfItems>
                <button>
                  <Minus size={14} />
                </button>

                <span>1</span>
                <button>
                  <Plus size={14} />
                </button>
              </QuantityOfItems>
              <ShoppingCart size={22} weight="fill" />
            </PriceContainer>
          </TypesOfCoffeeAvailable>

          {/* itens */}
        </TypesOfCoffeeAvailableList>
      </Catalog>
    </>
  )
}

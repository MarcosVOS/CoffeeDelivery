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
import coffeImage from '../../assets/expresso.png'

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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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
            <img src={coffeImage} alt="Expresso" />
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

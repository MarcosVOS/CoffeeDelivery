import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  ContainerIntroduction,
  ContainerIntroductionText,
  Highlights,
  ItemHighlights,
} from './styles'
import cooffeDelivery from '../../assets/cooffeDelivery.png'

export function Home() {
  return (
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
  )
}

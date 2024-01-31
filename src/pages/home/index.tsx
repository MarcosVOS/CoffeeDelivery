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

import { useState } from 'react'

interface coffeeTypes {
  Id: string
  Name: string
  ImageSource: string
  Description: string
  Price: string
  Label: string[]
}

export function Home() {
  const [typesOfCoffee, setTypesOfCoffee] = useState<coffeeTypes[]>([
    {
      Id: '1',
      Name: 'Expresso Tradicional',
      ImageSource: coffeTypeExpresso,
      Description: 'O tradicional café feito com água quente e grãos moídos',
      Price: '9,90',
      Label: ['Tradicional'],
    },
    {
      Id: '2',
      Name: 'Expresso Americano',
      ImageSource: coffeTypeAmericano,
      Description: 'Expresso diluído, menos intenso que o tradicional',
      Price: '9,90',
      Label: ['Tradicional'],
    },
    {
      Id: '3',
      Name: 'Expresso Cremoso',
      ImageSource: coffeTypeCremoso,
      Description: 'Café expresso tradicional com espuma cremosa',
      Price: '9,90',
      Label: ['Tradicional'],
    },
    {
      Id: '4',
      Name: 'Expresso Gelado',
      ImageSource: coffeTypeGelado,
      Description: 'Bebida preparada com café expresso e cubos de gelo',
      Price: '9,90',
      Label: ['Tradicional', 'Gelado'],
    },
    {
      Id: '5',
      Name: 'Café com Leite',
      ImageSource: coffeTypeWithMilk,
      Description: 'Meio a meio de expresso tradicional com leite vaporizado',
      Price: '9,90',
      Label: ['Tradicional', 'Com leite'],
    },
    {
      Id: '6',
      Name: 'Latte',
      ImageSource: coffeTypeLatte,
      Description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      Price: '9,90',
      Label: ['Tradicional', 'Com leite'],
    },
    {
      Id: '7',
      Name: 'Capuccino',
      ImageSource: coffeTypeCapuccino,
      Description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      Price: '9,90',
      Label: ['Tradicional', 'Com leite'],
    },
    {
      Id: '8',
      Name: 'Macchiato',
      ImageSource: coffeTypeMacchiato,
      Description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      Price: '9,90',
      Label: ['Tradicional', 'Com leite'],
    },
    {
      Id: '9',
      Name: 'Mocaccino',
      ImageSource: coffeTypeMocaccino,
      Description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      Price: '9,90',
      Label: ['Tradicional', 'Com leite'],
    },
    {
      Id: '10',
      Name: 'Chocolate Quente',
      ImageSource: coffeTypeChocolateQuente,
      Description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      Price: '9,90',
      Label: ['Especial', 'Com leite'],
    },
    {
      Id: '11',
      Name: 'Cubano',
      ImageSource: coffeTypeCubano,
      Description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      Price: '9,90',
      Label: ['Especial', 'Alcólico', 'Gelado'],
    },
    {
      Id: '12',
      Name: 'Havaiano',
      ImageSource: coffeTypeHavaiano,
      Description: 'Bebida adocicada preparada com café e leite de coco',
      Price: '9,90',
      Label: ['Especial'],
    },
    {
      Id: '13',
      Name: 'Árabe',
      ImageSource: coffeTypeArabe,
      Description: 'Bebida preparada com grãos de café árabe e especiarias',
      Price: '9,90',
      Label: ['Tradicional', 'Com leite'],
    },
    {
      Id: '14',
      Name: 'Irlandês',
      ImageSource: coffeTypeIrlandês,
      Description: 'Bebida a base de café, uisque irlandês, açúcar e chantily',
      Price: '9,90',
      Label: ['Tradicional', 'Alcoólico'],
    },
  ])

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
          {typesOfCoffee.map((coffee) => {
            return (
              <TypesOfCoffeeAvailable key={coffee.Id}>
                <img src={coffee.ImageSource} alt="Expresso" />
                <div>
                  {coffee.Label.map((label) => {
                    return <p key={label + coffee.Id}>{label}</p>
                  })}
                </div>

                <h2>{coffee.Name}</h2>
                <h3>{coffee.Description}</h3>
                <PriceContainer>
                  <span>
                    R$<strong> {coffee.Price}</strong>
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
            )
          })}
        </TypesOfCoffeeAvailableList>
      </Catalog>
    </>
  )
}

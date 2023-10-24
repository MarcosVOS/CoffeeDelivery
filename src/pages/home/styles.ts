import styled from 'styled-components'
import backgroundImage from '../../assets/background.svg'

export const ContainerIntroduction = styled.div`
  display: flex;
  flex-direction: row;
  height: 34rem;
  background-image: url(${backgroundImage});
  background-size: cover;
  justify-content: center;
  gap: 6rem;
  padding-top: 5.875rem;
  padding-left: 10rem;
  padding-right: 10rem;
`

export const ContainerIntroductionText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  h6 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['brown-400']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 4.125rem;
  }
`

export const Highlights = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

const ICON_COLORS = {
  yellow300: 'yellow-300',
  yellow200: 'yellow-200',
  brown300: 'brown-300',
  purple200: 'purple-200',
}
interface IconProps {
  iconProps: keyof typeof ICON_COLORS
}

export const ItemHighlights = styled.div<IconProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  :first-child {
    padding: 8px;
    color: white;
    background-color: ${(props) => props.theme[ICON_COLORS[props.iconProps]]};
    border-radius: 100%;

    display: flex;
    flex-direction: row;
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const Catalog = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 9.813rem;

  h1 {
    margin-bottom: 3.375rem;
  }
`

export const TypesOfCoffeeAvailable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme['white-300']};

  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
    margin-bottom: 10px;
  }

  p {
    color: ${(props) => props.theme['yellow-300']};
    background-color: ${(props) => props.theme['yellow-100']};
    padding: 4px 8px;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: ${(props) => props.theme['brown-200']};
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    line-height: 130%;
    margin-right: 1.25rem;
    margin-left: 1.25rem;
    margin-bottom: 2.063rem;
  }
`
export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }

  span > strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['brown-300']};
  }

  svg:nth-child(3) {
    background-color: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['white-300']};
    padding: 8px;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 6px;
    margin-left: 0.5rem;
  }
`
export const QuantityOfItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 4.5rem;
  background-color: ${(props) => props.theme['white-500']};
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 8px;
  margin-left: 1.438rem;

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme['purple-200']};
  }
`

export const TypesOfCoffeeAvailableItem = styled.div`
  margin: 2rem 0; /* Espaçamento entre os itens abaixo e acima */
`

export const TypesOfCoffeeAvailableList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 60px;
  grid-row-gap: 40px;
`

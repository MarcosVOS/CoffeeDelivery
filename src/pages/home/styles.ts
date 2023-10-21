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

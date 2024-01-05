import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  gap: 6.375rem;

  img {
    margin-top: 8.25rem;

    width: 492px;
    height: 293px;
  }
`

export const ConfirmationMessageTitle = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-300']};
    font-family: 'Baloo 2';
    font-size: 2rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
  }
`

export const ImageContainer = styled.div``

export const ConfirmationMessageAbout = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  width: 32.875rem;
  padding: 2.5rem;
  gap: 2rem;

  border: 1px solid;
  border-radius: 15px 50px;
  border-image: linear-gradient(
      45deg,
      ${(props) => props.theme['yellow-200']},
      ${(props) => props.theme['purple-200']}
    )
    1;
`

const ICON_COLORS = {
  yellow300: 'yellow-300',
  yellow200: 'yellow-200',
  purple200: 'purple-200',
}
interface IconProps {
  iconProps: keyof typeof ICON_COLORS
}

export const TitleAbout = styled.div<IconProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 8px;
    color: white;
    background-color: ${(props) => props.theme[ICON_COLORS[props.iconProps]]};
    border-radius: 100%;

    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const InfoTitle = styled.span`
  flex-direction: column;
`

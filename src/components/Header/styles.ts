import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem 2rem 10rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  background-color: ${(props) => props.theme['purple-100']};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px;

  color: ${(props) => props.theme['purple-300']};
  border-radius: 6px;

  :first-child {
    color: ${(props) => props.theme['purple-200']};
  }
`
export const ShoppingCartContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-100']};

  color: ${(props) => props.theme['yellow-300']};
  border: none;
  padding: 8px;
  cursor: pointer;
  position: relative;
`

export const ItemCounterInCart = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-300']};
  font-size: 14px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`

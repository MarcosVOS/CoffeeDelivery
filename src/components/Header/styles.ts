import { styled } from 'styled-components'
import { MapPin, ShoppingCart } from 'phosphor-react'

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

  color: ${(props) => props.theme['yellow-300']};
  border: none;
  padding: 8px;
  cursor: pointer;
`

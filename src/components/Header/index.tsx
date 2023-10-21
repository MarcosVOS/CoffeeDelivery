import { HeaderContainer, Location, ShoppingCartContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

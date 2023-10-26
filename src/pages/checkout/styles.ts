import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-top: 2.5rem;
  gap: 2rem;
`

export const PaymentConfirmation = styled.div`
  width: 40rem;

  h1 {
    color: ${(props) => props.theme['brown-400']};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const DeliveryAddress = styled.div`
  height: 23.25rem;
  background-color: ${(props) => props.theme['white-300']};
  margin-top: 0.938rem;
  margin-bottom: 0.75rem;
`

export const PaymentMethod = styled.div`
  height: 12.938rem;
  background-color: ${(props) => props.theme['white-300']};
`

export const SelectedItems = styled.div`
  h1 {
    color: ${(props) => props.theme['brown-400']};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.75rem;
  }
`

export const OrderInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  height: 31.125rem;
  width: 28rem;
  padding: 2.5rem;
  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['white-300']};
`

export const SelectedCoffee = styled.div`
  display: flex;
  padding: 0.25rem;

  padding-bottom: 1.5rem;
  border-bottom: solid 1px ${(props) => props.theme['white-500']};

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  div > p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1rem;
    color: ${(props) => props.theme['brown-300']};
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    margin-left: auto;
  }
`

export const ProductsButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ProductsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.688rem;
  height: 2rem;
  padding: 0rem 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;

  font-size: 0.75rem;
  color: ${(props) => props.theme['brown-300']};

  background-color: ${(props) => props.theme['white-500']};

  svg {
    color: ${(props) => props.theme['purple-200']};
  }
`

export const TotalOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h5 {
    display: flex;
    justify-content: space-between;

    font-size: 0.875rem;
    color: ${(props) => props.theme['brown-300']};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  h5:last-child {
    color: ${(props) => props.theme['brown-400']};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const ButtonConfirmation = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 6px;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  padding: 0.75rem 0.5rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-200']};
`

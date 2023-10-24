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
  height: 31.125rem;
  width: 28rem;
  background-color: ${(props) => props.theme['white-300']};
`

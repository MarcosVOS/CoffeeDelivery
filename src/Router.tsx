import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Checkout } from './pages/checkout'
import { PaymentConfirmation } from './pages/paymentconfirmation'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route
        path="/paymentconfirmation"
        element={<PaymentConfirmation />}
      ></Route>
    </Routes>
  )
}

// vendors
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// types
import type { Product } from '@/typings/product'
import type { ReactNode } from 'react'

// pages
import Home from '@/pages/index'

// stores
import { persistor, store } from '@/store'

const products = [
  {
    'id': 8,
    'name': 'Headset Cloud Stinger',
    'brand': 'HyperX',
    'description':
      'O HyperX Cloud Stinger™ é o headset ideal para jogadores que procuram leveza e conforto, qualidade de som superior e maior praticidade.',
    'photo': 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
    'price': '600.00',
    'createdAt': '2023-01-23T18:17:04.771Z',
    'updatedAt': '2023-01-23T18:17:04.771Z',
  },
  {
    'id': 7,
    'name': 'Headset Cloud Revolver',
    'brand': 'HyperX',
    'description':
      'A linha HyperX Cloud Revolver foi projetada para atender as exigências dos gamers de PC ou de console.',
    'photo': 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp',
    'price': '1000.00',
    'createdAt': '2023-01-23T18:17:04.771Z',
    'updatedAt': '2023-01-23T18:17:04.771Z',
  },
] as Product[]

function withStoreProvider(component: ReactNode) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{component}</PersistGate>
    </Provider>
  )
}

describe('Home', () => {
  it('should render products', () => {
    render(withStoreProvider(<Home products={products} />))

    expect(screen.getByText('Headset Cloud Stinger')).toBeInTheDocument()
    expect(screen.getByText('Headset Cloud Revolver')).toBeInTheDocument()
  })

  it('should open and close cart drawer', () => {
    render(withStoreProvider(<Home products={products} />))

    const cartBag = screen.getByTestId('cart-bag')

    expect(screen.queryByTestId('cart-drawer')).not.toBeInTheDocument()
    fireEvent.click(cartBag)
    expect(screen.queryByTestId('cart-drawer')).toBeInTheDocument()
    fireEvent.click(cartBag)
    expect(screen.queryByTestId('cart-drawer')).not.toBeInTheDocument()
  })

  it('should add product to cart', () => {
    render(withStoreProvider(<Home products={products} />))

    const buyButtons = screen.getAllByText('COMPRAR')
    const cartItems = screen.getByRole('CartCount')

    expect(cartItems).toHaveTextContent('0')
    fireEvent.click(buyButtons[0])
    expect(cartItems).toHaveTextContent('1')
    fireEvent.click(buyButtons[1])
    expect(cartItems).toHaveTextContent('2')
    fireEvent.click(buyButtons[1])
    fireEvent.click(buyButtons[1])
    expect(cartItems).toHaveTextContent('4')
  })
})

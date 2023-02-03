// vendors
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

// components
import CartCard from '@/components/CartCard/CartCard'

// stores
import type { RootState } from '@/store'

// styles
import * as S from './styles'

interface Props {
  toggleDrawer: () => void
  open: boolean | null
}

export default function Drawer({ open, toggleDrawer }: Props) {
  const items = useSelector((state: RootState) => state.cart.items)
  const [isDrawerOpen, setIsDrawerOpen] = useState(open)

  const totalPrice = useMemo(() => {
    return Object.values(items).reduce((acc, item) => acc + +item.price * item.amount, 0)
  }, [items])

  function handleToggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen)

    if (isDrawerOpen) {
      setTimeout(() => toggleDrawer(), 500)
    }
  }

  return (
    <S.Container open={isDrawerOpen} data-testid="cart-drawer">
      <S.TitleContainer>
        <S.Title>
          Carrinho
          <br /> de compras
        </S.Title>

        <S.Button onClick={handleToggleDrawer}>X</S.Button>
      </S.TitleContainer>

      <S.ProductContainer>
        {items.map((item) => (
          <CartCard key={item.id} item={item} />
        ))}
      </S.ProductContainer>

      <S.Total>
        <div>Total:</div>
        <div>R${totalPrice}</div>
      </S.Total>

      <S.FinishButton>Finalizar Compra</S.FinishButton>
    </S.Container>
  )
}

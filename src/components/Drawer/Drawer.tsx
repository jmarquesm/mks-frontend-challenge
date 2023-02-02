// vendors
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

// components
import CartCard from '@/components/CartCard/CartCard'

// stores
import type { RootState } from '@/store'

// styles
import * as S from './styles'

interface Props {
  handleDrawer: () => void
  open: boolean | null
}

export default function Drawer({ open, handleDrawer }: Props) {
  const items = useSelector((state: RootState) => state.cart.items)

  const totalPrice = useMemo(() => {
    return Object.values(items).reduce((acc, item) => acc + +item.price * item.amount, 0)
  }, [items])

  return (
    <S.Container open={open}>
      <S.TitleContainer>
        <S.Title>
          Carrinho
          <br /> de compras
        </S.Title>

        <S.Button onClick={handleDrawer}>X</S.Button>
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

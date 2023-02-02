// vendors
import { useDispatch } from 'react-redux'
import Balancer from 'react-wrap-balancer'

// types
import type { CartItem } from '@/typings/product'

// stores
import { decrement, increment, removeFromCart } from '@/store/cartSlice'

// styles
import * as S from './styles'

interface Props {
  item: CartItem
}

export default function CartCard({ item }: Props) {
  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.Button onClick={() => dispatch(removeFromCart(item))}>X</S.Button>
      <S.ImageContainer>
        <S.Image src={item.photo} alt={item.name}></S.Image>
      </S.ImageContainer>

      <S.InfoContainer>
        <S.Title>
          <Balancer>{item.name}</Balancer>
        </S.Title>

        <S.AmountPriceContainer>
          <div>
            <S.AmountTitle>Qtd:</S.AmountTitle>
            <S.AmountContainer>
              <div onClick={() => dispatch(decrement(item))}>-</div>
              <div>{item.amount}</div>
              <div onClick={() => dispatch(increment(item))}>+</div>
            </S.AmountContainer>
          </div>

          <S.PriceContainer>
            <S.Price>R${item.price}</S.Price>
          </S.PriceContainer>
        </S.AmountPriceContainer>
      </S.InfoContainer>
    </S.Card>
  )
}

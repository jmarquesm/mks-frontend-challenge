// vendors
import { useDispatch } from 'react-redux'

// componentes
import { ShoppingBag } from '@/components/icons/ShoppingBag/ShoppingBag'

// stores
import { addToCart } from '@/store/cartSlice'

// types
import type { Product } from '@/typings/product'

// styles
import * as S from './styles'

interface Props {
  product: Product
}

export function Card({ product }: Props) {
  const dispatch = useDispatch()

  return (
    <S.Card key={product.name}>
      <S.ImageContainer>
        <S.Image src={product.photo} alt={product.name} />
      </S.ImageContainer>

      <S.Info>
        <S.TitlePriceWrapper>
          <S.Title>
            <h2>{product.name}</h2>
          </S.Title>

          <S.PriceContainer>
            <S.Price>R${+product.price}</S.Price>
          </S.PriceContainer>
        </S.TitlePriceWrapper>

        <S.Description>{product.description}</S.Description>
      </S.Info>

      <S.Button onClick={() => dispatch(addToCart(product))}>
        <ShoppingBag /> COMPRAR
      </S.Button>
    </S.Card>
  )
}

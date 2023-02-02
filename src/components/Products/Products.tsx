// components
import { Card } from './Card/Card'

// types
import type { Product } from '@/typings/product'

// styles
import * as S from './styles'

interface Props {
  products: Product[]
}

export function Products({ products }: Props) {
  return (
    <S.Container>
      {products.map((product) => (
        <Card key={product.name} product={product} />
      ))}
    </S.Container>
  )
}

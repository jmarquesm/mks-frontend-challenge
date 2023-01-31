// types
import type { Product } from '@/typings/product'

// components
import { Products } from '@/components/Products/Products'

// styles
import * as S from '../styles/home-page'

interface Props {
  products: Product[]
}

export default function Home({ products }: Props) {
  return (
    <S.Container>
      <Products products={products} />
    </S.Container>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`
  )
  const data = await response.json()

  return {
    props: {
      products: data.products,
    },
  }
}

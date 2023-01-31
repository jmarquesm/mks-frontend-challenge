// components
import { CartIcon } from '@/components/icons/CartIcon/CartIcon'

// styles
import * as S from './styles'

export default function Header() {
  return (
    <S.Container>
      <S.Nav>
        <S.Logo>
          <S.MksLogo>MKS</S.MksLogo>
          <S.SistemasLogo>Sistemas</S.SistemasLogo>
        </S.Logo>

        <S.Cart>
          <S.Icon>
            <CartIcon />
          </S.Icon>

          <S.CartCount>0</S.CartCount>
        </S.Cart>
      </S.Nav>
    </S.Container>
  )
}

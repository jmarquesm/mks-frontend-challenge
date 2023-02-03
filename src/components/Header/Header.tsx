// vendors
import { useState } from 'react'
import { useSelector } from 'react-redux'

// components
import Drawer from '@/components/Drawer/Drawer'
import { CartIcon } from '@/components/icons/CartIcon/CartIcon'

// stores
import type { RootState } from '@/store'

// styles
import * as S from './styles'

export default function Header() {
  const items = useSelector((state: RootState) => state.cart.items)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const totalItems = items.reduce((acc, item) => acc + item.amount, 0)

  function toggleDrawer() {
    if (!isOpen) {
      setIsOpen(true)
      document.body.classList.add('disable-scroll')
    } else {
      setIsOpen(false)
      document.body.classList.remove('disable-scroll')
    }
  }

  return (
    <>
      <S.Container>
        <S.Nav>
          <S.Logo>
            <S.MksLogo>MKS</S.MksLogo>
            <S.SistemasLogo>Sistemas</S.SistemasLogo>
          </S.Logo>

          <S.Cart onClick={toggleDrawer} data-testid="cart-bag">
            <S.Icon>
              <CartIcon />
            </S.Icon>

            <S.CartCount role="CartCount">{totalItems}</S.CartCount>
          </S.Cart>
        </S.Nav>
      </S.Container>

      {isOpen && <Drawer handleDrawer={toggleDrawer} open={isOpen} />}
    </>
  )
}

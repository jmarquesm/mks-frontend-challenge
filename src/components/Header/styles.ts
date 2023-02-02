// vendors
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0f52ba;
  display: flex;
  justify-content: center;
`

export const Nav = styled.nav`
  width: 1440px;
  max-height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.375rem;

  @media (min-width: 768px) {
    padding: 1.75rem;
    max-height: none;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: baseline;
`

export const MksLogo = styled.div`
  color: white;
  font-weight: 600;
  font-size: 32px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export const SistemasLogo = styled.div`
  color: white;
  font-weight: 300;
  font-size: 1rem;
  margin-left: 0.5rem;
  align-self: center;
  padding-top: 0.25rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

export const Cart = styled.button`
  display: flex;
  background: white;
  border-radius: 0.5rem;
  height: 1.625rem;
  width: 3.25rem;
  align-items: center;
  padding: 0;

  @media (min-width: 768px) {
    height: 2.75rem;
    width: 5.625rem;
    cursor: pointer;
  }
`

export const Icon = styled.div`
  display: flex;
  margin: 0.5rem 0 0.5rem 0.5rem;

  svg {
    height: 11px;
  }

  @media (min-width: 768px) {
    margin: 1rem 0.25rem 1rem 1rem;
    svg {
      height: 18px;
    }
  }
`

export const CartCount = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  margin: 0.5rem 0.875rem 0.5rem 0.25rem;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;
    margin: 0.75rem 1.75rem 0.75rem 0.75rem;
  }
`

// vendors
import styled, { keyframes } from 'styled-components'

type DivProps = {
  open: boolean | null
}

export const Container = styled.div<DivProps>`
  background: #0f52ba;
  z-index: 2;
  height: 100vh;
  width: 340px;
  position: absolute;
  right: 0;
  top: 0;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: fixed;

  @media (min-width: 768px) {
    width: 486px;

    transform: translateX(-100%);
    transform: ${({ open }) => open && 'translateX(0%)'};
    animation: ${({ open }) => (open === true ? openMobile : open === false ? closeMobile : null)} 300ms
      normal forwards ease-in-out;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem 2.25rem 2rem;

  @media (min-width: 768px) {
    padding: 2.25rem 1.375rem 4.375rem 4.375rem;
  }
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: white;
  padding-right: 3.5rem;
`

export const Button = styled.div`
  font-weight: 400;
  font-size: 34px;
  line-height: 15px;
  text-overflow: ellipsis;
  background-color: black;
  color: #0f52ba;
  border-radius: 100%;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    cursor: pointer;
    font-size: 28px;
    color: white;
  }
`

export const ProductContainer = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 126px - 98px - 65px);

  @media (min-width: 768px) {
    height: calc(100vh - 172px - 98px - 97px);
    padding-top: 0.5rem;

    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 98px;
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
`

export const FinishButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  background-color: black;
  color: white;
  font-weight: 700;
  font-size: 20px;
  line-height: 15px;

  @media (min-width: 768px) {
    cursor: pointer;
    height: 97px;
    font-size: 28px;
    line-height: 15px;
  }
`

const openMobile = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
`

const closeMobile = keyframes`
  0% {
    display: flex;
    transform: translateX(0%);
  }

  99% {
    display: flex;
  }

  100% {
    display: none;
    transform: translateX(100%)
  }
`

// vendors
import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0px 2px 8px rgb(0 0 0 / 14%);
  border-radius: 8px;
  margin: 0 2.87rem 0.875rem 2.12rem;
  height: 220px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin: 0 3.75rem 1.75rem 3rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 95px;
    width: 379px;
    justify-content: unset;
    padding: 1.25rem;
  }
`

export const ButtonContainer = styled.div``

export const Button = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 17px;
  display: flex;
  position: absolute;
  z-index: 2;
  max-height: 41px;
  padding: 0.625rem 0.875rem 0 0;
  top: 5px;
  right: 5px;

  @media (min-width: 768px) {
    padding: 0;
    cursor: pointer;
    top: -5px;
    right: -5px;
    font-size: 14px;
    line-height: 17px;
    color: white;
    background: black;
    border-radius: 100%;
    height: 18px;
    width: 18px;

    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  padding: 1.375rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`

export const Image = styled.img`
  width: 80px;

  @media (min-width: 768px) {
    width: 50px;
  }
`

export const InfoContainer = styled.div`
  padding: 0rem 1.5rem 1.75rem 1rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0;
    width: 100%;
  }
`

export const Title = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  @media (min-width: 768px) {
    font-size: 13px;
    line-height: 17px;
    width: 112px;
    margin: 0 0.5rem 0 1.25rem;
  }
`

export const AmountPriceContainer = styled.div`
  padding-top: 0.75rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-top: 0;
    align-items: center;
    flex: 1;
  }
`

export const AmountTitle = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-weight: 400;
    font-size: 5px;
    line-height: 6px;
    padding-bottom: 0.25rem;
    top: 30px;
    position: absolute;
  }
`

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 97px;
  height: 34px;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  padding: 0 3%;

  @media (min-width: 768px) {
    width: 50px;
    height: 19px;

    div {
      cursor: pointer;

      :nth-child(2) {
        cursor: unset;
      }
    }
  }

  div {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    @media (min-width: 768px) {
      font-size: 8px;
      line-height: 10px;
    }
  }

  div:nth-of-type(2n) {
    border-right: 0.2px solid #bfbfbf;
    border-left: 0.2px solid #bfbfbf;
    height: 80%;
    display: flex;
    align-items: center;
    padding: 10%;
  }
`

export const Amount = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`

export const PriceContainer = styled.div`
  background: #373737;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0.375rem 0.5rem;

  @media (min-width: 768px) {
    background: none;
    padding: 0;
  }
`

export const Price = styled.div`
  color: white;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;

  @media (min-width: 768px) {
    color: black;
    font-size: 14px;
    line-height: 17px;
    min-width: 62px;
  }
`

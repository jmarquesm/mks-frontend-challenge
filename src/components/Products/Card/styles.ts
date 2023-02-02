// vendors
import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  max-height: 328px;
  overflow: hidden;
  background: white;

  @media (min-width: 768px) {
    max-height: 285px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: inline-block;
  max-height: 192px;

  @media (min-width: 768px) {
    max-height: 170px;
  }

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    padding-bottom: 150%;
  }
`
export const Image = styled.img`
  position: absolute;
  object-fit: contain;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
  }
`

export const Info = styled.div`
  margin: 0 0.875rem;
`

export const TitlePriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  height: 38px;
  max-width: 7.75rem;
  display: flex;
  align-items: center;
  margin-right: 0.25rem;

  h2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
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
    padding: 0.25rem 0.5rem;
  }
`

export const Price = styled.div`
  color: white;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
`

export const Description = styled.div`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  margin-top: 1.25rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    margin-top: 0.5rem;
  }
`

export const Button = styled.button`
  background-color: #0f52ba;
  width: 100%;
  bottom: auto;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 18px;
  margin-top: 0.875rem;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 18px;

  @media (min-width: 768px) {
    height: 32px;
    margin-top: 0.75rem;
    cursor: pointer;
  }

  svg {
    margin-right: 0.875rem;
  }
`

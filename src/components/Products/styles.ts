// vendors
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(120px, 3fr);
  grid-gap: 2rem 1.5rem;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: 825px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 940px;
    margin: 7.5rem auto 10.75rem;
    padding: 0;
  }

  @media (min-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

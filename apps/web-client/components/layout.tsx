import styled from 'styled-components'

import { Footer } from './footer'
import { Header } from './header'

const Main = styled.main`
  padding: 1rem;
`

export function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

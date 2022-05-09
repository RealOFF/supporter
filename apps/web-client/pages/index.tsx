import Router from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

const StyledPage = styled.div``

export function Index() {
  useEffect(() => {
    Router.push('/home')
  }, [])

  return <StyledPage></StyledPage>
}

export default Index

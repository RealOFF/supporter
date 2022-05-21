import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

const StyledPage = styled.div``

export function Index() {
  const router = useRouter()

  useEffect(() => {
    router.push('/home')
  }, [router])

  return <StyledPage></StyledPage>
}

export default Index

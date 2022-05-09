import { Divider, Input } from '@chakra-ui/react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 65px;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        Logo
        <Input w={260} />
      </Content>
      <Divider />
    </Wrapper>
  )
}

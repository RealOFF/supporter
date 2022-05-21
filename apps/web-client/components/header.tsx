import { Divider, Input } from '@chakra-ui/react'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 65px;
  z-index: 10;
  background: #ffffff;
`

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        Supporter Logo
        <Input placeholder="Find account to support" w={260} />
      </Content>
      <Divider />
    </Wrapper>
  )
}

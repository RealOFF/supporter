import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import styled from 'styled-components'

import { Card } from '../components'

const StyledPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 540px;
`

const posts = new Array(10).fill(null)

export function Home() {
  return (
    <StyledPage>
      <Content>
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Supported</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex flexDirection="column" gap="1rem">
                {posts.map((item, index) => (
                  <Card key={index} />
                ))}
              </Flex>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Content>
    </StyledPage>
  )
}

export default Home

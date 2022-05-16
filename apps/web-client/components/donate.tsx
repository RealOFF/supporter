import styled from 'styled-components'
import React, { useState } from 'react'
import { Heading, Text, Collapse, Button, IconButton } from '@chakra-ui/react'
import DonateCard from './donatecard'

const DonateCardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 1120px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const DonateFooter = styled.div`
  display: flex;
  margin-top: 20px;
`
const FooterButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`

const arrDonate = new Array(6).fill(null)

function Donate() {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <>
      <Heading size="lg" textAlign="center" mb="1.5rem">
        Select a membership level
      </Heading>
      <Collapse startingHeight={500} in={show}>
        <DonateCardWrap>
          {arrDonate.map((item, index) => (
            <DonateCard key={index} />
          ))}
        </DonateCardWrap>
      </Collapse>
      <Button borderRadius="3xl" mt="20px" onClick={handleToggle}>
        {show ? 'close 3 levels' : 'See all 6 levels'}
      </Button>
      <DonateFooter>
        <div></div>
        <div>
          <Text textAlign="center" fontWeight="bold">
            59
          </Text>
          <Text fontSize="sm">patrons</Text>
        </div>
        <IconButton
          ml="40px"
          aria-label="youtube"
          borderRadius="3xl"
        ></IconButton>
      </DonateFooter>
      <FooterButton>
        <Button colorScheme="gray" p="1rem 4rem" borderRadius="3xl">
          Share
        </Button>
        <Button ml="20px" p="1rem 4rem" borderRadius="3xl">
          Follow
        </Button>
      </FooterButton>
    </>
  )
}

export default Donate

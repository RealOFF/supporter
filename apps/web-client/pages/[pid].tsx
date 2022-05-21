import styled from 'styled-components'
import React, { useState } from 'react'
import { Avatar, Wrap, WrapItem, Center, Heading, Text } from '@chakra-ui/react'
import AboutCard from '../components/aboutcard'
import Posts from '../components/posts'
import Donate from '../components/donate'

const AvatarWrapper = styled.div`
  background-image: url('https://thumbs.dreamstime.com/z/e-r-o-grunge-144976480.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 1300px;
  height: 25vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 4rem;
`

const Translate = styled.div`
  position: relative;
  transform: translateY(30%);
  border: 4px solid rgb(255, 255, 255);
  border-radius: 50%;
`
const DonateWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AboutCardWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`
const PostsWrapper = styled.div`
  max-width: 600px;
`

const arrPosts = new Array(10).fill(null)

export function Pid() {
  return (
    <>
      <AvatarWrapper>
        <Translate>
          <Wrap>
            <WrapItem>
              <Avatar
                size="2xl"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </WrapItem>
          </Wrap>
        </Translate>
      </AvatarWrapper>
      <Center flexDirection="column">
        <Heading size="md">MyGap</Heading>

        <Text fontSize="lg">
          is creating YouTube animated videos that educate you
        </Text>
      </Center>
      <DonateWrap>
        <Donate />
      </DonateWrap>
      <About>
        <Heading textAlign="center" mt="4rem" mb="20px">
          About MyGap
        </Heading>
        <AboutCardWrapper>
          <AboutCard />
        </AboutCardWrapper>
        <PostsWrapper>
          {arrPosts.map((item, index) => (
            <Posts key={index} />
          ))}
        </PostsWrapper>
      </About>
    </>
  )
}

export default Pid

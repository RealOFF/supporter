import { Box, Button, Collapse, Heading, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import styled from 'styled-components'

const arr = [
  {
    video: 'string',
    date: Date(),
    title: 'title',
    text: 'Работяги, давайте дожмем уже эту круглую цифру и отпразднуем такое событие ответами на вопросы авторам MyGap. И, конечно, доступ будет только для нашей секты... т.е. нашего Ордена. Соберем ваши вопросы здесь и опубликуем тоже здесь.'
  }
]

const Post = styled.div`
  border: 1px solid;
  border-radius: 10px;
  margin-top: 10px;
`
const Video = styled.div`
  background-image: url('https://thumbs.dreamstime.com/z/e-r-o-grunge-144976480.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const VideoLock = styled.div`
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

function Posts() {
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  // const [open, setOpen] = useState(false)

  // const openVideo = () => setOpen(!open)

  return (
    <Post>
      <Video>
        {open ? null : (
          <VideoLock>
            <Text color="white" mb="10px">
              Unlock this post
            </Text>
            <Button borderRadius="2rem">Join now</Button>
          </VideoLock>
        )}
      </Video>
      <Box p="40px" pt="20px">
        <Box display="flex" justifyContent="space-between" pb="20px">
          <Text fontSize="xs">{arr[0].date}</Text>
          <Text fontSize="md">Locked</Text>
        </Box>
        <Box>
          <Heading pb="20px">{arr[0].title}</Heading>
          <Collapse startingHeight={89} in={show}>
            {arr[0].text}
          </Collapse>
          <Button mt="20px" onClick={handleClick}>
            Continue rading
          </Button>
        </Box>
        <Text w="60px" mt="10px" cursor="pointer">
          0 likes
        </Text>
      </Box>
    </Post>
  )
}

export default Posts

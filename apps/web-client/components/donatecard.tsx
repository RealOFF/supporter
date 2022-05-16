import { Heading, Image, Box, Text, Button } from '@chakra-ui/react'
import styled from 'styled-components'

const arr = [
  {
    title: 'title',
    img: 'https://bit.ly/dan-abramov',
    currency: 'USDT',
    period: 'month',
    description:
      'Доступ к  asdsad внутреннему кругу был всего лишь вопросом времени для тебя. Здесь мы сможем обсудить наши планы на будущее, да и просто узнать друг друга лучше.Награда: доступ к закрытому чату Дискорд + упомянутое выше'
  }
]

const Wrapper = styled(Box)`
  text-align: center;
`

export function DonateCard() {
  return (
    <Wrapper p="24px" borderWidth="1px" borderRadius="lg">
      <Heading size="md" mb="20px">
        {arr[0].title}
      </Heading>
      <Image
        m="0 auto"
        borderRadius="full"
        boxSize="5em"
        src={arr[0].img}
        alt="Dan Abramov"
        mb="2rem"
      />
      <Text fontSize="1.5rem" fontWeight="bold">
        {arr[0].currency}
      </Text>
      <Text mb="1rem">{arr[0].period}</Text>
      <Button mb="1.5rem" colorScheme="blue" borderRadius="3xl" p="1.5rem 4rem">
        JOIN
      </Button>
      <Text textAlign="left">{arr[0].description}</Text>
    </Wrapper>
  )
}

export default DonateCard

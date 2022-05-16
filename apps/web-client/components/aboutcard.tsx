import {
  Heading,
  Box,
  Text,
  Button,
  Collapse,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Slider,
  SliderTrack,
  SliderFilledTrack
} from '@chakra-ui/react'
import { useState } from 'react'
import styled from 'styled-components'

const Columne = styled.div`
  border: 1px solid;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`

const Video = styled.div`
  width: 100%;
  height: 300px;
  max-height: 300px;
  max-width: 600px;
  background-color: yellow;
`

const TableWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  padding-bottom: 20px;
`
const ColumnLast = styled.div`
  display: flex;
  @media screen and (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

function AboutCard() {
  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)

  const [sliderValue, setSliderValue] = useState(54)

  return (
    <>
      <Columne>
        <Video>Video</Video>
        <Heading fontSize="lg" mt="20px" mb="20px">
          Hello
        </Heading>
        <Collapse startingHeight={200} in={show}>
          Ты зашел на эту страницу реальной поддержки не случайно. Осознанно или
          нет, но ты ценитель стоящего контента на Ютюбе. Ты можешь отличить
          отснятый за пару часов рофел от сложного производственного продукта,
          где обязательны стадии идеи, поиска информации, аналитики, разработки
          сценария, отрисовки, анимации и монтажа. Такие работы несут в себе
          смысл, открывают что-то новое, помогают понять мир или хотя бы
          позволяют взглянуть под другим углом. Такие видео ты не находишь в
          тренде, потому что они как минимум не популярны. Они не штампуются
          десятками в месяц, а их создание требует колоссального труда и
          энергии.
        </Collapse>
        <Button
          background="none"
          p="none"
          size="sm"
          display="contents"
          color="blue.500"
          onClick={handleToggle}
        >
          {show ? 'show less' : 'show more'}
        </Button>
      </Columne>
      <Columne>
        <Tabs variant="unstyled" size="sm">
          <TableWrap>
            <Text>GOALS</Text>
            <TabList>
              <Tab border="1px solid" borderLeftRadius="5px">
                {'<'}
              </Tab>
              <Tab border="1px solid" borderRightRadius="5px">
                {'>'}
              </Tab>
            </TabList>
          </TableWrap>
          <TabPanels>
            <TabPanel>
              {sliderValue}% Complete
              <Slider
                isDisabled
                id="slider"
                defaultValue={sliderValue}
                min={0}
                max={100}
                colorScheme="blue"
                onChange={(v) => setSliderValue(v)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
              <Text m="20px 0">
                Работяги, давайте дожмем уже эту круглую цифру и отпразднуем
                такое событие ответами на вопросы авторам MyGap. И, конечно,
                доступ будет только для нашей секты... т.е. нашего Ордена.
                Соберем ваши вопросы здесь и опубликуем тоже здесь.
              </Text>
              1 of 2
            </TabPanel>
            <TabPanel>
              32% Complete
              <Slider
                isDisabled
                id="slider"
                defaultValue={32}
                min={0}
                max={100}
                colorScheme="blue"
                onChange={(v) => setSliderValue(v)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
              <Text m="20px 0">
                Работяги, давайте дожмем уже эту круглую цифру и отпразднуем
                такое событие ответами на вопросы авторам MyGap. И, конечно,
                доступ будет только для нашей секты... т.е. нашего Ордена.
                Соберем ваши вопросы здесь и опубликуем тоже здесь.
              </Text>
              2 of 2
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Columne>
      <Columne>
        <Heading size="md" textAlign="center" mb="20px">
          Become a patron to
        </Heading>
        <ColumnLast>
          <Box textAlign="center">
            <Heading color="blue.500">193</Heading>
            <Text>Unlock 193 exclusive posts</Text>
          </Box>
          <Box textAlign="center">
            <Heading color="blue.500">193</Heading>
            <Text>Unlock 193 exclusive posts</Text>
          </Box>
          <Box textAlign="center">
            <Heading color="blue.500">193</Heading>
            <Text>Unlock 193 exclusive posts</Text>
          </Box>
        </ColumnLast>
      </Columne>
    </>
  )
}

export default AboutCard

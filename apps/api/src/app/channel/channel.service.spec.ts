import { Test } from '@nestjs/testing'

import { PrismaService } from '../prisma/prisma.service'
import { ChannelService } from './channel.service'

describe('ChannelService', () => {
  let service: ChannelService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ChannelService, PrismaService]
    }).compile()

    service = module.get<ChannelService>(ChannelService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should get a single channel using the id', async () => {
    const expectedResult = { id: 1, name: 'name' }
    prismaService.channel.findUnique = jest
      .fn()
      .mockReturnValueOnce(expectedResult)
    const arg = { id: 1 }

    const result = await service.findOne(arg)

    expect(result).toEqual(expectedResult)
    expect(prismaService.channel.findUnique).toBeCalledWith({ where: arg })
  })

  it('should get all channels', async () => {
    const expectedResult = [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
      { id: 3, name: 'name3' }
    ]
    prismaService.channel.findMany = jest
      .fn()
      .mockReturnValueOnce(expectedResult)

    const result = await service.findAll()

    expect(result).toEqual(expectedResult)
    expect(prismaService.channel.findMany).toBeCalledWith(undefined)
  })

  it('should skip one channel', async () => {
    prismaService.channel.findMany = jest.fn()
    const arg = { skip: 1 }

    await service.findAll(arg)

    expect(prismaService.channel.findMany).toBeCalledWith(arg)
  })
})

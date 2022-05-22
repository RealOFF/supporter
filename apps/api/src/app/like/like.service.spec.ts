import { Test } from '@nestjs/testing'

import { PrismaService } from '../prisma/prisma.service'
import { LikeService } from './like.service'

describe('LikeService', () => {
  let service: LikeService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LikeService, PrismaService]
    }).compile()

    service = module.get<LikeService>(LikeService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should get a single like using the id', async () => {
    const expectedResult = { id: 1, name: 'name' }
    prismaService.like.findUnique = jest
      .fn()
      .mockReturnValueOnce(expectedResult)
    const arg = { id: 1 }

    const result = await service.findOne(arg)

    expect(result).toEqual(expectedResult)
    expect(prismaService.like.findUnique).toBeCalledWith({ where: arg })
  })

  it('should get all likes', async () => {
    const expectedResult = [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
      { id: 3, name: 'name3' }
    ]
    prismaService.like.findMany = jest.fn().mockReturnValueOnce(expectedResult)

    const result = await service.findAll()

    expect(result).toEqual(expectedResult)
    expect(prismaService.like.findMany).toBeCalledWith(undefined)
  })

  it('should skip one like', async () => {
    prismaService.like.findMany = jest.fn()
    const arg = { skip: 1 }

    await service.findAll(arg)

    expect(prismaService.like.findMany).toBeCalledWith(arg)
  })
})

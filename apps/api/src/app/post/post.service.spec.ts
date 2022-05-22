import { Test } from '@nestjs/testing'

import { PrismaService } from '../prisma/prisma.service'
import { PostService } from './post.service'

describe('PostService', () => {
  let service: PostService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PostService, PrismaService]
    }).compile()

    service = module.get<PostService>(PostService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should get a single post using the id', async () => {
    const expectedResult = { id: 1, name: 'name' }
    prismaService.post.findUnique = jest
      .fn()
      .mockReturnValueOnce(expectedResult)
    const arg = { id: 1 }

    const result = await service.findOne(arg)

    expect(result).toEqual(expectedResult)
    expect(prismaService.post.findUnique).toBeCalledWith({ where: arg })
  })

  it('should get all posts', async () => {
    const expectedResult = [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
      { id: 3, name: 'name3' }
    ]
    prismaService.post.findMany = jest.fn().mockReturnValueOnce(expectedResult)

    const result = await service.findAll()

    expect(result).toEqual(expectedResult)
    expect(prismaService.post.findMany).toBeCalledWith(undefined)
  })

  it('should skip one post', async () => {
    prismaService.post.findMany = jest.fn()
    const arg = { skip: 1 }

    await service.findAll(arg)

    expect(prismaService.post.findMany).toBeCalledWith(arg)
  })
})

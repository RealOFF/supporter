import { Test } from '@nestjs/testing'

import { PrismaService } from '../prisma/prisma.service'
import { CommentService } from './comment.service'

describe('CommentService', () => {
  let service: CommentService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CommentService, PrismaService]
    }).compile()

    service = module.get<CommentService>(CommentService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should get a single comment using the id', async () => {
    const expectedResult = { id: 1, name: 'name' }
    prismaService.comment.findUnique = jest
      .fn()
      .mockReturnValueOnce(expectedResult)
    const arg = { id: 1 }

    const result = await service.findOne(arg)

    expect(result).toEqual(expectedResult)
    expect(prismaService.comment.findUnique).toBeCalledWith({ where: arg })
  })

  it('should get all comments', async () => {
    const expectedResult = [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
      { id: 3, name: 'name3' }
    ]
    prismaService.comment.findMany = jest
      .fn()
      .mockReturnValueOnce(expectedResult)

    const result = await service.findAll()

    expect(result).toEqual(expectedResult)
    expect(prismaService.comment.findMany).toBeCalledWith(undefined)
  })

  it('should skip one comment', async () => {
    prismaService.comment.findMany = jest.fn()
    const arg = { skip: 1 }

    await service.findAll(arg)

    expect(prismaService.comment.findMany).toBeCalledWith(arg)
  })
})

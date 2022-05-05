import { Test } from '@nestjs/testing'

import { PrismaService } from '../prisma/prisma.service'
import { UsersService } from './users.service'

describe('UsersService', () => {
  let service: UsersService
  let prismaService: PrismaService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UsersService, PrismaService]
    }).compile()

    service = module.get<UsersService>(UsersService)
    prismaService = module.get<PrismaService>(PrismaService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should get a single user using the id', async () => {
    const expectedResult = { id: 1, name: 'name' }
    prismaService.user.findUnique = jest
      .fn()
      .mockReturnValueOnce(expectedResult)
    const arg = { id: 1 }

    const result = await service.findOne(arg)

    expect(result).toEqual(expectedResult)
    expect(prismaService.user.findUnique).toBeCalledWith({ where: arg })
  })

  it('should get all users', async () => {
    const expectedResult = [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
      { id: 3, name: 'name3' }
    ]
    prismaService.user.findMany = jest.fn().mockReturnValueOnce(expectedResult)

    const result = await service.findAll()

    expect(result).toEqual(expectedResult)
    expect(prismaService.user.findMany).toBeCalledWith(undefined)
  })

  it('should skip one user', async () => {
    prismaService.user.findMany = jest.fn()
    const arg = { skip: 1 }

    await service.findAll(arg)

    expect(prismaService.user.findMany).toBeCalledWith(arg)
  })
})

import { Test, TestingModule } from '@nestjs/testing'

import { PrismaService } from '../prisma/prisma.service'
import { ChannelResolver } from './channel.resolver'
import { ChannelService } from './channel.service'

describe('ChannelResolver', () => {
  let resolver: ChannelResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChannelResolver, ChannelService, PrismaService]
    }).compile()

    resolver = module.get<ChannelResolver>(ChannelResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})

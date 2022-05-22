import { Module } from '@nestjs/common'

import { PrismaModule } from '../prisma/prisma.module'
import { ChannelResolver } from './channel.resolver'
import { ChannelService } from './channel.service'

@Module({
  providers: [ChannelResolver, ChannelService],
  imports: [PrismaModule]
})
export class ChannelModule {}

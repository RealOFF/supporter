import { Module } from '@nestjs/common'

import { PrismaModule } from '../prisma/prisma.module'
import { LikeResolver } from './like.resolver'
import { LikeService } from './like.service'

@Module({
  providers: [LikeResolver, LikeService],
  imports: [PrismaModule]
})
export class LikeModule {}

import { Module } from '@nestjs/common'

import { PrismaModule } from '../prisma/prisma.module'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'

@Module({
  providers: [PostResolver, PostService],
  imports: [PrismaModule]
})
export class UsersModule {}

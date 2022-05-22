import { Injectable } from '@nestjs/common'
import { Like, Prisma } from '@prisma/client'

import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class LikeService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    likeWhereUniqueInput: Prisma.LikeWhereUniqueInput
  ): Promise<Like | null> {
    return this.prisma.like.findUnique({
      where: likeWhereUniqueInput
    })
  }

  async findAll(params?: {
    skip?: number
    take?: number
    cursor?: Prisma.LikeWhereUniqueInput
    where?: Prisma.LikeWhereInput
    orderBy?: Prisma.LikeOrderByWithRelationInput
  }): Promise<Like[]> {
    return this.prisma.like.findMany(params)
  }

  async create(data: Prisma.LikeCreateInput): Promise<Like> {
    return this.prisma.like.create({
      data
    })
  }

  async remove(where: Prisma.LikeWhereUniqueInput): Promise<Like> {
    return this.prisma.like.delete({
      where
    })
  }
}

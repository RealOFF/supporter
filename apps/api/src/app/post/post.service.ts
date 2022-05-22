import { Injectable } from '@nestjs/common'
import { Post, Prisma } from '@prisma/client'

import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    postWhereUniqueInput: Prisma.PostWhereUniqueInput
  ): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput
    })
  }

  async findAll(params?: {
    skip?: number
    take?: number
    cursor?: Prisma.PostWhereUniqueInput
    where?: Prisma.PostWhereInput
    orderBy?: Prisma.PostOrderByWithRelationInput
  }): Promise<Post[]> {
    return this.prisma.post.findMany(params)
  }

  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data
    })
  }

  async update(params: {
    where: Prisma.PostWhereUniqueInput
    data: Prisma.PostUpdateInput
  }): Promise<Post> {
    const { where, data } = params
    return this.prisma.post.update({
      data,
      where
    })
  }

  async remove(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    return this.prisma.post.delete({
      where
    })
  }
}

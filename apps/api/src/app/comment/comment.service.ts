import { Injectable } from '@nestjs/common'
import { Comment, Prisma } from '@prisma/client'

import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    commentWhereUniqueInput: Prisma.CommentWhereUniqueInput
  ): Promise<Comment | null> {
    return this.prisma.comment.findUnique({
      where: commentWhereUniqueInput
    })
  }

  async findAll(params?: {
    skip?: number
    take?: number
    cursor?: Prisma.CommentWhereUniqueInput
    where?: Prisma.CommentWhereInput
    orderBy?: Prisma.CommentOrderByWithRelationInput
  }): Promise<Comment[]> {
    return this.prisma.comment.findMany(params)
  }

  async create(data: Prisma.CommentUncheckedCreateInput): Promise<Comment> {
    return this.prisma.comment.create({
      data
    })
  }

  async update(params: {
    where: Prisma.CommentWhereUniqueInput
    data: Prisma.CommentUpdateInput
  }): Promise<Comment> {
    const { where, data } = params
    return this.prisma.comment.update({
      data,
      where
    })
  }

  async remove(where: Prisma.CommentWhereUniqueInput): Promise<Comment> {
    return this.prisma.comment.delete({
      where
    })
  }
}

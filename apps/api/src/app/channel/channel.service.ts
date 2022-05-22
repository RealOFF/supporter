import { Injectable } from '@nestjs/common'
import { Channel, Prisma } from '@prisma/client'

import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    userWhereUniqueInput: Prisma.ChannelWhereUniqueInput
  ): Promise<Channel | null> {
    return this.prisma.channel.findUnique({
      where: userWhereUniqueInput
    })
  }

  async findAll(params?: {
    skip?: number
    take?: number
    cursor?: Prisma.ChannelWhereUniqueInput
    where?: Prisma.ChannelWhereInput
    orderBy?: Prisma.ChannelOrderByWithRelationInput
  }): Promise<Channel[]> {
    return this.prisma.channel.findMany(params)
  }

  async create(data: Prisma.ChannelCreateInput): Promise<Channel> {
    return this.prisma.channel.create({
      data
    })
  }

  async update(params: {
    where: Prisma.ChannelWhereUniqueInput
    data: Prisma.ChannelUpdateInput
  }): Promise<Channel> {
    const { where, data } = params
    return this.prisma.channel.update({
      data,
      where
    })
  }

  async remove(where: Prisma.ChannelWhereUniqueInput): Promise<Channel> {
    return this.prisma.channel.delete({
      where
    })
  }
}

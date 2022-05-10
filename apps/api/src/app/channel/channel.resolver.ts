import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateChannelInput, UpdateChannelInput } from '../../graphql.schema'
import { ChannelService } from './channel.service'

@Resolver('Channel')
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Mutation('createChannel')
  create(@Args('createChannelInput') createChannelInput: CreateChannelInput) {
    return this.channelService.create(createChannelInput)
  }

  @Query('channels')
  findAll() {
    return this.channelService.findAll()
  }

  @Query('channel')
  findOne(@Args('id') id: number) {
    return this.channelService.findOne({ id })
  }

  @Mutation('updateChannel')
  update(@Args('updateUserInput') updateChannelInput: UpdateChannelInput) {
    return this.channelService.update({
      where: { id: updateChannelInput.id },
      data: updateChannelInput
    })
  }

  @Mutation('removeChannel')
  remove(@Args('id') id: number) {
    return this.channelService.remove({ id })
  }
}

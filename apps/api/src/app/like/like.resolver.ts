import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateLikeInput } from '../../graphql.schema'
import { LikeService } from './like.service'

@Resolver('Like')
export class LikeResolver {
  constructor(private readonly likeService: LikeService) {}

  @Mutation('createLike')
  create(@Args('createlikeInput') createlikeInput: CreateLikeInput) {
    return this.likeService.create(createlikeInput)
  }

  @Query('likes')
  findAll() {
    return this.likeService.findAll()
  }

  @Query('like')
  findOne(@Args('id') id: number) {
    return this.likeService.findOne({ id })
  }

  @Mutation('removeLike')
  remove(@Args('id') id: number) {
    return this.likeService.remove({ id })
  }
}

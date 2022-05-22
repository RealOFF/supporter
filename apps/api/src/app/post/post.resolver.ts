import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreatePostInput, UpdatePostInput } from '../../graphql.schema'
import { PostService } from './post.service'

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation('createPost')
  create(@Args('createUserInput') createUserInput: CreatePostInput) {
    return this.postService.create(createUserInput)
  }

  @Query('posts')
  findAll() {
    return this.postService.findAll()
  }

  @Query('post')
  findOne(@Args('id') id: number) {
    return this.postService.findOne({ id })
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updatePostInput: UpdatePostInput) {
    return this.postService.update({
      where: { id: updatePostInput.id },
      data: updatePostInput
    })
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.postService.remove({ id })
  }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateUserInput } from '../../graphql.schema'
import { UpdateUserInput } from '../../graphql.schema'
import { UserService } from './user.service'

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput)
  }

  @Query('users')
  findAll() {
    return this.userService.findAll()
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne({ id })
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update({
      where: { id: updateUserInput.id },
      data: updateUserInput
    })
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove({ id })
  }
}

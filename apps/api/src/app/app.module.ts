import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ChannelModule } from './channel/channel.module'
import { CommentModule } from './comment/comment.module'
import { LikeModule } from './like/like.module'
import { PostModule } from './post/post.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
    ChannelModule,
    CommentModule,
    LikeModule,
    PostModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

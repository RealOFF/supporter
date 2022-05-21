import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()

definitionsFactory.generate({
  typePaths: [join(process.cwd(), 'apps/api/src/**/*.graphql')],
  path: join(process.cwd(), '/apps/api/src/graphql.schema.ts'),
  outputAs: 'class'
})

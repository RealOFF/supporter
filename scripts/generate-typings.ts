import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()

console.log('process.cwd()', process.cwd())

definitionsFactory.generate({
  typePaths: [join(process.cwd(), 'apps/api/src/**/*.graphql')],
  path: join(process.cwd(), '/apps/api/src/graphql.schema.ts'),
  outputAs: 'class'
})

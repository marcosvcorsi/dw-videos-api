import 'reflect-metadata';
import './database/connection';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server'

import CategoryResolver from './graphql/category/CategoryResolver';

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [
      CategoryResolver
    ]
  })

  const server = new ApolloServer({
    schema
  })

  server.listen({ port: 4100 }, () => console.log('Server is running'))
}

bootstrap();

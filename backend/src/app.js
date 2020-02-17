import 'dotenv/config';
import path from 'path';
import { GraphQLServer } from 'graphql-yoga';


import './database';
import resolvers from './resolvers';

class App {
  constructor(){
    this.server = new GraphQLServer({
      typeDefs: path.resolve(__dirname, 'schema.graphql'),
      resolvers
    });
  }
}

export default new App().server;

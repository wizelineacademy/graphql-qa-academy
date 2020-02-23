const express = require('express');
const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const mongoDB = 'mongodb://db:27017/todos'
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
const db  = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));
 
db.once('open', () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization;

      if (!token || token != 'Bearer QA2020') {
        throw new AuthenticationError('Authentication error')
      }

      return { token }
    }
  });
  
  const app = express();
  const path = '/'
  server.applyMiddleware({ app, path });
  
  app.listen({ port: 8000 }, () =>
    console.log(`Server ready at http://localhost:8000${server.graphqlPath}`)
  );
});
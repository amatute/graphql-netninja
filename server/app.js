const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const uri = 'mongodb+srv://amatute:z7fojOVV8J8E5fWv@cluster0-ygzug.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
// import the gql tagged template function
const { gql } = require('apollo-server-express');
const { User, Book } = require('../models');


// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    books: [Book]
  }
  
  type Query {
    books: [Book]
  }

  type Book {
        bookId: ID
        title: String
        authors: [String]
        description: String
        link: String
  }
`;

// export the typeDefs
module.exports = typeDefs;
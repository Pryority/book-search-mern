const { gql } = require('@apollo/client');

const typeDefs = gql`
type Book {
  _id: ID
  title: String
  authors: [String]
  description: String
  bookId: String
  image: String
  link: String
}

type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }
# This "Book" type defines the queryable fields for every book in our data source.

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  me: User
  user(username: String!): User
  users(username: String!): [User]
  books(username: String): [Book]
  book(_id: ID!): Book
}

type Auth {
    token: ID!
    user: User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
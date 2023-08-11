const { gql } = require("apollo-server-express");
const typeDefs = gql`
  input BookInput {
    bookId: String
    title: String
    author: String
    description: String
    image: String
    link: String
  }

  type Book {
    bookId: String!
    title: String!
    author: String
    description: String!
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeBook(bookId: String!): User
    saveBook(bookData: BookInput): User
  }

  type User {
    _id: ID!
    username: String
    email: String!
    bookCount: Int
    savedBooks: [Book]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    theUser: User
  }
`;

module.exports = typeDefs;

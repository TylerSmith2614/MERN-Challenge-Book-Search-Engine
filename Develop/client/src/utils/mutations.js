import { gql } from "@apollo/client";

// The $ sign is not added as a special character in your import statement for gql.
// It's used within the template strings to indicate that the value should be substituted with the variable's value when the query/mutation is executed.
// The $ sign is used in GraphQL queries and mutations to define variables and reference them within the query/mutation itself.
// It allows you to pass dynamic values to your queries and mutations when you execute them, without having to directly include the values in the query/mutation string.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      savedBooks {
        bookId
        title
        author
        description
        image
        link
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        title
        author
        description
        image
        link
      }
    }
  }
`;

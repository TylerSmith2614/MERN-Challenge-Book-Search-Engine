// setup for React and Apollo Client
import { gql } from '@apollo/client';


export const GET_ME = gql`
  {
    theUser {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

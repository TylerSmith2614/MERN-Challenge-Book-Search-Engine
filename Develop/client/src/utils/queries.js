import { gql } from "@apollo/client";

export const GET_theUser = gql`
  {
    theUser {
      _id
      username
      email
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

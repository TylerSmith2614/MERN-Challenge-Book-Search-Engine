import React from "react";

import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import { GET_theUser, REMOVE_BOOKS } from "../utils/queries";
import { deleteBook } from "../utils/API";
import Auth from "../utils/auth";
import { removeBookId } from "../utils/localStorage";

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_theUser);
  const client = useApolloClient(); // Access the Apollo Client cache

  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteBook(bookId, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      // Remove book's id from localStorage
      removeBookId(bookId);

      // Remove the book from the cached user data
      const updatedUser = data.theUser.savedBooks.filter(
        (book) => book.bookId !== bookId
      );

      // Update the user's cached data
      client.writeQuery({
        query: GET_theUser,
        data: {
          theUser: {
            ...data.theUser,
            savedBooks: data.theUser.savedBooks.filter(
              (book) => book.bookId !== bookId
            ),
          },
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const userData = data.theUser;

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image && (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                )}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;

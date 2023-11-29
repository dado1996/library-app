import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../services/books";
import {
  Alert,
  Box,
  ImageList,
  Skeleton,
  Snackbar,
  Typography,
} from "@mui/material";

export const Book = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [openError, setOppenError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      try {
        const result = await getBook(id);
        if (!result) {
          setError("There was an error retrieving the book");
          return;
        }
        setBook(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return (
    <>
      {!loading && book ? (
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4">{book.title}</Typography>
          <img src={book.formats["image/jpeg"]} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption">
              Author(s): {book.authors.map(({ name }) => name).join(", ")}
            </Typography>
            <Typography variant="body1">
              <a href={book.formats["text/html"]} target="_blank">
                Read book
              </a>
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <Skeleton variant="rounded" width="100%" height="30px" />
          <Skeleton variant="rectangular" width="200px" height="300px" />
        </Box>
      )}
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={() => setOppenError(false)}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </>
  );
};

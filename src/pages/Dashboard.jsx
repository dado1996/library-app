import {
  Alert,
  Autocomplete,
  Box,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookByName } from "../services/books";

export const Dashboard = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBookByName() {
      setLoading(true);
      try {
        const { results } = await getBookByName(inputValue);
        setOptions(
          results.slice(0, 3).map(({ id, title }) => {
            const newTitle =
              title.length > 50 ? title.slice(0, 50).trim() + "..." : title;
            return {
              id,
              title: newTitle,
            };
          })
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (inputValue.length >= 3) {
      fetchBookByName();
    }
  }, [inputValue]);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Typography variant="h3">Welcome to the library</Typography>
      <Autocomplete
        id="book-search"
        fullWidth
        loading={loading}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.title
        }
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value}
        noOptionsText="No books"
        isOptionEqualToValue={(option, value) => option === value}
        onChange={(event, newValue) => navigate(`/books/${newValue.id}`)}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        renderInput={(params) => (
          <TextField {...params} label="Search book..." fullWidth />
        )}
      />
      <Snackbar open={!!error} autoHideDuration={6000}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Box>
  );
};

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                Library App
              </Link>
            </Typography>
            <Button color="secondary">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

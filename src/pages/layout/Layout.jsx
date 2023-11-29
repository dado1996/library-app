import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Box } from "@mui/material";

export const Layout = ({ children }) => {
    return (
        <Box xs={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Box>
    );
}
import { Box, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box sx={{
            marginTop: 'auto',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
        }}>
            <Typography variant="caption" color="secondary">Made by Diego Delgado</Typography>
        </Box>
    );
};
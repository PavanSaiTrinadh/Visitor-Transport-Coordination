import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';
import './login.css'; // Import the CSS file

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <Box>
      <Box
        width="100%"
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="white">
          BookMylift
        </Typography>
      </Box>

      <Box
        className="glossy-box" // Apply the glossy-box class
        width={isNonMobileScreens ? '50%' : '93%'}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Welcome to BookMylift!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

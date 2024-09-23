import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import theme from './utlis/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;

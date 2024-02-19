import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ROUTES } from './routes/ROUTES';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF', // Ana renk
    },
    background: {
      default: '#FFFFFF', // Arka plan rengi
    },
  },
});

const App = () => {

  useEffect(() => {
    const timeout = setTimeout(() => { }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const routes = createBrowserRouter(ROUTES);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
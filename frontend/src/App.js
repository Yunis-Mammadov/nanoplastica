import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ROUTES } from './routes/ROUTES';
import MusicPlayer from './components/User/MusicPlayer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

const App = () => {

  useEffect(() => {
    const timeout = setTimeout(() => {
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const routes = createBrowserRouter(ROUTES);

  return (
    <>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={routes} />
        </ThemeProvider >
        {/* <MusicPlayer /> */}
      </CartProvider >
    </>
  );
};

export default App;

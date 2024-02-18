import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ROUTES } from './routes/ROUTES';


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#FFFFFF',
//     },
//   },
// });

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
      </CartProvider >
    </>
  );
};

export default App;

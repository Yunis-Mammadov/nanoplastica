import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ROUTES } from './routes/ROUTES';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
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
          <FloatingWhatsApp
            phoneNumber="+994708878799"
            accountName='Nanoplastica.az'
            chatMessage='Salam. Sizə necə kömək edə bilərik?'
            avatar='https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg'
            statusMessage='online'
            notification
            notificationSound	
            />
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

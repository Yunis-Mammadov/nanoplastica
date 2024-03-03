import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserContextProvider } from './context/UserContext';
import { ROUTES } from './routes/ROUTES';


const App = () => {


  const routes = createBrowserRouter(ROUTES);

  return (
    <>
      <UserContextProvider>
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
      </UserContextProvider>
    </>
  );
};

export default App;

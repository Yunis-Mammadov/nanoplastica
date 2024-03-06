import React, { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ComModal from './ComModal';
import { CartProvider } from './context/CartContext';
import { UserContextProvider } from './context/UserContext';
import { ROUTES } from './routes/ROUTES';



const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const routes = createBrowserRouter(ROUTES);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsModalOpen(true);
    }, 600000)
  };

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
          <div>
            {isModalOpen && <ComModal imageUrl="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1709726382/WhatsApp_Image_2024-03-04_at_01.30.16_cpufth.jpg" handleClose={handleCloseModal} />}
          </div>
        </CartProvider>
      </UserContextProvider>
    </>
  );
};

export default App;

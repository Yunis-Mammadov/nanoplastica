import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getAllKeratin } from '../../../api/request';
import { useCart } from '../../../context/CartContext';
import Carousel from './Carousel';
import Countdown from './Countdown';
import CoxSatan from './CoxSatan';
import HomeSetler from './HomeSetler';
import WhyUs from './WhyUs';
import FirstCommercial from './FirstCommercial';
import Sliders from './Sliders';


const Home = () => {
  const [keratin, setKeratin] = useState([])
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart()

  useEffect(() => {
    getAllKeratin().then(data => {
      setKeratin(data)
    })
  }, [])



  const images = [
    "https://cdn11.bigcommerce.com/s-qaf2yg6x1o/images/stencil/1920w/carousel/132/Nioxidin.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-qaf2yg6x1o/images/stencil/1920w/carousel/131/health-hair.jpg?c=1"
  ];

  const handleAddToCart = () => {
    const item = {
      id: keratin.id,
      img: keratin.productImgUrl,
      name: keratin.name,
      brand: keratin.brand,
      quantity: quantity,
    };

    addToCart(item);

    Swal.fire({
      icon: 'success',
      title: 'Məhsul səbətə əlavə edildi!',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <>
      <div>
        <Sliders />
      </div>
      <div>
        <HomeSetler />
      </div>
      <div>
        <CoxSatan />
      </div>
      {/* <div>
        <Countdown />
      </div> */}
      <div>
        <Carousel />
      </div>
      <div>
        <FirstCommercial />
      </div>
      <div>
        <WhyUs />
      </div>
    </>
  );
};

export default Home;

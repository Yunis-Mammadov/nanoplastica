import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getAllKeratin } from '../../../api/request';
import { useCart } from '../../../context/CartContext';
import Carousel from './Carousel';
import Countdown from './Countdown';
import CoxSatan from './CoxSatan';
import FirstCommercial from './FirstCommercial';
import HomeSetler from './HomeSetler';
import Slider from './Slider';
import Videos from './Videos';
import WhyUs from './WhyUs';
import styles from './index.module.css';


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
        <HomeSetler />
      </div>
    </>
  );
};

export default Home;

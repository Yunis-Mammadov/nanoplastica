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
    <div className={styles.parentHome}>
        <div className={styles.sliderContainer}>
          <Slider images={images} />
        </div>
      <div className={styles.topContent}>
        {/* <div className={styles.navbarLinks}>
          <a href="/keratin">Keratin</a>
          <a href="/sacqulluq">Saç Qulluq Vasitələri</a>
          <a href="/fenler">Fenlər</a>
          <a href="/utuler">Ütülər</a>
          <a href="/setler">Setlər</a>
        </div> */}
        <div>
          <HomeSetler />
        </div>
        <div className={styles.weeklyChat}>
          <h2>
            Həftənin təklifi
          </h2>
          <div>
            <Countdown />
          </div>
          <p>
            name
          </p>
          <p>
            endirim faiz
          </p>
          <img className={styles.weekImg} src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" />
          <div className={styles.detailWhislistButton}>
            <p onClick={handleAddToCart}>Səbətə Əlavə Et</p>
          </div>
        </div>
      </div>
      <div>
        {/* <HomeSetler /> */}
        <div>
          <FirstCommercial />
        </div>
        <div>
          <CoxSatan />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <WhyUs />
        </div>
        <div>
          <Videos />
        </div>
      </div>
    </div>
  );
};

export default Home;

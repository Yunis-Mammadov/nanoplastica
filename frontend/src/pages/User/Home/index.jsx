import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { getAllKeratin } from '../../../api/request';
import Countdown from './Countdown';
import FirstCommercial from './FirstCommercial';
import HomeSetler from './HomeSetler';
import Slider from './Slider';
import WhyUs from './WhyUs';
import styles from './index.module.css';
import Swal from 'sweetalert2';
import { useCart } from '../../../context/CartContext';
import CoxSatan from './CoxSatan';
import Carousel from './Carousel';
import Videos from './Videos';


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
    "https://i.pinimg.com/originals/84/b2/d2/84b2d2bb17e1fedd394c37d6d2a38e19.png",
    "https://wallpapercave.com/wp/wp3788129.jpg",
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
      {/* <div className={styles.topContent}>
        <div className={styles.navbarLinks}>
          <a href="/keratin">Keratin</a>
          <a href="/sacqulluq">Saç Qulluq Vasitələri</a>
          <a href="/fenler">Fenlər</a>
          <a href="/utuler">Ütülər</a>
          <a href="/setler">Setlər</a>
        </div>
        <div className={styles.sliderContainer}>
          <Slider images={images} />
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
      </div> */}
      <div>
        <HomeSetler />
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

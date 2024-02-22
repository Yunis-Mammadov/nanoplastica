import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getAllKeratin } from '../../../api/request';
import { useCart } from '../../../context/CartContext';
import Carousel from './Carousel';
import Sliders from './Sliders';
import WhyUs from './WhyUs';
import Countdown from '../Home/Countdown'
import { useMediaQuery } from '@mui/material';
import CoxSatan from './CoxSatan';
import Videos from './Videos';


const Home = () => {
  const [keratin, setKeratin] = useState([])
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart()
  const isExtraLarge = useMediaQuery('(min-width:1200px)');
  const isLarge = useMediaQuery('(min-width:270px)');

  useEffect(() => {
    getAllKeratin().then(data => {
      setKeratin(data)
    })
  }, [])



  const images = [
    "https://cdn11.bigcommerce.com/s-qaf2yg6x1o/images/stencil/1920w/carousel/132/Nioxidin.jpg?c=1",
    "https://cdn11.bigcommerce.com/s-qaf2yg6x1o/images/stencil/1920w/carousel/131/health-hair.jpg?c=1"
  ];

  if (isExtraLarge) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Sliders />
          </div>
          <div>
            <Countdown />
          </div>
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <WhyUs />
        </div>
        <div>
          <CoxSatan />
        </div>
        {/* <div>
          <Videos />
        </div> */}
      </>
    );
  }

  if (isLarge && !isExtraLarge) {
    return (
      <>
        <div>
          <Sliders />
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <WhyUs />
        </div>
        <div>
          <Countdown />
        </div>
        <div>
          <CoxSatan />
        </div>
        {/* <div>
          <Videos />
        </div> */}
      </>
    );
  }

};

export default Home;

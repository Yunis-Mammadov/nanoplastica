import { useMediaQuery } from '@mui/material';
import React from 'react';
import SatisLideri from './SatisLideri';
import Slider from './Slider';
import Countdown from "./Countdown"
import FirstCommercial from "./FirstCommercial"
import Setler from './Setler';
import Vidoes from './Videos';
import WhyUs from './WhyUs'; 

const Home = () => {
  const isExtraLarge = useMediaQuery('(min-width:1200px)');
  const isLarge = useMediaQuery('(min-width:270px)');

  // if (isExtraLarge) {
  return (
    <>
      <div>
        <Slider />
      </div>
      <div>
        <SatisLideri />
      </div>
      <div>
        <Countdown />
      </div>
      <div>
        <FirstCommercial />
      </div>
      <div>
        <Setler />
      </div>
      <div>
        <Vidoes />
      </div>
      <div>
        <WhyUs />
      </div>
    </>
  );
  // }

  // if (isLarge && !isExtraLarge) {
  //   return (
  //     <>
  //       <div>
  //         <Slider />
  //       </div>
  //       <div>
  //         <SatisLideri />
  //       </div>
  //       <div>
  //         <Countdown />
  //       </div>
  //     </>
  //   );

  // }

};

export default Home;

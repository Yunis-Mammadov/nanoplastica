import React from 'react';
import styles from './index.module.css';

const Sliders = () => {
  return (
    <div>
      <div className={styles.slider}>
        <div className={styles.slide1}></div>
        <div className={styles.slide2}></div>
        <div className={styles.slide3}></div>
        <div className={styles.slide4}></div>
        <div className={styles.slide5}></div>
      </div>
    </div>
  );
};

export default Sliders;
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const images = [
//   "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1706718472/slider1_hoceyt.jpg",
//   "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1706718472/slider5_mjz8ro.jpg",
//   "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1706718471/slider6_mqtrtb.jpg",
//   "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1706718471/slider4jpg_ep8pfy.jpg",
// ];

// const Sliders = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // 3 saniyede bir kayma
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Container>
//       <SliderWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {images.map((image, index) => (
//           <Slide key={index}>
//             <Image src={image} alt={`Slide ${index}`} />
//           </Slide>
//         ))}
//       </SliderWrapper>
//     </Container>
//   );
// };

// const Container = styled.div`
//   width: 100%;
//   overflow: hidden;
// `;

// const SliderWrapper = styled.div`
//   display: flex;
//   transition: transform 0.5s ease;
// `;

// const Slide = styled.div`
//   flex-shrink: 0;
//   width: 100%;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 40%;

// `;

// export default Sliders;

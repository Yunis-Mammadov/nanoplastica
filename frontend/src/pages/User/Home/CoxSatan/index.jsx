// import React, { useState } from 'react';
// import styles from './index.module.css';
// import { Grid, useMediaQuery } from '@mui/material';

// const Carousel = ({ cards }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const cardsToShow = 4;
//   const isExtraLarge = useMediaQuery('(min-width:1200px)');
//   const isLarge = useMediaQuery('(min-width:500px)');
//   const isSmallScreen = useMediaQuery('(min-width:250px)')


//   const prevSlide = () => {
//     const index = Math.max(startIndex - cardsToShow, 0);
//     setStartIndex(index);
//   };

//   const nextSlide = () => {
//     const index = Math.min(startIndex + cardsToShow, cards.length - cardsToShow);
//     setStartIndex(index);
//   };

//   const visibleCards = cards.slice(startIndex, startIndex + cardsToShow);

//   if (isExtraLarge) {

//     return (
//       <>
//         <h2 style={{ textAlign: "center", marginTop: "70px" }}>Satış Liderləri</h2>
//         <div className={styles.carousel}>
//           <div className={styles.slider}>
//             {visibleCards.map((card, index) => (
//               <div key={index} className={styles.card}>
//                 <img src={card.image} alt={card.title} />
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//               </div>
//             ))}
//           </div>
//           {startIndex > 0 && <button className={styles.prevButton} onClick={prevSlide}>Prev</button>}
//           {startIndex + cardsToShow < cards.length && <button className={styles.nextButton} onClick={nextSlide}>Next</button>}
//         </div>
//       </>
//     );
//   };

//   if (isLarge && !isExtraLarge) {
//     return (
//       <>
//         <h2 style={{ textAlign: "center", marginTop: "70px", color: "red" }}>Satış Liderləri</h2>
//         <div className={styles.carousel}>
//           <Grid container spacing={2} item margin="30px auto" xs={11}>
//             {visibleCards.map((card, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <div className={styles.card}>
//                   <img className={styles.cardImg} src={card.productImgUrl} alt='' />
//                   <h3 className={styles.keratinName}>{card.name}</h3>
//                   <p style={{ fontSize: '14px', color: '#555' }}>{card.description}</p>
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//           {/* <div className={styles.slider}>
//             {visibleCards.map((card, index) => (
//               <div key={index} className={styles.card}>
//                 <img src={card.image} alt={card.title} />
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//               </div>
//             ))}
//           </div> */}
//           {startIndex > 0 && <button className={styles.prevButton} onClick={prevSlide}>Prev</button>}
//           {startIndex + cardsToShow < cards.length && <button className={styles.nextButton} onClick={nextSlide}>Next</button>}
//         </div>
//       </>
//     );
//   };

//   if (isSmallScreen && !isExtraLarge && !isLarge) {
//     return (
//       <>
//         <h2 style={{ textAlign: "center", marginTop: "70px", color: "" }}>Satış Liderləri</h2>
//         <div className={styles.carousel}>
//           <div className={styles.slider}>
//             {visibleCards.map((card, index) => (
//               <div key={index} className={styles.card}>
//                 <img src={card.image} alt={card.title} />
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//               </div>
//             ))}
//           </div>
//           {startIndex > 0 && <button className={styles.prevButton} onClick={prevSlide}>Prev</button>}
//           {startIndex + cardsToShow < cards.length && <button className={styles.nextButton} onClick={nextSlide}>Next</button>}
//         </div>
//       </>
//     );
//   }
// }



// const CoxSatan = () => {
//   const cards = [
//     { title: 'Card 1', description: 'Description for Card 1', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 2', description: 'Description for Card 2', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 3', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 4', description: 'Description for Card 4', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 5', description: 'Description for Card 5', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 6', description: 'Description for Card 6', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 7', description: 'Description for Card 7', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 8', description: 'Description for Card 8', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 9', description: 'Description for Card 9', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 10', description: 'Description for Card 10', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 11', description: 'Description for Card 11', image: 'https://via.placeholder.com/300' },
//     { title: 'Card 12', description: 'Description for Card 12', image: 'https://via.placeholder.com/300' },
//   ];

//   return <Carousel cards={cards} />;
// };

// export default CoxSatan;

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function CoxSatan() {
  return (
    <>
      <div style={{marginTop:"70px"}}>
        <h2 style={{ textAlign: "center" }}>Satış Liderləri</h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697284936/WhatsApp_Image_2023-08-09_at_20.17.02_jlf4ya.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697284603/WhatsApp_Image_2023-08-09_at_20.17.00_ov358h.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696479956/keratin2_bsvzdo.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697285545/WhatsApp_Image_2023-08-09_at_20.17.01_1_ogem5i.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697287066/WhatsApp_Image_2023-08-09_at_20.16.56_gmkcpy.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697287055/WhatsApp_Image_2023-08-09_at_20.16.55_iuuyka.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697285545/WhatsApp_Image_2023-08-09_at_20.17.01_1_ogem5i.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697285347/WhatsApp_Image_2023-08-09_at_20.17.00_1_xwcqqj.jpg" />
          </SwiperSlide>
        </Swiper>
      </div >
    </>
  );
}

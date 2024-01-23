import React, { useState, useEffect } from 'react';
import styles from './index.module.css'; 

const AutoSlider = ({ content }) => {
  const [offset, setOffset] = useState(0);
  const cardWidth = 300; 
  const totalWidth = content.length * cardWidth;
  const delay = 1500; 

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const nextOffset = prevOffset + cardWidth;
        return nextOffset >= totalWidth ? nextOffset - totalWidth : nextOffset;
      });
    }, delay + 1500); 

    return () => clearInterval(interval);
  }, [totalWidth, cardWidth, delay]);

  return (
    <div className={styles['auto-slider']}>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {content.map((card, index) => (
          <div key={index} className={styles.card}>
            {card}
          </div>
        ))}
        {content.map((card, index) => (
          <div key={`clone-${index}`} className={styles.card}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const cards = [
    <div key={1}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={2}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={3}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={4}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={4}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={4}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={4}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={4}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={4}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={4}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,
    <div key={4}><img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696447644/Ozonio_Gold_Enzyme_nqlb8n.jpg" alt="" /></div>,

  ];

  return <AutoSlider content={cards} />;
};

export default Carousel;

import React, { useState } from 'react';
import styles from './index.module.css';

const Carousel = ({ cards }) => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4;

  const prevSlide = () => {
    const index = Math.max(startIndex - cardsToShow, 0);
    setStartIndex(index);
  };

  const nextSlide = () => {
    const index = Math.min(startIndex + cardsToShow, cards.length - cardsToShow);
    setStartIndex(index);
  };

  const visibleCards = cards.slice(startIndex, startIndex + cardsToShow);

  return (
    <>
      <h2 style={{textAlign:"center",marginTop:"70px"}}>Satış Liderləri</h2>
      <div className={styles.carousel}>
        <div className={styles.slider}>
          {visibleCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        {startIndex > 0 && <button className={styles.prevButton} onClick={prevSlide}>Prev</button>}
        {startIndex + cardsToShow < cards.length && <button className={styles.nextButton} onClick={nextSlide}>Next</button>}
      </div>
    </>
  );
};

const CoxSatan = () => {
  const cards = [
    { title: 'Card 1', description: 'Description for Card 1', image: 'https://via.placeholder.com/300' },
    { title: 'Card 2', description: 'Description for Card 2', image: 'https://via.placeholder.com/300' },
    { title: 'Card 3', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 4', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 5', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 6', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 7', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 8', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 9', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 10', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 11', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
    { title: 'Card 12', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
  ];

  return <Carousel cards={cards} />;
};

export default CoxSatan;

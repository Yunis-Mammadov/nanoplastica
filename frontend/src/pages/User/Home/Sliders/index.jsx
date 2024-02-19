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

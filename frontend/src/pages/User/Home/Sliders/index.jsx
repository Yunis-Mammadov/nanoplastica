import React from 'react';
import styles from './index.module.css';

const Sliders = () => {
  return (
    <div style={{display:"flex",width:"100%"}}>
      <div className={styles.slider}>
        <div className={styles.slide1}></div>
        <div className={styles.slide2}></div>
        <div className={styles.slide3}></div>
        <div className={styles.slide4}></div>
        <div className={styles.slide5}></div>
      </div>
      {/* <div className={styles.countdownContainer}>
      </div> */}
    </div>
  );
};

export default Sliders;

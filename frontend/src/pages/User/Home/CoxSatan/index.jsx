import React, { useState, useEffect } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAllSacQulluq } from '../../../../api/request';
import styles from "./index.module.css"
import Swal from 'sweetalert2';
import { useCart } from '../../../../context/CartContext';
import { ChevronLeft, ChevronRight } from '@mui/icons-material'; // Material-UI ikonları

export default function CoxSatan() {
  const [sacqulluq, setSacqulluq] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [startIndexMobile, setStartIndexMobile] = useState(0);
  const [endIndexMobile, setEndIndexMobile] = useState(1);
  const { addToCart } = useCart();
  const isExtraLarge = useMediaQuery('(min-width:1200px)');
  const isLarge = useMediaQuery('(min-width:270px)');

  useEffect(() => {
    getAllSacQulluq().then(data => {
      setSacqulluq(data);
    });
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log(item);
    Swal.fire({
      icon: 'success',
      title: 'Məhsul səbətə əlavə edildi!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  const goToNextItems = () => {
    if (endIndex < sacqulluq.length - 1) {
      setStartIndex(prevStartIndex => prevStartIndex + 4);
      setEndIndex(prevEndIndex => prevEndIndex + 4);
    }
  }

  const goToPreviousItems = () => {
    if (startIndex > 0) {
      setStartIndex(prevStartIndex => prevStartIndex - 4);
      setEndIndex(prevEndIndex => prevEndIndex - 4);
    }
  }

  const goToNextItemsMobile = () => {
    if (endIndexMobile < sacqulluq.length - 1) {
      setStartIndexMobile(prevStartIndex => prevStartIndex + 2);
      setEndIndexMobile(prevEndIndex => prevEndIndex + 2);
    }
  }

  const goToPreviousItemsMobile = () => {
    if (startIndexMobile > 0) {
      setStartIndexMobile(prevStartIndex => prevStartIndex - 2);
      setEndIndexMobile(prevEndIndex => prevEndIndex - 2);
    }
  }

  if (isExtraLarge) {
    return (
      <>
        <h4 style={{ marginLeft: "100px" }}>Satış Liderləri</h4>
        {sacqulluq && sacqulluq.length > 0 && (
          <div className={styles.sliderContainer}>
            <button onClick={goToPreviousItems} className={styles.iconButton}><ChevronLeft style={{ fontSize: 50 }} /></button>
            <div className={styles.cardContainer}>
              {sacqulluq.slice(startIndex, endIndex + 1).map(item => (
                <div className={styles.card} key={item._id}>
                  <Link style={{ textDecoration: "none" }} to={`/sacqulluq/${item._id}`}>
                    <img className={styles.cardImg} src={item.productImgUrl} alt='' />
                  </Link>
                  <h3 className={styles.keratinName}>{item.name}</h3>
                  <p style={{ fontSize: '14px', color: '#555' }}>{item.description}</p>
                  <div className={styles.detailWhislistButton}>
                    <p onClick={() => handleAddToCart(item)}>Səbətə Əlavə Et</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={goToNextItems} className={styles.iconButton}><ChevronRight style={{ fontSize: 50 }} /></button>
          </div>
        )}
        {!sacqulluq || sacqulluq.length === 0 && (
          <Typography>Məhsul Tapılmadı...</Typography>
        )}
      </>
    );
  }

  if (isLarge && !isExtraLarge) {
    return (
      <>
        <h4 style={{ marginLeft: "50px", marginTop:"50px" }}>Satış Liderləri</h4>
        {sacqulluq && sacqulluq.length > 0 && (
          <div className={styles.sliderContainerMobile}>
            <button onClick={goToPreviousItemsMobile} className={styles.iconButtonMobile}><ChevronLeft style={{ fontSize: 25 }} /></button>
            <div className={styles.cardContainerMobile}>
              {sacqulluq.slice(startIndexMobile, endIndexMobile + 1).map(item => (
                <div className={styles.cardMobile} key={item._id}>
                  <Link style={{ textDecoration: "none" }} to={`/sacqulluq/${item._id}`}>
                    <img className={styles.cardImgMobile} src={item.productImgUrl} alt='' />
                  </Link>
                  <h3 className={styles.keratinNameMobile}>{item.name}</h3>
                  <p className={styles.descCoxSatan}>{item.description}</p>
                  <div className={styles.detailWhislistButtonMobile}>
                    <p onClick={() => handleAddToCart(item)}>Səbətə Əlavə Et</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={goToNextItemsMobile} className={styles.iconButton}><ChevronRight style={{ fontSize: 25 }} /></button>
          </div>
        )}
        {!sacqulluq || sacqulluq.length === 0 && (
          <Typography>Məhsul Tapılmadı...</Typography>
        )}
      </>
    );
  }
}

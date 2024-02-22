import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getKeratinById } from '../../../api/request';
import { useCart } from '../../../context/CartContext';
import styles from './index.module.css';
import Swal from 'sweetalert2';
import { useMediaQuery } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const KeratinDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [keratin, setKeratin] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const isExtraLarge = useMediaQuery('(min-width:1200px)');
  const isMobile = useMediaQuery('(min-width:270px)');

  useEffect(() => {
    getKeratinById(id)
      .then((data) => {
        setKeratin(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleAddToCart = () => {
    const item = {
      id: keratin._id,
      img: keratin.productImgUrl,
      name: keratin.name,
      brand: keratin.brand,
      quantity: quantity,
    };

    console.log(keratin._id);
    addToCart(item);
    Swal.fire({
      icon: 'success',
      title: 'Məhsul səbətə əlavə edildi!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (isExtraLarge) {
    return (
      <div>
        {keratin ? (
          <div className={styles.parentDetailKeratin}>
            <div className={styles.parentProductImg}>
              <img src={keratin.productImgUrl} alt={keratin.name} />
            </div>
            <div className={styles.keratinDetailInfo}>
              <div className={styles.firstDetail}>
                <p>{keratin.brand}</p>
                <h2>{keratin.name}</h2>
                <p>{keratin.description}</p>
                <p className={styles.productDetails}>{keratin.productDetails}</p>
              </div>
              <div className={styles.inputParent}>
                <h3>Sayını seçin:</h3>
                <div style={{ display: 'flex', gap: '85px' }}>
                  <input
                    type='number'
                    id='sayi'
                    value={quantity}
                    min='1'
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                  <div className={styles.detailWhislistButton}>
                    <p onClick={handleAddToCart}>Səbətə Əlavə Et</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

  if (isMobile && !isExtraLarge) {
    return (
      <>
        {keratin ? (
          <div>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img style={{ width: "100%", height: "100%" }} src={keratin.productImgUrl} alt={keratin.name} />
                </div>
                <div className={styles.flipCardBack}>
                  <div className={styles.mobileFirstDetail}>
                    {/* <p style={{fontSize:"10px"}}></p> */}
                    <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias minima id quasi explicabo nihil. Vitae, consequatur alias! Iure, quos fugit ducimus eligendi ipsum quod quidem. Temporibus aliquam maxime repudiandae.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className={styles.mobileBrandName}>
              <p>{keratin.brand}</p>
              <h4>{keratin.name}</h4>
            </div>
            <div className={styles.mobileInputParent}>
              <div>
                <h3>Sayını seçin:</h3>
                <div style={{ display: "flex", gap: "85px" }}>
                  <input
                    type="number"
                    id="sayi"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <div className={styles.detailWhislistButton}>
                <p onClick={handleAddToCart}>Səbətə Əlavə Et</p>
              </div>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "90%",
                margin: "50px 0"
              }}>
                <Accordion defaultExpanded>
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Məhsul Detalları</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {keratin.productDetails}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  }


};

export default KeratinDetailPage;

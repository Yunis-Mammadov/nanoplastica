import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getKeratinById } from '../../../api/request';
import { useCart } from '../../../context/CartContext';
import styles from './index.module.css';
import Swal from 'sweetalert2';
import { useMediaQuery } from '@mui/material';

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
        <div>
          {keratin ? (
            <div className={styles.mobileParentDetailKeratin}>
              <div className={styles.mobileParentProductImg}>
                <img src={keratin.productImgUrl} alt={keratin.name} />
              </div>
              <div className={styles.mobileKeratinDetailInfo}>
                <div className={styles.mobileFirstDetail}>
                  <p>{keratin.brand}</p>
                  <h2>{keratin.name}</h2>
                  <p>{keratin.description}</p>
                  <p className={styles.productDetails}>{keratin.productDetails}</p>
                </div>
                <div className={styles.mobileInputParent}>
                  <h3>Sayını seçin:</h3>
                  <div style={{ display: "flex", gap: "85px" }}>
                    <input
                      type="number"
                      id="sayi"
                      value={quantity}
                      min="1"
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
      </>
    );
  }


};

export default KeratinDetailPage;

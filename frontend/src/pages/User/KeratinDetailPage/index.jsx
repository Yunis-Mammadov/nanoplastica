import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getKeratinById } from '../../../api/request';
import { useCart } from '../../../context/CartContext';
import styles from './index.module.css';
import Swal from 'sweetalert2';

const KeratinDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [keratin, setKeratin] = useState(null);
  const [quantity, setQuantity] = useState(1);

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
      id: keratin.id,
      img: keratin.productImgUrl,
      name: keratin.name,
      brand: keratin.brand,
      quantity: quantity,
    };

    addToCart(item);
    console.log(item);
    Swal.fire({
      icon: 'success',
      title: 'Məhsul səbətə əlavə edildi!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
};

export default KeratinDetailPage;

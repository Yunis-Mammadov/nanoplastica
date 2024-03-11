import React, { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './modal.module.css';
import { useCart } from '../../../../context/CartContext';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ handleClose, keratins }) => {

    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();



    const handleAddToCart = (item) => {
        addToCart(item);
        Swal.fire({
            icon: 'success',
            title: 'Məhsul səbətə əlavə edildi!',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.imgModalDetail}>
                    <div>
                        <img src={keratins.productImgUrl} alt='' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                        <div className={styles.textDetail}>
                            <h5>{keratins.name}</h5>
                            <p>{keratins.description}</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <input
                                type='number'
                                id='sayi'
                                value={quantity}
                                min='1'
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                style={{ width: "15%", height: "5vh", padding: "10px" }}
                            />
                            <div className={styles.detailWhislistButton}>
                                <p onClick={() => handleAddToCart({
                                    id: keratins._id,
                                    img: keratins.productImgUrl,
                                    name: keratins.name,
                                    brand: keratins.brand,
                                    quantity: quantity,
                                })}>Səbətə Əlavə Et</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button style={{ backgroundColor: "transparent" }} className={styles.closeButton} onClick={handleClose}><CloseIcon className={styles.closeButtonIcon} style={{ fontSize: "28px" }} /></button>
            </div>
        </div>
    );
};

export default Modal;

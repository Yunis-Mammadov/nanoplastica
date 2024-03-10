import React, { useState, useEffect } from 'react';
import { getAllKeratin, getAllSacQulluq } from '../../../../api/request';
import { Link } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';
import BeatLoader from "react-spinners/BeatLoader";
import Swal from 'sweetalert2';
import styles from './index.module.css';
import Modal from '../Modal/index';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const SatisLideri = () => {
    const [keratin, setKeratin] = useState([]);
    const [sacqulluq, setSacqulluq] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedSac, setSelectedSac] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        getAllKeratin()
            .then(data => {
                setKeratin(data);
            })
            .finally(() => setLoading(false));
        getAllSacQulluq()
            .then(data => {
                setSacqulluq(data);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleAddToCart = (item) => {
        addToCart(item);
        Swal.fire({
            icon: 'success',
            title: 'Məhsul səbətə əlavə edildi!',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleModalOpen = (sac) => {
        setSelectedSac(sac)
        setLoading(true);
        setSelectedSac(sac);
        setLoading(false);
        document.body.style.overflow = 'hidden';
    }

    const handleModalClose = () => {
        setSelectedSac(null);
        document.body.style.overflow = 'auto';
    };


    if (loading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30vh",
                color: "red",
            }}>
                <BeatLoader color="orange" />
            </div>
        );
    }

    return (
        <div>
            <h4 className={styles.satisTag}>Satış Liderləri</h4>
            <div className={styles.grid}>
                {sacqulluq.map(sac => (
                    <div className={styles.card} key={sac._id}>
                        <Link style={{ textDecoration: "none" }} to={`/sacqulluq/${sac._id}`}>
                            <img className={styles.cardImg} src={sac.productImgUrl} alt='' />
                            <h3 className={styles.keratinName}>{sac.name}</h3>
                            <p style={{ fontSize: '14px', color: '#555' }}>{sac.description}</p>
                        </Link>
                        <div className={styles.detailWhislistButton}>
                            <button className={styles.basketBtn} onClick={() => handleAddToCart({
                                id: sac._id,
                                img: sac.productImgUrl,
                                name: sac.name,
                                brand: sac.brand,
                                quantity: quantity,
                            })}>Səbətə Əlavə Et</button>
                            <button className={styles.eyeBtn} onClick={() => handleModalOpen(sac)}>
                                <RemoveRedEyeIcon />
                            </button>
                        </div>
                    </div>
                ))}

            </div>
            {selectedSac && (
                <Modal handleClose={handleModalClose} sac={selectedSac} />
            )}
        </div>
    );
};

export default SatisLideri;

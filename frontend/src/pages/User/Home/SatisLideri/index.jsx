import React, { useState, useEffect } from 'react';
import { getAllKeratin } from '../../../../api/request';
import { Link } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';
import BeatLoader from "react-spinners/BeatLoader";
import Swal from 'sweetalert2';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useTranslation } from 'react-i18next';
import "../../../../components/User/UserNavbar/i18n"
import Modal from '../Modal/index';
import styles from './index.module.css';

const SatisLideri = () => {
    const [keratin, setKeratin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedKeratin, setSelectedKeratin] = useState(null);
    const { addToCart } = useCart();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('az'); 


    useEffect(() => {
        getAllKeratin()
            .then(data => {
                setKeratin(data);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(i18n.language);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);



    const handleAddToCart = (item) => {
        addToCart(item);
        Swal.fire({
            icon: 'success',
            title: 'Məhsul səbətə əlavə edildi!',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const handleModalOpen = (keratin) => {
        setSelectedKeratin(keratin)
        setLoading(true);
        setSelectedKeratin(keratin);
        setLoading(false);
        document.body.style.overflow = 'hidden';
    }

    const handleModalClose = () => {
        setSelectedKeratin(null);
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
            <h4 className={styles.satisTag}>{t('topseller')}</h4>
            <div className={styles.grid}>
                {keratin.map(keratins => (
                    <div className={styles.card} key={keratins._id}>
                        <Link style={{ textDecoration: "none" }} to={`/keratin/${keratins._id}`}>
                            <img className={styles.cardImg} src={keratins.productImgUrl} alt='' />
                            <h3 className={styles.keratinName}>{keratins.name}</h3>
                        </Link>
                        <div className={styles.detailWhislistButton}>
                            <button className={styles.basketBtn} onClick={() => handleAddToCart({
                                id: keratins._id,
                                img: keratins.productImgUrl,
                                name: keratins.name,
                                brand: keratins.brand,
                                quantity: quantity,
                            })}>{t('basket')}</button>
                            <button className={styles.eyeBtn} onClick={() => handleModalOpen(keratins)}>
                                <RemoveRedEyeIcon sx={{ fontSize: "30px" }} />
                            </button>
                        </div>
                    </div>
                ))}

            </div>
            {selectedKeratin && (
                <Modal handleClose={handleModalClose} keratins={selectedKeratin} />
            )}
        </div>
    );
};

export default SatisLideri;

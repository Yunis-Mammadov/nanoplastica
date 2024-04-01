import React, { useState, useEffect } from 'react';
import styles from "./index.module.css"
import { getAllKeratin } from '../../../../api/request';
import { useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../../../context/CartContext';
import Swal from 'sweetalert2';

const Countdown = () => {
    const calculateTimeLeft = () => {
        let difference = +new Date('2024-03-24');
        let currentTime = +new Date();
        let timeLeft = difference - currentTime;
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [time, setTime] = useState(calculateTimeLeft());
    const [keratin, setKeratin] = useState([])
    const { addToCart } = useCart();
    const isExtraLarge = useMediaQuery('(min-width:600px)');
    const isLarge = useMediaQuery('(max-width: 600px)')
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('az');


    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    useEffect(() => {
        getAllKeratin().then(data => {
            const bestSellers = data.filter(item => item.bestSeller === "true");
            setKeratin(bestSellers);
        }).catch(error => {
            console.error("Keratin verileri getirilirken bir hata oluştu:", error);
        });
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

    const handleAddToCart = () => {
        const item = {
            id: keratin.id,
            img: keratin.productImgUrl,
            name: keratin.name,
            brand: keratin.brand,
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
        <div className={styles.parentCountdown}>
            <div className={styles.topCount}>
                <h3 className={styles.weeklyText}>{t('topseller')}</h3>
                <div className={styles.dayCount}>
                    <p className={styles.time}>{time.days.toString().padStart(2, '0')} <br />{t("day")}</p>
                    <p className={styles.time}>{time.hours.toString().padStart(2, '0')} <br /> {t("hour")}</p>
                    <p className={styles.time}>{time.minutes.toString().padStart(2, '0')} <br /> {t("minute")}</p>
                    <p className={styles.time}>{time.seconds.toString().padStart(2, '0')} <br /> {t("second")}</p>
                </div>
            </div>
            <div className={styles.mainCount}>
                {keratin && keratin.length > 0 && keratin.map(item => (
                    item.bestSeller === "true" ? (
                        <div key={item._id} className={styles.productContainer}>
                            <div className={isLarge ? styles.imageContainerLarge : styles.imageContainer}>
                                <img src={item.productImgUrl} alt={item.name} />
                            </div>
                            <div className={styles.infoContainer}>
                                <h6>{item.name}</h6>
                                <p>{item.description}</p>
                                <div className={styles.detailWhislistButton}>
                                    <p onClick={handleAddToCart}>{t("basket")}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div key={item._id} className={styles.productContainer}>
                            <div className={styles.imageContainer}>
                                <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697288553/WhatsApp_Image_2023-08-09_at_20.17.03_hlnsjw.jpg" alt="" />
                            </div>
                            <div className={styles.infoContainer}>
                                <p>NAME</p>
                                <div className={styles.detailWhislistButton}>
                                    <button onClick={handleAddToCart}>Səbətə Əlavə Et</button>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}


export default Countdown;

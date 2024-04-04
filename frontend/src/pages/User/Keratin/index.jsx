import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import Swal from 'sweetalert2';
import { getAllKeratin } from '../../../api/request';
import { useTranslation } from 'react-i18next';
import styles from './index.module.css';
import { useCart } from '../../../context/CartContext';
import { Grid } from '@mui/material';


const Keratin = () => {

    const [keratin, setKeratin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [language, setLanguage] = useState('az');
    const { t, i18n } = useTranslation();

    useEffect(() => {
        getAllKeratin()
            .then(data => {
                setKeratin(data);
                setFilteredItems(data);
            })
            .catch(error => console.error(error))
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

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(i18n.language);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === 'BIOTOP Ozonio') {
            const filtered = keratin.filter(item => item.brand === 'Ozonio');
            setFilteredItems(filtered);
        } else if (event.target.value === 'ReviveHairPRO') {
            const filtered = keratin.filter(item => item.brand === 'Revive Hair Pro');
            setFilteredItems(filtered);
        } else {
            setFilteredItems(keratin);
        }
    };

    return (
        <div className={styles.parentKeratin}>
            <div className={styles.accordion}>
                <select name="cars" id="cars" onChange={handleSelectChange}>
                    <option className={styles.keratinOption} value="">{t("all")}</option>
                    <option className={styles.keratinOption} value="BIOTOP Ozonio">Biotop Ozonio</option>
                    <option className={styles.keratinOption} value="ReviveHairPRO">ReviveHairPro</option>
                </select>
            </div>
            <Grid justifyContent="center" container rowSpacing={6} spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} direction="row">
                {filteredItems.map(keratin => (
                    <Grid item lg={4} key={keratin._id}>
                        <div className={styles.card} >
                            <Link to={`${keratin._id}`}>
                                <img src={keratin.productImgUrl} alt='' />
                                <h3 className={styles.keratinName}>{keratin.name}</h3>
                            </Link>
                            <div>
                                <button onClick={() => handleAddToCart({
                                    id: keratin._id,
                                    img: keratin.productImgUrl,
                                    name: keratin.name,
                                    brand: keratin.brand,
                                    quantity: quantity,
                                })}>{t("basket")}</button>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Keratin;

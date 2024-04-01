import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getAllKeratin } from '../../../../api/request';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../../../context/CartContext';
import styles from "./index.module.css";

const Ozonio = () => {
    const [keratin, setKeratin] = useState([]);
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
                const ozonioKeratin = data.filter(keratin => keratin.brand === "Ozonio");
                setFilteredItems(ozonioKeratin);
            })
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

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(i18n.language);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    return (
        <div className={styles.parentKeratin}>
            <div className={styles.accordion}>
                <select name="cars" id="cars" onChange={handleSelectChange}>
                    <option className={styles.keratinOption} value="">{t("all")}</option>
                    <option className={styles.keratinOption} value="BIOTOP Ozonio">Biotop Ozonio</option>
                    <option className={styles.keratinOption} value="ReviveHairPRO">ReviveHairPro</option>
                </select>
            </div>
            <div className={styles.grid}>
                {filteredItems.map(keratin => (
                    <div className={styles.card} key={keratin._id}>
                        <Link to={`/keratin/${keratin._id}`}>
                            <img className={styles.cardImg} src={keratin.productImgUrl} alt='' />
                            <h3 className={styles.keratinName}>{keratin.name}</h3>
                        </Link>
                        <div className={styles.detailWhislistButton}>
                            <button className={styles.basketBtn} onClick={() => handleAddToCart({
                                id: keratin._id,
                                img: keratin.productImgUrl,
                                name: keratin.name,
                                brand: keratin.brand,
                                quantity: quantity,
                            })}>{t("basket")}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ozonio;

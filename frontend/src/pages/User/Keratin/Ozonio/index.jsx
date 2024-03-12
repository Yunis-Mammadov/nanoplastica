import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./index.module.css";
import Swal from 'sweetalert2';
import { getAllKeratin } from '../../../../api/request';
import { useCart } from '../../../../context/CartContext';

const Ozonio = () => {
    const [keratin, setKeratin] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();



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

    return (
        <div className={styles.parentKeratin}>
            <div className={styles.accordion}>
                <select name="cars" id="cars" onChange={handleSelectChange}>
                    <option className={styles.keratinOption} value="">Hamısı</option>
                    <option className={styles.keratinOption} value="BIOTOP Ozonio">Biotop Ozonio</option>
                    <option className={styles.keratinOption} value="ReviveHairPRO">ReviveHairPro</option>
                </select>
            </div>
            <div className={styles.grid}>
                {filteredItems.map(keratin => (
                    <div className={styles.card} key={keratin._id}>
                        <Link to={`${keratin._id}`}>
                            <img className={styles.cardImg} src={keratin.productImgUrl} alt='' />
                            <h3 className={styles.keratinName}>{keratin.name}</h3>
                            {/* <p style={{ fontSize: '14px', color: '#555' }}>{keratin.description}</p> */}
                        </Link>
                        <div className={styles.detailWhislistButton}>
                            <button className={styles.basketBtn} onClick={() => handleAddToCart({
                                id: keratin._id,
                                img: keratin.productImgUrl,
                                name: keratin.name,
                                brand: keratin.brand,
                                quantity: quantity,
                            })}>Səbətə Əlavə Et</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Ozonio;

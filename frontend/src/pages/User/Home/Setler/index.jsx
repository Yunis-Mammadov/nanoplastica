import React, { useState, useEffect } from 'react';
import { getAllKeratin, getAllSacQulluq, getAllSetler } from '../../../../api/request';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';
import Swal from 'sweetalert2';
import styles from './index.module.css';

const Setler = () => {
    const [keratin, setKeratin] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();



    useEffect(() => {
        getAllSetler()
            .then(data => {
                setKeratin(data);
                setFilteredItems(data);
            })
    }, []);

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

    return (
        <>
            <div style={{marginTop:'60px'}}>
                <h3 className={styles.setlerTag}>Setlər</h3>
                <Grid container spacing={2} item margin={"0px auto"} xs={11}>
                    {keratin.length > 0 ? filteredItems.map((keratins) => (
                        <Grid item xs={12} sm={6} md={4} key={keratins._id}>
                            <Link style={{ textDecoration: "none" }} to={`/keratin/${keratins._id}`}>
                                <div className={styles.card}>
                                    <img className={styles.cardImg} src={keratins.productImgUrl} alt='' />
                                    <h3 className={styles.keratinName}>{keratins.name}</h3>
                                    <p style={{ fontSize: '14px', color: '#555' }}>{keratins.description}</p>
                                </div>
                            </Link>
                        </Grid>
                    )) : (
                        <></>
                    )}
                </Grid>
            </div>
        </>
    )
}

export default Setler;

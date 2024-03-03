import React, { useState, useEffect } from 'react';
import { getAllKeratin, getAllSacQulluq } from '../../../../api/request';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';
import Swal from 'sweetalert2';
import styles from './index.module.css';

const SatisLideri = () => {
    const [keratin, setKeratin] = useState([]);
    const [sacqulluq, setSacqulluq] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();



    useEffect(() => {
        getAllKeratin()
            .then(data => {
                setKeratin(data);
            })
    }, []);

    useEffect(() => {
        getAllSacQulluq()
            .then(data => {
                setSacqulluq(data);
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
            <div>
                <Grid container width={"80%"} margin={"0 auto"}>
                    {sacqulluq.map(keratins => (
                        <Grid item xs={12} sm={6} md={4} key={keratins._id}>
                            <div className={styles.card}>
                                <Link to={"/keratin"}>
                                    <img className={styles.cardImg} src={keratins.productImgUrl} alt='' />
                                    <h3 className={styles.keratinName}>{keratins.name}</h3>
                                    <p style={{ fontSize: '14px', color: '#555' }}>{keratins.description}</p>
                                </Link>
                                <div className={styles.detailWhislistButton}>
                                    <button onClick={handleAddToCart}>Səbətə Əlavə Et</button>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )
}

export default SatisLideri;

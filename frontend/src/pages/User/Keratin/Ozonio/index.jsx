import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./index.module.css";
import { getAllKeratin } from '../../../../api/request';

const Ozonio = () => {
    const [allKeratin, setAllKeratin] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        getAllKeratin()
            .then(data => {
                setAllKeratin(data);
                // Filtreleme işlemi burada yapılıyor
                const ozonioKeratin = data.filter(keratin => keratin.brand === "Ozonio");
                setFilteredItems(ozonioKeratin);
            })
    }, []);

    return (
        <>
            <div className={styles.parentColumn2}>
                <Grid container spacing={2} item margin={"30px auto"} xs={11}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((keratins) => (
                            <Grid item xs={12} sm={6} md={4} key={keratins._id}>
                                <Link style={{ textDecoration: "none" }} to={`/keratin/${keratins._id}`}>
                                    <div className={styles.card}>
                                        <img className={styles.cardImg} src={keratins.productImgUrl} alt='' />
                                        <h3 className={styles.keratinName}>{keratins.name}</h3>
                                        <p style={{ fontSize: '14px', color: '#555' }}>{keratins.description}</p>
                                    </div>
                                </Link>
                            </Grid>
                        ))
                    ) : (
                        <Typography style={{ marginLeft: '20px' }}>Məhsul Tapılmadı...</Typography>
                    )}
                </Grid>
            </div>
        </>
    )
}

export default Ozonio;

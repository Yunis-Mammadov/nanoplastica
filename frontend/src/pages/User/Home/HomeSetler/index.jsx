import { Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { getAllSetler } from '../../../../api/request';
import { Link } from 'react-router-dom';

const Setler = () => {

    const [setler, setSetler] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);


    useEffect(() => {
        getAllSetler().then(data => {
            setSetler(data);
            setFilteredItems(data);
        });
    }, [])


    return (
        <div style={{marginTop:"100px"}}>
            <h2 style={{textAlign:"center"}}>Setlər</h2>
            <div className={styles.parentColumn2}>
                <Grid container spacing={2} item margin={"30px auto"} xs={11}>
                    {setler.length > 0 ? filteredItems.map((setlers) => (
                        <Grid item xs={12} sm={6} md={4} key={setlers._id}>
                            <Link style={{ textDecoration: "none" }} to={`/keratin/${setlers._id}`}>
                                <div className={styles.card}>
                                    <img className={styles.cardImg} src={setlers.productImgUrl} alt='' />
                                    <h3 className={styles.keratinName}>{setlers.name}</h3>
                                    <p style={{ fontSize: '14px', color: '#555' }}>{setlers.description}</p>
                                </div>
                            </Link>
                        </Grid>
                    )) : (
                        <Typography>Məhsul Tapılmadı...</Typography>
                    )}
                </Grid>
            </div>
        </div>
    )
}

export default Setler

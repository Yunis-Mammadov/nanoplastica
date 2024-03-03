import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./index.module.css";
import { getAllSacQulluq } from '../../../../api/request';

const Kondisioner = () => {
    const [sacqulluq, setAllSacQulluq] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        getAllSacQulluq()
            .then(data => {
                setAllSacQulluq(data);
                const kondisionerFiltered = data.filter(sacqulluq => sacqulluq.type === "Kondisioner");
                setFilteredItems(kondisionerFiltered);
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

export default Kondisioner;

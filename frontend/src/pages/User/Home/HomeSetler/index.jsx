import React, { useEffect, useState } from 'react';
import { getAllSetler } from '../../../../api/request';
import styles from './index.module.css';
import Countdown from '../Countdown';

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
        <div style={{ marginTop: "100px" }}>
            <a className={styles.linkSetler} href="/setler">
                <h2 style={{ width: "100%", textAlign: "center" }}>Setlər</h2>
            </a>
            <div className={styles.parentColumn2}>
                <div className={styles.homeSetlerParent}>
                    <div className={styles.card}>
                        <img className={styles.cardImg} src="/SetImg/setrevive3.jpg" alt='' />
                    </div>
                    <div className={styles.card}>
                        <img className={styles.cardImg} src="/SetImg/setrevive2.jpg" alt='' />
                    </div>
                    <div className={styles.card}>
                        <img className={styles.cardImg} src="/SetImg/setrevive1.jpg" alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setler

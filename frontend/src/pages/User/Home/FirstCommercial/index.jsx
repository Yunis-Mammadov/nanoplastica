import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { getAllImgs } from '../../../../api/request';

const FirstCommercial = () => {
    const [firstImage, setFirstImage] = useState(null);

    useEffect(() => {
        getAllImgs()
            .then(data => {
                const firstImg = data.length > 0 ? data[1].ComImg : null;
                setFirstImage(firstImg);
            })
    }, []);

    return (
        <>
            <div className={styles.dayCommerParent} >
                <div className={styles.dayCommer} style={{
                    backgroundImage: `url(${firstImage})`,
                }}>
                </div>
            </div>
        </>
    )
}

export default FirstCommercial;

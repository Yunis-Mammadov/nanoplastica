import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../../context/CartContext'; 
import Swal from 'sweetalert2';
import { getSacQulluqById } from '../../../api/request';
import styles from "./index.module.css";


const SacQulluqDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart(); // CartContext'ten addToCart fonksiyonunu alın
    const [sacqulluq, setSacqulluq] = useState(null);
    const [quantity, setQuantity] = useState(1)
    const isExtraLarge = useMediaQuery('(min-width:1000px)');
    const isMobile = useMediaQuery('(min-width:340px)');


    useEffect(() => {
        getSacQulluqById(id)
            .then((data) => {
                console.log(data);
                setSacqulluq(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);


    const addToLocalStorage = () => {
        const item = {
            id: sacqulluq.id,
            img: sacqulluq.productImgUrl,
            name: sacqulluq.name,
            brand: sacqulluq.brand,
            quantity: quantity,
        };

        let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItemIndex = existingCart.findIndex((cartItem) => cartItem.name === item.name);

        if (existingItemIndex !== -1) {
            existingCart[existingItemIndex].quantity += quantity;
        } else {
            existingCart.push(item);
        }

        const uniqueItems = existingCart.reduce((acc, current) => {
            const x = acc.find(item => item.name === current.name);
            if (!x) {
                return acc.concat([current]);
            } else {
                x.quantity += current.quantity;
                return acc;
            }
        }, []);

        localStorage.setItem("cart", JSON.stringify(uniqueItems));

        addToCart(item); // CartContext'teki addToCart fonksiyonunu çağırın


        Swal.fire({
            icon: 'success',
            title: 'Ürün sepete eklendi!',
            showConfirmButton: false,
            timer: 1500
        });
    };
    if (isExtraLarge) {
        return (
            <>
                <div>
                    {sacqulluq ? (
                        <div className={styles.parentDetailKeratin}>
                            <div className={styles.parentProductImg}>
                                <img src={sacqulluq.productImgUrl} alt={sacqulluq.name} />
                            </div>
                            <div className={styles.keratinDetailInfo}>
                                <div className={styles.firstDetail}>
                                    <p>{sacqulluq.brand}</p>
                                    <h2>{sacqulluq.name}</h2>
                                    <p>{sacqulluq.description}</p>
                                    <p className={styles.productDetails}>{sacqulluq.productDetails}</p>
                                </div>
                                <div className={styles.inputParent}>
                                    <h3>Sayını seçin:</h3>
                                    <div style={{ display: "flex", gap: "85px" }}>
                                        <input
                                            type="number"
                                            id="sayi"
                                            value={quantity}
                                            min="1"
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        />
                                        <div className={styles.detailWhislistButton}>
                                            <p onClick={addToLocalStorage}>Səbətə Əlavə Et</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </>
        );
    }

    if (isMobile && !isExtraLarge) {
        return (
            <>
                <div>
                    {sacqulluq ? (
                        <div className={styles.mobileParentDetailKeratin}>
                            <div className={styles.mobileParentProductImg}>
                                <img src={sacqulluq.productImgUrl} alt={sacqulluq.name} />
                            </div>
                            <div className={styles.mobileKeratinDetailInfo}>
                                <div className={styles.mobileFirstDetail}>
                                    <p>{sacqulluq.brand}</p>
                                    <h2>{sacqulluq.name}</h2>
                                    <p>{sacqulluq.description}</p>
                                    <p className={styles.productDetails}>{sacqulluq.productDetails}</p>
                                </div>
                                <div className={styles.mobileInputParent}>
                                    <h3>Sayını seçin:</h3>
                                    <div style={{ display: "flex", gap: "85px" }}>
                                        <input
                                            type="number"
                                            id="sayi"
                                            value={quantity}
                                            min="1"
                                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                                        />
                                        <div className={styles.detailWhislistButton}>
                                            <p onClick={addToLocalStorage}>Səbətə Əlavə Et</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </>
        );
    }

};

export default SacQulluqDetail;

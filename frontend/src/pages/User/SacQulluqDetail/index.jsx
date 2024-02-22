import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import Swal from 'sweetalert2';
import { getSacQulluqById } from '../../../api/request';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from "./index.module.css";



const SacQulluqDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [sacqulluq, setSacqulluq] = useState(null);
    const [quantity, setQuantity] = useState(1)
    const isExtraLarge = useMediaQuery('(min-width:1200px)');
    const isMobile = useMediaQuery('(min-width:270px)');


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
            id: sacqulluq._id,
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

        addToCart(item);


        Swal.fire({
            icon: 'success',
            title: 'Məhsul səbətə əlavə edildi!',
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
                {sacqulluq ? (
                    <div>
                        <div className={styles.flipCard}>
                            <div className={styles.flipCardInner}>
                                <div className={styles.flipCardFront}>
                                    <img style={{ width: "100%", height: "100%" }} src={sacqulluq.productImgUrl} alt={sacqulluq.name} />
                                </div>
                                <div className={styles.flipCardBack}>
                                    <div className={styles.mobileFirstDetail}>
                                        <p style={{ color: "black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium alias minima id quasi explicabo nihil. Vitae, consequatur alias! Iure, quos fugit ducimus eligendi ipsum quod quidem. Temporibus aliquam maxime repudiandae.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.mobileBrandName}>
                            <p>{sacqulluq.brand}</p>
                            <h4>{sacqulluq.name}</h4>
                        </div>
                        <div className={styles.mobileInputParent}>
                            <div>
                                <h3>Sayını seçin:</h3>
                                <div style={{ display: "flex", gap: "85px" }}>
                                    <input
                                        type="number"
                                        id="sayi"
                                        value={quantity}
                                        min="1"
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    />
                                </div>
                            </div>
                            <div className={styles.detailWhislistButton}>
                                <p onClick={addToLocalStorage}>Səbətə Əlavə Et</p>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "90%",
                                margin: "50px 0"
                            }}>
                                <Accordion defaultExpanded>
                                    <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                                        <Typography>Məhsul Detalları</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {sacqulluq.productDetails}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </>
        );
    }

};

export default SacQulluqDetail;

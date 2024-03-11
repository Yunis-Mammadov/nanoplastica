// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Typography, useMediaQuery } from '@mui/material';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import BeatLoader from "react-spinners/BeatLoader";
// import Swal from 'sweetalert2';
// import { getAllKeratin, getAllSocialMediaLinks } from '../../../api/request';
// import styles from './index.module.css';
// import { useCart } from '../../../context/CartContext';

// const Keratin = () => {
//     const [socialLinks, setSocialLinks] = useState([]);
//     const [keratin, setKeratin] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [filteredItems, setFilteredItems] = useState([]);
//     const [isHamısı, setIsHamısı] = useState(false);
//     const [isBioCapilarChecked, setIsBioCapilarChecked] = useState(false);
//     const [isNanoKeratinChecked, setIsNanoKeratinChecked] = useState(false);
//     const [quantity, setQuantity] = useState(1);
//     const isMobile = useMediaQuery('(min-width:270px)');
//     const { addToCart } = useCart();

//     const filterItems = () => {
//         const noFilterSelected =
//             !isBioCapilarChecked &&
//             !isNanoKeratinChecked;

//         const filteredData = keratin.filter((item) => {
//             if (isHamısı) {
//                 return true;
//             }
//             if (isBioCapilarChecked && item.filterName === "BioCapilar") {
//                 return true;
//             }
//             if (isNanoKeratinChecked && item.filterName === "NanoKeratin") {
//                 return true;
//             }
//             return false;
//         });
//         if ((isHamısı && noFilterSelected) || (!isHamısı && noFilterSelected)) {
//             setFilteredItems(keratin);
//         } else {
//             setFilteredItems(filteredData);
//         }
//     };

//     useEffect(() => {
//         filterItems();
//     }, [isHamısı, isBioCapilarChecked, isNanoKeratinChecked]);

//     useEffect(() => {
//         getAllKeratin()
//             .then(data => {
//                 setKeratin(data);
//                 setFilteredItems(data);
//             })
//             .catch(error => console.error(error))
//             .finally(() => setLoading(false));
//     }, []);

//     useEffect(() => {
//         getAllSocialMediaLinks()
//             .then(data => setSocialLinks(data))
//             .catch(error => console.error(error))
//             .finally(() => setLoading(false));
//     }, []);

//     if (loading) {
//         return (
//             <div style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "30vh",
//                 color: "red",
//             }}>
//                 <BeatLoader color="orange" />
//             </div>
//         );
//     }

//     const handleAddToCart = (item) => {
//         addToCart(item);
//         Swal.fire({
//             icon: 'success',
//             title: 'Məhsul səbətə əlavə edildi!',
//             showConfirmButton: false,
//             timer: 1500,
//         });
//     };

//     return (
//         <div className={styles.parentKeratin}>
//             <div className={styles.accordion} style={{ width: isMobile ? "35%" : "30%" }}>
//                 <select name="cars" id="cars">
//                     <option value="BIOTOP Ozonio">Biotop Ozonio</option>
//                     <option value="ReviveHairPRO">ReviveHairPro</option>
//                 </select>            </div>
//             <div className={styles.grid}>
//                 {keratin.map(keratin => (
//                     <div className={styles.card} key={keratin._id}>
//                         <Link to={`${keratin._id}`}>
//                             <img className={styles.cardImg} src={keratin.productImgUrl} alt='' />
//                             <h3 className={styles.keratinName}>{keratin.name}</h3>
//                             <p style={{ fontSize: '14px', color: '#555' }}>{keratin.description}</p>
//                         </Link>
//                         <div className={styles.detailWhislistButton}>
//                             <button className={styles.basketBtn} onClick={() => handleAddToCart({
//                                 id: keratin._id,
//                                 img: keratin.productImgUrl,
//                                 name: keratin.name,
//                                 brand: keratin.brand,
//                                 quantity: quantity,
//                             })}>Səbətə Əlavə Et</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/* <div className={styles.parentColumn2}>
//                 <Grid container spacing={2} item margin={"30px auto"} xs={11}>
//                     {filteredItems.length > 0 ? (
//                         filteredItems.map((keratins) => (
//                             <Grid item xs={12} sm={6} md={4} key={keratins._id}>
//                                 <Link style={{ textDecoration: "none" }} to={`/keratin/${keratins._id}`}>
//                                     <div className={styles.card}>
//                                         <img className={styles.cardImg} src={keratins.productImgUrl} alt='' />
//                                         <h3 className={styles.keratinName}>{keratins.name}</h3>
//                                         <p style={{ fontSize: '14px', color: '#555' }}>{keratins.description}</p>
//                                     </div>
//                                 </Link>
//                             </Grid>
//                         ))
//                     ) : (
//                         <Typography style={{ marginLeft: '20px' }}>Məhsul Tapılmadı...</Typography>
//                     )}
//                 </Grid>
//             </div> */}
//         </div>
//     )
// }

// export default Keratin;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import Swal from 'sweetalert2';
import { getAllKeratin } from '../../../api/request';
import styles from './index.module.css';
import { useCart } from '../../../context/CartContext';

const Keratin = () => {
    const [keratin, setKeratin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        getAllKeratin()
            .then(data => {
                setKeratin(data);
                setFilteredItems(data);
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
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

    if (loading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30vh",
                color: "red",
            }}>
                <BeatLoader color="orange" />
            </div>
        );
    }

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
                            <p style={{ fontSize: '14px', color: '#555' }}>{keratin.description}</p>
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

export default Keratin;

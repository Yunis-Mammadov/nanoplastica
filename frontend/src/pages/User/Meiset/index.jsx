// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import BeatLoader from "react-spinners/BeatLoader";
// import Swal from 'sweetalert2';
// import { getAllKeratin } from '../../../api/request';
// import styles from './index.module.css';
// import { useCart } from '../../../context/CartContext';

// const Keratin = () => {
//   const [keratin, setKeratin] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     getAllKeratin()
//       .then(data => {
//         setKeratin(data);
//         setFilteredItems(data);
//       })
//       .catch(error => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleAddToCart = (item) => {
//     addToCart(item);
//     Swal.fire({
//       icon: 'success',
//       title: 'Məhsul səbətə əlavə edildi!',
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//     if (event.target.value === 'BIOTOP Ozonio') {
//       const filtered = keratin.filter(item => item.brand === 'Ozonio');
//       setFilteredItems(filtered);
//     } else if (event.target.value === 'ReviveHairPRO') {
//       const filtered = keratin.filter(item => item.brand === 'Revive Hair Pro');
//       setFilteredItems(filtered);
//     } else {
//       setFilteredItems(keratin);
//     }
//   };

//   if (loading) {
//     return (
//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "30vh",
//         color: "red",
//       }}>
//         <BeatLoader color="orange" />
//       </div>
//     );
//   }

//   return (
//     <div className={styles.parentKeratin}>
//       <div className={styles.accordion}>
//         <select name="cars" id="cars" onChange={handleSelectChange}>
//           <option className={styles.keratinOption} value="">Hamısı</option>
//           <option className={styles.keratinOption} value="BIOTOP Ozonio">Biotop Ozonio</option>
//           <option className={styles.keratinOption} value="ReviveHairPRO">ReviveHairPro</option>
//         </select>
//       </div>
//       <div className={styles.grid}>
//         {filteredItems.map(keratin => (
//           <div className={styles.card} key={keratin._id}>
//             <Link to={`${keratin._id}`}>
//               <img className={styles.cardImg} src={keratin.productImgUrl} alt='' />
//               <h3 className={styles.keratinName}>{keratin.name}</h3>
//             </Link>
//             <div className={styles.detailWhislistButton}>
//               <button className={styles.basketBtn} onClick={() => handleAddToCart({
//                 id: keratin._id,
//                 img: keratin.productImgUrl,
//                 name: keratin.name,
//                 brand: keratin.brand,
//                 quantity: quantity,
//               })}>Səbətə Əlavə Et</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Keratin;

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


const Meiset = () => {
  const [language, setLanguage] = useState('az');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div style={{ margin: "200px auto", textAlign: "center" }}>
      {t("notfound")}
    </div>
  )
}

export default Meiset

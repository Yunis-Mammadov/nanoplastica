import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import Swal from 'sweetalert2';
import styles from './index.module.css';
import { useCart } from '../../../../context/CartContext';
import { getAllSacQulluq } from '../../../../api/request';

const Balsamo = () => {
    const [sacqulluq, setSacqulluq] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        getAllSacQulluq()
            .then(data => {
                setSacqulluq(data);
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


    useEffect(() => {
        getAllSacQulluq()
            .then(data => {
                setSacqulluq(data);
                const shampoFiltered = data.filter(sacqulluq => sacqulluq.type === "Balsamo");
                setFilteredItems(shampoFiltered);
            })
    }, []);


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
            <div className={styles.grid}>
                {filteredItems.map(keratin => (
                    <div className={styles.card} key={keratin._id}>
                        <Link to={`${keratin._id}`}>
                            <img className={styles.cardImg} src={keratin.productImgUrl} alt='' />
                            <h3 className={styles.keratinName}>{keratin.name}</h3>
                            {/* <p style={{ fontSize: '14px', color: '#555' }}>{keratin.description}</p> */}
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

export default Balsamo;

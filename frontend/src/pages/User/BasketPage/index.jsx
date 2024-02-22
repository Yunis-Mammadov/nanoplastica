import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useCart } from '../../../context/CartContext';
import styles from './index.module.css';

const BasketPage = () => {
    const { cartItems, removeFromCart, cartItemCount, setCartItems } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [specialMessage, setSpecialMessage] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [address, setAddress] = useState('');
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 15,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const checkCartEmpty = () => {
        setIsCartEmpty(cartItems.length === 0);
    };

    useEffect(() => {
        checkCartEmpty();
    }, [cartItems, cartItemCount]);

    const addToCart = (product) => {
        const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingProductIndex].quantity += product.quantity;
            setCartItems(updatedCart);
        } else {
            setCartItems(prevItems => [...prevItems, product]);
        }
    };

    const handleRemoveFromCart = (index) => {
        removeFromCart(index);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleSpecialMessage = (e) => {
        setSpecialMessage(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const isButtonDisabled = isCartEmpty ? { disabled: true } : {};

    const sendWhatsAppMessage = () => {
        let message = `Ad: ${name}\nSoyad: ${surname}\nAdres:\n${userLocation}\n\nMəhsullar:\n`;

        cartItems.forEach(item => {
            message += `${item.name} - ${item.quantity} ədəd\n`;
        });
        const whatsappMessage = encodeURIComponent(message);
        const phoneNumber = '+513518931';
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(whatsappLink, '_blank');
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const wazeLink = `https://www.waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
                setUserLocation(wazeLink);
            });
        } else {
            setUserLocation('Konum bilgisi alınamıyor.');
        }
    };


    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={styles.tableBasket} style={{ width: '60%' }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ width: '50%' }} align='left'>Məhsul</StyledTableCell>
                            <StyledTableCell align="center"></StyledTableCell>
                            <StyledTableCell align="center">Brend</StyledTableCell>
                            <StyledTableCell align="center">Sayı</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((item, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align='left'>{item.name}</StyledTableCell>
                                <DeleteIcon
                                    className={styles.deleteIcon}
                                    onClick={() => handleRemoveFromCart(index)}
                                    style={{ marginTop: "20px" }}
                                />
                                <StyledTableCell align="center">{item.brand}</StyledTableCell>
                                <StyledTableCell align="center">{item.quantity}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <button {...isButtonDisabled} onClick={openModal} className={styles.detailWhislistButton}>Sifarişi Tamamla</button>
                </div>
            </TableContainer>
            {isModalOpen && (
                <Modal open={isModalOpen} onClose={closeModal}>
                    <div className={styles.modalContent}>
                        <label>Ad:</label>
                        <input type="text" value={name} onChange={handleNameChange} />
                        <label>Soyad:</label>
                        <input type="text" value={surname} onChange={handleSurnameChange} />
                        <label>Özel Mesaj:</label>
                        <input type="text" value={specialMessage} onChange={handleSpecialMessage} />
                        <label onClick={getLocation} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '5px' }}>Adress: {userLocation ? userLocation : 'Konum Seç'}</label>
                        <button onClick={sendWhatsAppMessage}>WhatsApp'a Göndər</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default BasketPage;
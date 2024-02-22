import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cartItems];
            updatedCart[existingProductIndex].quantity += product.quantity;
            setCartItems(updatedCart);
        } else {
            setCartItems(prevItems => [...prevItems, product]);
        }
    };


    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export const useCartItemCount = () => {
    const { cartItems } = useCart();
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return cartItemCount;
};

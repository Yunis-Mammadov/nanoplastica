import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllKeratin } from '../../../api/request';
import { useCart, useCartItemCount } from '../../../context/CartContext';
import styles from './index.module.css';


const Navbar = () => {
    const isLarge = useMediaQuery('(min-width:1200px)');
    const isMobile = useMediaQuery('(max-width:600px)');
    const [searchTerm, setSearchTerm] = useState('');
    const [keratin, setKeratin] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const cartItemCount = useCartItemCount();
    const { addToCart, setCartItemCount } = useCart();

    useEffect(() => {
        getAllKeratin().then(data => {
            setKeratin(data);
        });
    }, []);

    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        const handleAddToCart = (item) => {
            addToCart(item);
            setCartItemCount(cartItemCount + 1);
        };

        if (term.trim() !== '') {
            const filteredResults = keratin.filter(item =>
                item.name.toLowerCase().includes(term.toLowerCase())
            );
            setSearchResults(filteredResults);
        } else {
            setSearchResults([]);
        }
    };


    const clearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
    };

    const handleLinkClick = () => {
        clearSearch();
    };

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <>
            <div className={styles.parentNavbar}>
                <div className={styles.navbar}>
                    {/* {isMobile && (
                        <IconButton onClick={toggleDrawer} edge="start" color="white" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    )} */}
                    <div className={styles.navbarLogo}>
                        <Link to={``}>
                            <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg" alt="" />
                        </Link>
                    </div>
                    <div className={styles.search}>
                        <div className={styles.parentSeachIcon}>
                            <SearchIcon className={styles.searchIcon} />
                        </div>
                        <input
                            className={styles.searchInput}
                            type="search"
                            placeholder='Axtarış...'
                            onChange={handleInputChange}
                            value={searchTerm}
                        />
                        {searchTerm && (
                            <div className={styles.clearIcon} onClick={clearSearch}>
                                <ClearIcon />
                            </div>
                        )}
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "15px"
                    }}>
                        <div>
                            <a href='/contact'
                                className={styles.contactLink}
                            >
                                Əlaqə
                            </a>
                        </div>
                        <div className={styles.basketAndSignIn}>
                            <Link style={{ textDecoration: "none" }} to="/basket">
                                <LocalGroceryStoreIcon sx={{ fontSize: '28px', color: 'rgba(255, 255, 255, 0.823)' }} />
                                {cartItemCount > 0 && (
                                    <span className={styles.cartItemCount}>{cartItemCount}</span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
                {isLarge && (
                    <div className={styles.toolbar}>
                        <div className={styles.parentNavbarLinks}>
                            <a className={styles.navbarLinks} href="/">Ev</a>
                            <a className={styles.navbarLinks} href="keratin">Keratin</a>
                            <a className={styles.navbarLinks} href="sacqulluq">Saç Qulluq</a>
                            <a className={styles.navbarLinks} href="utuler">Ütülər</a>
                            <a className={styles.navbarLinks} href="fenler">Fenlər</a>
                            <a className={styles.navbarLinks} href="about">Haqqımızda</a>
                        </div>
                    </div>
                )}
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                    <div className={styles.drawerContent}>
                        <div className={styles.parentNavbarLinks}>
                            <a className={styles.navbarLinks} href="/">Ev</a>
                            <a className={styles.navbarLinks} href="keratin">Keratin</a>
                            <a className={styles.navbarLinks} href="sacqulluq">Saç Qulluq</a>
                            <a className={styles.navbarLinks} href="utuler">Ütülər</a>
                            <a className={styles.navbarLinks} href="fenler">Fenlər</a>
                            <a className={styles.navbarLinks} href="about">Haqqımızda</a>
                        </div>
                    </div>
                </Drawer>
                {searchResults.length > 0 && (
                    <div className={styles.searchResults}>
                        {searchResults.map(item => (
                            <Link
                                to={`/keratin/${item._id}`}
                                key={item.id}
                                className={styles.resultItem}
                                onClick={handleLinkClick}
                            >
                                <div onClick={() => handleAddToCart(item)}>
                                    <img src={item.productImgUrl} alt={item.name} />
                                    <p style={{ textAlign: "center" }}>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import Modal from "./Modal";
import styles from "./index.module.css";
import { List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { getAllKeratin } from '../../../api/request';


const Navbar = () => {
  const navItems = [
    { label: "Home", path: "" },
    { label: "Keratin", path: "keratin" },
    { label: "SacQulluq", path: "sacqulluq" },
    { label: "Fenlər", path: "fenler" },
    { label: "Ütülər", path: "utuler" },
    { label: "Setlər", path: "setler" },
    { label: "Haqqımızda", path: "about" },
    { label: "Əlaqə", path: "contact" },
  ];
  const { cartItemCount } = useCart();
  const isExtraLarge = useMediaQuery('(min-width:1200px)');
  const isLarge = useMediaQuery('(min-width:500px)');
  const isSmallScreen = useMediaQuery('(min-width:250px)');
  const [searchTerm, setSearchTerm] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [keratin, setKeratin] = useState('')
  const [searchResults, setSearchResults] = useState([]);


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    getAllKeratin().then(data => {
      setKeratin(data);
    });
  }, []);

  const { addToCart, setCartItemCount } = useCart();


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

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const handleLinkClick = () => {
    clearSearch();
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };


  if (isExtraLarge) {
    return (
      <>
        <div className={styles.navbarata}>
          <div className={styles.parentNavbar}>
            <div className={styles.toolbar}>
              <div className={styles.parentLogo}>
                <img className={styles.logoImg} src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg" alt="" />
              </div>
              <List className={styles.parentMainLinks}>
                {navItems.map((item) => (
                  <ListItem
                    component={Link}
                    key={item.label}
                    to={`/${item.path}`}
                    disablePadding
                  >
                    <p className={styles.links}>{item.label}</p>
                  </ListItem>
                ))}
              </List>
              <div className={styles.searchAndBasket}>
                <div className={styles.search}>
                  <div className={styles.parentSeachIcon}>
                    <SearchIcon className={styles.searchIcon} />
                  </div>
                  <div>

                    <input
                      type="search"
                      placeholder='Axtarış...'
                      onChange={handleInputChange}
                      value={searchTerm}
                    />
                  </div>
                  {searchTerm && (
                    <div className={styles.clearIcon} onClick={clearSearch}>
                      <ClearIcon />
                    </div>
                  )}
                </div>
                <Link to="/basket">
                  <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white" }} />
                  {cartItemCount > 0 && <span className={styles.cartItemCount}>{cartItemCount}</span>}
                </Link>
              </div>
            </div>
            <Drawer
              anchor="left"
              open={drawerOpen}
              backgroundColor={"red"}
              onClose={toggleDrawer}
              PaperProps={{ style: { backgroundColor: 'black  ', width: "250px" } }}
            >
              <List className={styles.drawerMainLinks}>
                {navItems.map((item) => (
                  <ListItem
                    component={Link}
                    key={item.label}
                    to={`/${item.path}`}
                    disablePadding
                    onClick={closeDrawer}
                  >
                    <p className={styles.drawerLinks}>{item.label}</p>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
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
  }

  if (isLarge && !isExtraLarge) {
    return (
      <>
        <div className={styles.navbarata}>  
          <div className={styles.parentNavbar}>
            <div className={styles.toolbar}>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <div>
                  <IconButton sx={{ color: "white" }} onClick={toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                </div>
                <div>
                  <Modal />
                </div>
              </div>
              <div className={styles.parentIsLargeLogo}>
                <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg" alt="" />
              </div>
              <div className={styles.searchAndBasket}>
                <div className={styles.search}>
                  <div className={styles.parentSeachIcon}>
                    <SearchIcon className={styles.searchIcon} />
                  </div>
                  <input
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
                <Link to="/basket">
                  <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white" }} />
                  {cartItemCount > 0 && <span className={styles.cartItemCount}>{cartItemCount}</span>}
                </Link>
              </div>
            </div>
            <Drawer
              anchor="left"
              open={drawerOpen}
              backgroundColor={"red"}
              onClose={toggleDrawer}
              PaperProps={{ style: { backgroundColor: 'black  ', width: "250px" } }}
            >
              <List className={styles.drawerMainLinks}>
                {navItems.map((item) => (
                  <ListItem
                    component={Link}
                    key={item.label}
                    to={`/${item.path}`}
                    disablePadding
                    onClick={closeDrawer}
                  >
                    <p className={styles.drawerLinks}>{item.label}</p>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
        </div>
      </>
    );
  }


  if (isSmallScreen && !isExtraLarge && !isLarge) {
    return (
      <>
        <div className={styles.parentNavbar}>
          <div className={styles.toolbar}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div>
                <IconButton sx={{ color: "white" }} onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </div>
              <div>
                <Modal />
              </div>
            </div>
            <div className={styles.parentIsSmallLogo}>
              <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg" alt="" />
            </div>
            <div className={styles.searchAndBasket}>
              <div className={styles.search}>
                <div className={styles.parentSeachIcon}>
                  <SearchIcon className={styles.searchIcon} />
                </div>
                <input
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
              <Link to="/basket">
                <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white" }} />
                {cartItemCount > 0 && <span className={styles.cartItemCount}>{cartItemCount}</span>}
              </Link>
            </div>
          </div>
          <Drawer
            anchor="left"
            open={drawerOpen}
            backgroundColor={"red"}
            onClose={toggleDrawer}
            PaperProps={{ style: { backgroundColor: 'black  ', width: "250px" } }}
          >
            <List className={styles.drawerMainLinks}>
              {navItems.map((item) => (
                <ListItem
                  component={Link}
                  key={item.label}
                  to={`/${item.path}`}
                  disablePadding
                  onClick={closeDrawer}
                >
                  <p className={styles.drawerLinks}>{item.label}</p>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
      </>
    );
  }
}


export default Navbar;

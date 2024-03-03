// import ClearIcon from '@mui/icons-material/Clear';
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import MenuIcon from '@mui/icons-material/Menu';
// import { List, ListItem } from '@mui/material';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllKeratin, getUsers } from '../../../api/request';
// import { useCart } from '../../../context/CartContext';
// import Modal from "./Modal";
// import { useCartItemCount } from '../../../context/CartContext';
// import axios from "axios"
// import styles from "./index.module.css";
// import { BASE_URL } from '../../../api/baseURL';
// import { useUserContext } from '../../../context/UserContext';

// const Navbar = () => {
//   const navItems = [
//     { label: "Əsas Səhifə", path: "" },
//     { label: "Keratin", path: "keratin" },
//     { label: "Saç Qulluq", path: "sacqulluq" },
//     { label: "Fenlər", path: "fenler" },
//     { label: "Ütülər", path: "utuler" },
//     { label: "Saç Boyaları", path: "utuler" },
//     { label: "Setlər", path: "setler" },
//     { label: "Haqqımızda", path: "about" },
//     { label: "Əlaqə", path: "contact" },
//   ];
//   const cartItemCount = useCartItemCount();
//   const isExtraLarge = useMediaQuery('(min-width:1200px)');
//   const isLarge = useMediaQuery('(min-width:500px)');
//   const isSmallScreen = useMediaQuery('(min-width:250px)');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [keratin, setKeratin] = useState('')
//   const [searchResults, setSearchResults] = useState([])
//   const [user, setUser, isLoggedIn, setIsLoggedIn, logout] = useUserContext();

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   useEffect(() => {
//     getAllKeratin().then(data => {
//       setKeratin(data);
//     });
//   }, []);

//   useEffect(() => {
//     checkUserAuthentication();
//   }, []);

//   const checkUserAuthentication = async () => {
//     try {
//       const userData = await getUsers(localStorage.getItem('token'));
//       setUser(userData);
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error("Error fetching user info:", error);
//       setUser(null);
//       setIsLoggedIn(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     setIsLoggedIn(false);
//   };

//   const { addToCart, setCartItemCount } = useCart();


//   const handleInputChange = (event) => {
//     const term = event.target.value;
//     setSearchTerm(term);

//     const handleAddToCart = (item) => {
//       addToCart(item);
//       setCartItemCount(cartItemCount + 1);
//     };

//     if (term.trim() !== '') {
//       const filteredResults = keratin.filter(item =>
//         item.name.toLowerCase().includes(term.toLowerCase())
//       );
//       setSearchResults(filteredResults);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const clearSearch = () => {
//     setSearchTerm('');
//     setSearchResults([]);
//   };

//   const closeDrawer = () => {
//     setDrawerOpen(false);
//   };
//   const handleLinkClick = () => {
//     clearSearch();
//   };

//   const handleAddToCart = (item) => {
//     addToCart(item);
//   };


//   const handleRegister = async (e) => {

//   };




//   if (isExtraLarge) {
//     return (
//       <>
//         <div className={styles.navbarata}>
//           <div className={styles.parentNavbar}>
//             <div className={styles.toolbar}>
//               <div className={styles.parentLogo}>
//                 <img className={styles.logoImg} src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg" alt="" />
//               </div>
//               <List className={styles.parentMainLinks}>
//                 {navItems.map((item) => (
//                   <ListItem
//                     component={Link}
//                     key={item.label}
//                     to={`/${item.path}`}
//                     disablePadding
//                   >
//                     <p className={styles.links}>{item.label}</p>
//                   </ListItem>
//                 ))}
//               </List>
//               {isLoggedIn && (
//                 <div className={styles.userContainer}>
//                   <IconButton onClick={handleLogout}>
//                     <AccountCircleIcon />
//                     <span>{user.name}</span>
//                   </IconButton>
//                 </div>
//               )}
//               <div className={styles.searchAndBasket}>
//                 <div className={styles.search}>
//                   <Modal />
//                   {searchTerm && (
//                     <div className={styles.clearIcon} onClick={clearSearch}>
//                       <ClearIcon />
//                     </div>
//                   )}
//                 </div>
//                 <Link to="/basket">
//                   <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white" }} />
//                   {cartItemCount > 0 && <span className={styles.cartItemCount}>{cartItemCount}</span>}
//                 </Link>

//               </div>
//             </div>
//             <Drawer
//               anchor="left"
//               open={drawerOpen}
//               backgroundColor={"red"}
//               onClose={toggleDrawer}
//               PaperProps={{ style: { backgroundColor: 'black  ', width: "250px" } }}
//             >
//               <List className={styles.drawerMainLinks}>
//                 {navItems.map((item) => (
//                   <ListItem
//                     component={Link}
//                     key={item.label}
//                     to={`/${item.path}`}
//                     disablePadding
//                     onClick={closeDrawer}
//                   >
//                     <p className={styles.drawerLinks}>{item.label}</p>
//                   </ListItem>
//                 ))}
//               </List>
//             </Drawer>
//           </div>
//           {searchResults.length > 0 && (
//             <div className={styles.searchResults}>
//               {searchResults.map(item => (
//                 <Link
//                   to={`/keratin/${item._id}`}
//                   key={item.id}
//                   className={styles.resultItem}
//                   onClick={handleLinkClick}
//                 >
//                   <div onClick={() => handleAddToCart(item)}>
//                     <img src={item.productImgUrl} alt={item.name} />
//                     <p style={{ textAlign: "center" }}>{item.name}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </>
//     );
//   }

//   if (isLarge && !isExtraLarge) {
//     return (
//       <>
//         <div className={styles.navbarata}>
//           <div className={styles.parentNavbar}>
//             <div className={styles.toolbar}>
//               <div style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center"
//               }}>
//                 <div>
//                   <IconButton sx={{ color: "white" }} onClick={toggleDrawer}>
//                     <MenuIcon />
//                   </IconButton>
//                 </div>
//                 <div>
//                   <Modal />
//                 </div>
//               </div>
//               <div className={styles.parentIsLargeLogo}>
//                 <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg" alt="" />
//               </div>
//               <div className={styles.searchAndBasket}>
//                 <div className={styles.search}>
//                   {/* <div className={styles.parentSeachIcon}>
//                     <SearchIcon className={styles.searchIcon} />
//                   </div>
//                   <input
//                     type="search"
//                     placeholder='Axtarış...'
//                     onChange={handleInputChange}
//                     value={searchTerm}
//                   /> */}
//                   {searchTerm && (
//                     <div className={styles.clearIcon} onClick={clearSearch}>
//                       <ClearIcon />
//                     </div>
//                   )}
//                 </div>
//                 <Link to="/basket">
//                   <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white" }} />
//                   {cartItemCount > 0 && <span className={styles.cartItemCount}>{cartItemCount}</span>}
//                 </Link>
//               </div>
//             </div>
//             <Drawer
//               anchor="left"
//               open={drawerOpen}
//               backgroundColor={"red"}
//               onClose={toggleDrawer}
//               PaperProps={{ style: { backgroundColor: 'black  ', width: "250px" } }}
//             >
//               <List className={styles.drawerMainLinks}>
//                 {navItems.map((item) => (
//                   <ListItem
//                     component={Link}
//                     key={item.label}
//                     to={`/${item.path}`}
//                     disablePadding
//                     onClick={closeDrawer}
//                   >
//                     <p className={styles.drawerLinks}>{item.label}</p>
//                   </ListItem>
//                 ))}
//               </List>
//             </Drawer>
//           </div>
//         </div>
//       </>
//     );
//   }


//   if (isSmallScreen && !isExtraLarge && !isLarge) {
//     return (
//       <>
//         <div className={styles.parentNavbar}>
//           <div className={styles.toolbar}>
//             <div style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center"
//             }}>
//               <div>
//                 <IconButton sx={{ color: "white" }} onClick={toggleDrawer}>
//                   <MenuIcon />
//                 </IconButton>
//               </div>
//               <div>
//                 <Modal />
//               </div>
//             </div>
//             <div className={styles.parentIsSmallLogo}>
//               <img src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704196009/NanoPlastica_1_qz64fz.jpg" alt="" />
//             </div>
//             <div className={styles.mobilSearchAndBasket}>
//               <div className={styles.search}>
//                 {/* <div className={styles.parentSeachIcon}>
//                   <SearchIcon className={styles.searchIcon} />
//                 </div>
//                 <input
//                   type="search"
//                   placeholder='Axtarış...'
//                   onChange={handleInputChange}
//                   value={searchTerm}
//                 /> */}
//                 {searchTerm && (
//                   <div className={styles.clearIcon} onClick={clearSearch}>
//                     <ClearIcon />
//                   </div>
//                 )}
//               </div>
//               <Link to="/basket">
//                 <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white" }} />
//                 {cartItemCount > 0 && <span className={styles.mobileCartItemCount}>{cartItemCount}</span>}
//               </Link>
//             </div>
//           </div>
//           <Drawer
//             anchor="left"
//             open={drawerOpen}
//             backgroundColor={"red"}
//             onClose={toggleDrawer}
//             PaperProps={{ style: { backgroundColor: 'black  ', width: "250px" } }}
//           >
//             <List className={styles.drawerMainLinks}>
//               {navItems.map((item) => (
//                 <ListItem
//                   component={Link}
//                   key={item.label}
//                   to={`/${item.path}`}
//                   disablePadding
//                   onClick={closeDrawer}
//                 >
//                   <p className={styles.drawerLinks}>{item.label}</p>
//                 </ListItem>
//               ))}
//             </List>
//           </Drawer>
//         </div>
//       </>
//     );
//   }
// }


// export default Navbar;


import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
import { Accordion, AccordionDetails, AccordionSummary, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getAllKeratin, getAllSacQulluq } from '../../../api/request';
import { useCart, useCartItemCount } from '../../../context/CartContext';
import './i18n';
import styles from "./index.module.css";



const Navbar = () => {
  const [isKeratinDropdownOpen, setIsKeratinDropdownOpen] = useState(false);
  const [isSacqulluqDropdownOpen, setIsSacqulluqDropdownOpen] = useState(false);
  const [isMeisetDropdownOpen, setIsMeisetDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [keratin, setKeratin] = useState([]);
  const [sacqulluq, setSacqulluq] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const cartItemCount = useCartItemCount();
  const { addToCart, setCartItemCount } = useCart();
  const isExtraLarge = useMediaQuery('(min-width:1100px)');
  const isLarge = useMediaQuery('(min-width:700px)');
  const isSmallLarge = useMediaQuery('(min-width:270px)');
  const { t, i18n } = useTranslation()

  useEffect(() => {
    getAllKeratin().then(data => {
      setKeratin(data);
    });
  }, []);

  useEffect(() => {
    getAllSacQulluq().then(data => {
      setSacqulluq(data);
    });
  }, []);

  const handleMouseEnter = () => {
    setIsKeratinDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsKeratinDropdownOpen(false);
  };

  const handleMouseEnterSacqulluq = () => {
    setIsSacqulluqDropdownOpen(true);
  };

  const handleMouseLeaveSacqulluq = () => {
    setIsSacqulluqDropdownOpen(false);
  };

  const handleMouseEnterMeiset = () => {
    setIsMeisetDropdownOpen(true);
  };

  const handleMouseLeaveMeiset = () => {
    setIsMeisetDropdownOpen(false);
  };

  const handleLanguageChange = async lang => {
    await i18n.changeLanguage(lang)
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim() !== '') {
      const filteredResults = [...keratin, ...sacqulluq].filter(item =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };


  const handleLinkClick = () => {
    clearSearch();
  };

  if (isExtraLarge) {
    return (
      <>
        <div className={styles.parentNavbar}>
          <div className={styles.topbar}>
            <div className={styles.registerBtn}>
              <button>{t('register')}</button>
            </div>
            <div className={styles.searchAndBasket}>
              <div className={styles.searchExtraLarge}>
                <input
                  className={styles.searchInput}
                  type="search"
                  placeholder={t('search')}
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
              </Link>
              <button style={{ width: "4%" }} onClick={() => handleLanguageChange("az")}>
                <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png" alt="Azerbaijan" />
              </button>
              <button style={{ width: "3%" }} onClick={() => handleLanguageChange("ru")}>
                <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png" alt="Russia" />
              </button>
              <button style={{ width: "3%" }} onClick={() => handleLanguageChange("en")}>
                <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="America" />
              </button>
            </div>
          </div>
          <div className={styles.navbar}>
            <div style={{
              marginTop: "10px",
              width: "138px",
              height: "54px",
              backgroundColor: "yellow"
            }}>
            </div>
            <div className={styles.navbarLinks}>
              <ul>
                <li><Link to="/">{t('esas')}</Link></li>
                <li
                  className={`${styles.dropdownWrapper} ${isKeratinDropdownOpen ? styles.dropdownOpen : ''}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/keratin">{t('keratin')}</Link>
                  {isKeratinDropdownOpen && (
                    <ul className={styles.dropdownContent}>
                      <li><Link to="/keratin">{t('ozonio')}</Link></li>
                      <li><Link to="/keratin">{t('revive')}</Link></li>
                    </ul>
                  )}
                </li>
                <li
                  className={`${styles.dropdownWrapper} ${isSacqulluqDropdownOpen ? styles.dropdownOpen : ''}`}
                  onMouseEnter={handleMouseEnterSacqulluq}
                  onMouseLeave={handleMouseLeaveSacqulluq}
                >
                  <Link to="/sacqulluq" >{t('sacqulluq')}</Link>
                  {isSacqulluqDropdownOpen && (
                    <ul className={styles.dropdownContentSacqulluq}>
                      <li><Link to="/keratin">{t('şampun')}</Link></li>
                      <li><Link to="/keratin">{t('balzam')}</Link></li>
                      <li><Link to="/keratin">{t('maska')}</Link></li>
                      <li><Link to="/keratin">{t('kondisioner')}</Link></li>
                      <li><Link to="/keratin">{t('botox')}</Link></li>
                    </ul>
                  )}
                </li>
                <li
                  className={`${styles.dropdownWrapper} ${isMeisetDropdownOpen ? styles.dropdownOpen : ''}`}
                  onMouseEnter={handleMouseEnterMeiset}
                  onMouseLeave={handleMouseLeaveMeiset}
                >
                  <Link to="/setler">{t('meiset')}</Link>
                  {isMeisetDropdownOpen && (
                    <ul className={styles.dropdownContentMeiset}>
                      <li><Link to="/keratin">{t('fenler')}</Link></li>
                      <li><Link to="/keratin">{t('utuler')}</Link></li>
                    </ul>
                  )}
                </li>
                <li><Link to="/sacboya">{t('sacboya')}</Link></li>
                <li><Link to="/about">{t('about')}</Link></li>
                <li><Link to="/contact">{t('contact')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {searchTerm && searchResults.length > 0 ? (
          <div className={styles.searchResultsExtra}>
            {searchResults.map(item => {
              const truncatedDetails = item.productDetails ? item.productDetails.split(" ").slice(0, 18).join(" ") : '';
              return (
                <Link
                  to={item.category && item.category.toLowerCase() === "keratin" ? `/keratin/${item._id}` : `/sacqulluq/${item._id}`}
                  key={item.id}
                  className={styles.resultItem}
                  onClick={handleLinkClick}
                >
                  <div style={{
                    display: "flex"
                  }}>
                    <div>
                      <img style={{ width: "150px" }} src={item.productImgUrl} alt={item.name} />
                    </div>
                    <div>
                      <h6>{item.name}</h6>
                      <p>{truncatedDetails}....</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div >
        ) : searchTerm && searchResults.length === 0 ? (
          <>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "5px"
            }}>
              <p className={styles.noResults}>{t('Məshul tapılmadı...')}</p>
              <SentimentVeryDissatisfiedIcon sx={{ fontSize: "32px" }} />
            </div>
          </>
        ) : null}
      </>
    );
  }

  if (isLarge && !isExtraLarge) {
    return (
      <>
        <div className={styles.smallNavbar}>
          <div className={styles.topbarSmall}>
            <div className={styles.drawerAndRegister}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  width: "138px",
                  height: "54px",
                  backgroundColor: "yellow"
                }}>
                </div>
                <Drawer className={styles.drawer} anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
                  <List className={styles.drawerList}>
                    <Link onClick={handleDrawerClose} to={"/"}>
                      <ListItem button>
                        <ListItemText primary={t('esas')} />
                      </ListItem>
                    </Link>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Link onClick={handleDrawerClose} to="./keratin">
                          <ListItemText primary={t('keratin')} />
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          <ListItem button>
                            <ListItemText primary={t('ozonio')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('revive')} />
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <Link onClick={handleDrawerClose} to="/sacqulluq">
                          <ListItemText primary={t('sacqulluq')} />
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          <ListItem button>
                            <ListItemText primary={t('şampun')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('balzam')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('maska')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('kondisioner')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('botox')} />
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                        <Link onClick={handleDrawerClose} to="/setler">
                          <ListItemText primary={t('meiset')} />
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          <ListItem button>
                            <Link onClick={handleDrawerClose} to="/fenler">
                              <ListItemText primary={t('fenler')} />
                            </Link>
                          </ListItem>
                          <ListItem button>
                            <Link onClick={handleDrawerClose} to="/utuler">
                              <ListItemText primary={t('utuler')} />
                            </Link>
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                    <ListItem button>
                      <Link onClick={handleDrawerClose} to="/sacboya">
                        <ListItemText primary={t('sacboya')} />
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <Link onClick={handleDrawerClose} to="/about">
                        <ListItemText primary={t('about')} />
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <Link onClick={handleDrawerClose} to="/contact">
                        <ListItemText primary={t('contact')} />
                      </Link>
                    </ListItem>
                  </List>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    margin: "19px",
                  }}>
                    <button style={{ width: "10%" }} onClick={() => handleLanguageChange("az")}>
                      <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png" alt="Azerbaijan" />
                    </button>
                    <button style={{ width: "8%" }} onClick={() => handleLanguageChange("ru")}>
                      <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png" alt="Russia" />
                    </button>
                    <button style={{ width: "9%" }} onClick={() => handleLanguageChange("en")}>
                      <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="America" />
                    </button>
                  </div>
                </Drawer>
                <Link to={"/register"}>
                  <div className={styles.registerBtnMobile}>
                    <button style={{ marginLeft: "10px" }}>{t('register')}</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.searchLarge}>
              <input
                className={styles.searchInput}
                type="search"
                placeholder={t('search')}
                onChange={handleInputChange}
                value={searchTerm}
              />
              {searchTerm && (
                <div className={styles.clearIcon} onClick={clearSearch}>
                  <ClearIcon />
                </div>
              )}
            </div>
            <div>
              <Link to="/basket">
                <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white", backgroundColor: "transparent" }} />
              </Link>
              <button style={{ border: "none", backgroundColor: "transparent", marginLeft: '10px' }} onClick={toggleDrawer}><MenuIcon sx={{ color: "white" }} /></button>
            </div>
          </div>
          <div>
          </div>
        </div>
        {searchTerm && searchResults.length > 0 ? (
          <div className={styles.searchResults}>
            {searchResults.map(item => {
              const truncatedDetails = item.productDetails ? item.productDetails.split(" ").slice(0, 11).join(" ") : '';
              return (
                <Link
                  to={item.name.toLowerCase() === "keratin" ? `/keratin/${item._id}` : `/sacqulluq/${item._id}`}
                  key={item.id}
                  className={styles.resultItem}
                  onClick={handleLinkClick}
                >
                  <div style={{
                    display: "flex"
                  }}>
                    <div>
                      <img src={item.productImgUrl} alt={item.name} />
                    </div>
                    <div>
                      <h6>{item.name}</h6>
                      <p>{truncatedDetails}....</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div >
        ) : searchTerm && searchResults.length === 0 ? (
          <>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "5px"
            }}>
              <p className={styles.noResults}>{t('Məshul tapılmadı...')}</p>
              <SentimentVeryDissatisfiedIcon sx={{ fontSize: "32px" }} />
            </div>
          </>
        ) : null}
      </>
    );
  }

  if (isSmallLarge && !isExtraLarge && !isLarge) {
    return (
      <>
        <div className={styles.smallNavbar}>
          <div className={styles.topbarSmall}>
            <div className={styles.drawerAndRegister}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <button style={{ border: "none", backgroundColor: "transparent" }} onClick={toggleDrawer}><MenuIcon sx={{ color: "white" }} /></button>
                <Drawer className={styles.drawer} anchor="top" open={isDrawerOpen} onClose={toggleDrawer}>
                  <List className={styles.drawerList}>
                    <Link onClick={handleDrawerClose} to={"/"}>
                      <ListItem button>
                        <ListItemText primary={t('esas')} />
                      </ListItem>
                    </Link>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Link onClick={handleDrawerClose} to="./keratin">
                          <ListItemText primary={t('keratin')} />
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          <ListItem button>
                            <ListItemText primary={t('ozonio')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('revive')} />
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <Link onClick={handleDrawerClose} to="/sacqulluq">
                          <ListItemText primary={t('sacqulluq')} />
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          <ListItem button>
                            <ListItemText primary={t('şampun')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('balzam')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('maska')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('kondisioner')} />
                          </ListItem>
                          <ListItem button>
                            <ListItemText primary={t('botox')} />
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: "none" }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                        <Link onClick={handleDrawerClose} to="/setler">
                          <ListItemText primary={t('meiset')} />
                        </Link>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          <ListItem button>
                            <Link onClick={handleDrawerClose} to="/fenler">
                              <ListItemText primary={t('fenler')} />
                            </Link>
                          </ListItem>
                          <ListItem button>
                            <Link onClick={handleDrawerClose} to="/utuler">
                              <ListItemText primary={t('utuler')} />
                            </Link>
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                    <ListItem button>
                      <Link onClick={handleDrawerClose} to="/sacboya">
                        <ListItemText primary={t('sacboya')} />
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <Link onClick={handleDrawerClose} to="/about">
                        <ListItemText primary={t('about')} />
                      </Link>
                    </ListItem>
                    <ListItem button>
                      <Link onClick={handleDrawerClose} to="/contact">
                        <ListItemText primary={t('contact')} />
                      </Link>
                    </ListItem>
                  </List>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    margin: "19px",
                  }}>
                    <button style={{ width: "10%" }} onClick={() => handleLanguageChange("az")}>
                      <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/2560px-Flag_of_Azerbaijan.svg.png" alt="Azerbaijan" />
                    </button>
                    <button style={{ width: "8%" }} onClick={() => handleLanguageChange("ru")}>
                      <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png" alt="Russia" />
                    </button>
                    <button style={{ width: "9%" }} onClick={() => handleLanguageChange("en")}>
                      <img style={{ width: "100%" }} src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="America" />
                    </button>
                  </div>
                </Drawer>
                <Link to={"/register"}>
                  <div className={styles.registerBtnMobile}>
                    <button style={{ marginLeft: "10px" }}>{t('register')}</button>
                  </div>
                </Link>
              </div>
            </div>
            <div style={{
              width: "138px",
              height: "54px",
              backgroundColor: "yellow"
            }}>
            </div>
            <div>
              <Link to="/basket">
                <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white", backgroundColor: "transparent" }} />
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.search}>
              <input
                className={styles.searchInput}
                type="search"
                placeholder={t('search')}
                onChange={handleInputChange}
                value={searchTerm}
              />
              {searchTerm && (
                <div className={styles.clearIcon} onClick={clearSearch}>
                  <ClearIcon />
                </div>
              )}
            </div>
          </div>
        </div>
        {searchTerm && searchResults.length > 0 ? (
          <div className={styles.searchResults}>
            {searchResults.map(item => {
              const truncatedDetails = item.productDetails ? item.productDetails.split(" ").slice(0, 11).join(" ") : '';
              return (
                <Link
                  to={item.name.toLowerCase() === "keratin" ? `/keratin/${item._id}` : `/sacqulluq/${item._id}`}
                  key={item.id}
                  className={styles.resultItem}
                  onClick={handleLinkClick}
                >
                  <div style={{
                    display: "flex"
                  }}>
                    <div>
                      <img src={item.productImgUrl} alt={item.name} />
                    </div>
                    <div>
                      <h6>{item.name}</h6>
                      <p>{truncatedDetails}....</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div >
        ) : searchTerm && searchResults.length === 0 ? (
          <>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "5px"
            }}>
              <p className={styles.noResults}>{t('Məshul tapılmadı...')}</p>
              <SentimentVeryDissatisfiedIcon sx={{ fontSize: "32px" }} />
            </div>
          </>
        ) : null}
      </>
    );
  }


};

export default Navbar;
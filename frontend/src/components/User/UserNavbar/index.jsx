import ClearIcon from '@mui/icons-material/Clear';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
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

  const handleOutsideClick = () => {
    clearSearch();
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
        <div onClick={handleOutsideClick}>
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
                <Link style={{ textDecoration: "none" }} to="/basket">
                  <LocalGroceryStoreIcon sx={{ fontSize: "28px", color: "white" }} />
                  {cartItemCount > 0 && <span className={styles.cartItemCount}>{cartItemCount}</span>}
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
                        <li><Link to="/ozonio">{t('ozonio')}</Link></li>
                        <li><Link to="/revive">{t('revive')}</Link></li>
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
                        <li><Link to="/shampoo">{t('şampun')}</Link></li>
                        <li><Link to="/balsamo">{t('balzam')}</Link></li>
                        <li><Link to="/maska">{t('maska')}</Link></li>
                        <li><Link to="/kondisioner">{t('kondisioner')}</Link></li>
                        <li><Link to="/botox">{t('botox')}</Link></li>
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
                        <li><Link to="/fenler">{t('fenler')}</Link></li>
                        <li><Link to="/utuler">{t('utuler')}</Link></li>
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
        </div>
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
                {cartItemCount > 0 && <span className={styles.cartItemCount}>{cartItemCount}</span>}
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
                            <Link to={'/shampoo'}>
                              <ListItemText primary={t('şampun')} />
                            </Link>
                          </ListItem>
                          <ListItem button>
                            <Link to={'/balsamo'}>
                              <ListItemText primary={t('balzam')} />
                            </Link>
                          </ListItem>
                          <ListItem button>
                            <Link to={'/maska'}>
                              <ListItemText primary={t('maska')} />
                            </Link>
                          </ListItem>
                          <ListItem button>
                            <Link to={'/kondisioner'}>
                              <ListItemText primary={t('kondisioner')} />
                            </Link>
                          </ListItem>
                          <ListItem button>
                            <Link to={'/botox'}>
                              <ListItemText primary={t('botox')} />
                            </Link>
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
                {cartItemCount > 0 && <span className={styles.cartItemCount}>{cartItemCount}</span>}
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
        </div >
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
        ) : null
        }
      </>
    );
  }


};

export default Navbar;
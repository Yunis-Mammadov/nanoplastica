import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer, IconButton, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { getAllNavbarLinks } from '../../../api/request';
import styles from './index.module.css';


const UserNavbar = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [navbarLinks, setNavbarLinks] = useState([]);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        getAllNavbarLinks().then(data => {
            setNavbarLinks(data);
        });
    }, []);



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return (
        <>
            {!isMobile && (
                < div className={styles.parentNavbar} >
                    <div className={styles.parentLogoAndLinks}>
                        <div className={styles.centerLogo}>
                            <img src="./img/logo.jpg" alt="" className={styles.logoImage} />
                        </div>
                        <div className={styles.navbarLinks}>
                            {navbarLinks.map(item => (
                                <a key={item.label} href={item.path}>
                                    {item.label}
                                </a>
                            ))}
                        </div>
                        <div>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </div>
                    </div>
                </div>
            )}
            {isMobile && (
                <div className={styles.responsiveParentNavbar}>
                    <div className={styles.responsiveParentLogoAndLinks}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon sx={{ color: "white" }} />
                        </IconButton>
                        <div className={styles.centerLogo}>
                            <img src="./img/logo.jpg" alt="" className={styles.logoImage} />
                        </div>
                        <div>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </div>
                    </div>
                </div>
            )}
            {isMobile && (
                <Drawer
                    anchor="left"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={{
                        sx: {
                            width: "240px",
                            backgroundColor: "black"
                        },
                    }}
                >
                    <List>
                        {navbarLinks.map(item => (
                            <ListItem sx={{
                                color: "white",
                                marginLeft:"30px",
                                paddingTop:"20px"
                            }}  key={item.label}  button component="a" href={item.path}>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            )}
        </>
    )
}

export default UserNavbar

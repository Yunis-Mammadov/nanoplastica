import { Box, IconButton, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from "./index.module.css"
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { alpha, styled } from '@mui/system';
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import { getAllNavbarLinks } from '../../../api/request';
import { useEffect } from 'react';

const drawerWidth = 240;

const UserNavbar = () => {

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const [navbarLinks, setNavbarLinks] = useState([]);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    useEffect(() => {
        getAllNavbarLinks().then(data => {
            setNavbarLinks(data);
        });
    }, []);

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navbarLinks.map(item => (
                    <ListItem component={Link} key={item.label} to={`/${item.path}`} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette ? alpha(theme.palette.common.white, 0.15) : '',
        '&:hover': {
            backgroundColor: theme.palette ? alpha(theme.palette.common.white, 0.25) : '',
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
            <div className={styles.parentNavbar}>
                <div className={isMobile ? styles.responsiveParentNavbarLinksAndLogo : styles.parentNavbarLinksAndLogo}>
                    <div>
                        {isMobile && (
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                >
                                    <MenuIcon sx={{ color: "white" }} />
                                </IconButton>
                        )}
                    </div>
                    <div className={isMobile ? styles.responsiveParentLogo : styles.parentLogo}>
                        <img src="./img/logo.jpg" alt="" />
                    </div>
                    <div>
                        {isMobile ? null : (
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navbarLinks.map(item => (
                                    <Box className={styles.navbarLinks} key={item.label} component={Link} to={`/${item.path}`}>
                                        {item.label}
                                    </Box>
                                ))}
                            </Box>
                        )}
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
                <div>
                    {isMobile && (
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    )}
                </div>
            </div>
        </>
    )
}

export default UserNavbar

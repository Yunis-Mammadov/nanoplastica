import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUsers } from '../../../../api/request';
import { useUserContext } from '../../../../context/UserContext';


export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [users, setUsers] = useState([])
    const [user, setUser, isLoggedIn, setIsLoggedIn, logout] = useUserContext();

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data)
        })
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = (event) => {
        logout(true)
    }

    useEffect(() => {
        getUsers().then(data => {
            setUsers(data);
        })
    }, []);

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {Array.isArray(users) && users.map(loginUser => (
                    <p key={loginUser.id}>{loginUser.name}</p>
                ))}
                <AccountCircleIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{ style: { boxShadow: '1px', width: "120px" } }} // Gölgeli efekti kaldırmak için bu satırı ekle
            >
                <MenuItem onClick={handleClose}>My Basket</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
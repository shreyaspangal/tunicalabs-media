import React from 'react';
import Box from "@mui/material/Box";
import { useNavigate, Link } from "react-router-dom";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./Header.css";

export default function Header() {
    let navigate = useNavigate();
    let location = window.location.pathname;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (label) => {
        if (label === 'logout') {
            navigate("/signin")
        }
        setAnchorEl(null);
    };

    return (
        <Box className="header">
            <Box className="header-title" sx={{ paddingLeft: "2rem" }}>
                <Link to="/" className='header-link'>
                    <h1>TUNICALABS MEDIA</h1>
                </Link>
            </Box>
            {(location !== '/signup' && location !== '/signin') && (
                <Stack direction="row" spacing={1} alignItems="center" sx={{ paddingRight: "2rem" }}>
                    <IconButton
                        size="large"
                        aria-label="show 1 new notification"
                        color="inherit"
                        sx={{ marginRight: "1.5rem" }}
                    >
                        <Badge badgeContent={1} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar>RJ</Avatar>
                        <Typography variant="p" sx={{
                            fontWeight: 100,
                            letterSpacing: '1px',
                            color: 'inherit',
                            textDecoration: 'none',
                            paddingLeft: ".5rem"
                        }}
                        >Rajan
                        </Typography>
                        {/* Dropdown */}
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            style={{
                                color: 'white',
                            }}
                        >
                            < KeyboardArrowDownIcon />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={() => handleClose("my account")}>My account</MenuItem>
                            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
                        </Menu>
                    </Stack>
                </Stack>
            )
            }
        </Box >
    );
}

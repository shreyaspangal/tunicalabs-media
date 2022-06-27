import React from 'react';
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./Header.css";

const signupPage = false;

export default function Header() {
    return (
        <Box className="header">
            <Box className="header-title" sx={{ paddingLeft: "2rem" }}>
                <h1>TUNICALABS MEDIA</h1>
            </Box>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ paddingRight: "2rem" }}>
                <IconButton
                    size="large"
                    aria-label="show 1 new notification"
                    color="inherit"
                    sx={{ paddingRight: "2rem" }}
                >
                    <Badge badgeContent={1} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                {/* <AccountCircleIcon /> */}
                <Avatar>RJ</Avatar>
                <Typography variant="p" sx={{
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 100,
                    letterSpacing: '2px',
                    color: 'inherit',
                    textDecoration: 'none',
                }}

                >Rajan</Typography>
                < KeyboardArrowDownIcon />
            </Stack>
        </Box>
    );
}

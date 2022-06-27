import React from 'react';
import Header from './Header';
import { Box, Stack, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function Home() {

    let navigate = useNavigate();

    return (
        <>
            <Header />
            <Box>
                <Typography variant="h3" component="div" textAlign="center" sx={{ marginTop: "4rem", marginBottom: "4rem", fontFamily: "Roboto", color: "#781715" }}>
                    Home Page
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="start" height="40vh">
                <Stack direction="row" spacing={4}>
                    <Stack>
                        <Button variant="contained" onClick={() => { navigate("/signup") }} endIcon={<ChevronRightIcon />}>Go to Signup </Button>
                    </Stack>
                    <Stack>
                        <Button variant="contained" onClick={() => navigate("/signin")} endIcon={<ChevronRightIcon />}>Go to Signin </Button>
                    </Stack>
                    <Stack>
                        <Button variant="contained" onClick={() => navigate("/viewstudent")} endIcon={<ChevronRightIcon />}>Go to ViewStudent </Button>
                    </Stack>
                    <Stack>
                        <Button variant="contained" onClick={() => navigate("/addstudent")} endIcon={<ChevronRightIcon />}>Go to AddStudent </Button>
                    </Stack>

                </Stack>
            </Box >
            <Box>
                <Typography variant="h6" component="div" textAlign="center" sx={{ marginTop: "4rem", marginBottom: "4rem", fontFamily: "Roboto", color: "#781715" }}>
                    NOTE: This page is used for navigation purpose only.
                </Typography>
            </Box>
        </>
    )
}

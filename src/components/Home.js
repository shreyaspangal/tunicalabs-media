import React from 'react';
import Header from './Header';
import { Box, Stack, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom'


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
            <Box display="flex" justifyContent="center" alignItems="start" height="100vh">
                <Stack direction="row" spacing={4}>
                    <Stack>
                        <Button variant="contained" onClick={() => {
                            navigate("/signup");
                        }}>Go to Signup </Button>
                    </Stack>
                    <Stack>
                        <Button variant="contained" onClick={() => navigate("/signin")}>Go to Signup </Button>
                    </Stack>
                    <Stack>
                        <Button variant="contained" onClick={() => navigate("/viewstudent")}>Go to ViewStudent </Button>
                    </Stack>
                    <Stack>
                        <Button variant="contained" onClick={() => navigate("/addstudent")}>Go to AddStudent </Button>
                    </Stack>

                </Stack>
            </Box >
        </>
    )
}

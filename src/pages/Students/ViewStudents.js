import React from 'react';
import Table from '../../components/Table';
import SearchInput from '../../components/SearchInput';
import { Stack, TextField, Button, MenuItem, Grid, Paper, Box, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';



export default function viewStudents() {
    return (
        <Stack direction="column" width="90%">
            <Stack >
                <Typography component="h2" color="#Ff0006" m="1.5rem 0" sx={{fontWeight: "400", fontSize: "22px"}}>View Student</Typography>
            </Stack>
            <Stack >
                <SearchInput />
            </Stack>
            <Stack sx={{ marginTop: "2rem" }}>
                <Table />
            </Stack>
            <Stack sx={{ marginTop: "2rem", marginBottom: "3rem" }}>
                <Button variant="contained" color="error" sx={{ width: "13rem", margin: "0rem", padding: ".5rem .1rem", backgroundColor: "#781715" }}>
                    Download Excel &nbsp; &nbsp; <DownloadIcon size="small" />
                </Button>
            </Stack>
        </Stack>
    )
}


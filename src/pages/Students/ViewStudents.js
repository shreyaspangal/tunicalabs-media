import React from 'react';
import Table from '../../components/Table';
import SearchInput from '../../components/SearchInput';
import { Stack, TextField, Button, MenuItem, Grid, Paper, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';



export default function viewStudents() {
    return (
        <Stack direction="column" width="90%">
            <Stack >
                <h2>View Student</h2>
            </Stack>
            <Stack >
                <SearchInput />
            </Stack>
            <Stack sx={{ marginTop: "2rem" }}>
                <Table />
            </Stack>
            <Stack sx={{ marginTop: "2rem" }}>
                <Button variant="contained" color="error" sx={{ width: "13rem", margin: "0rem", padding: ".5rem .1rem", backgroundColor: "#941919" }}>
                    Download Excel &nbsp; &nbsp; <DownloadIcon size="small" />
                </Button>
            </Stack>
        </Stack>
    )
}


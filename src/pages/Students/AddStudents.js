import React from 'react';
import AddForm from '../../components/AddForm';
import { Stack, Typography } from '@mui/material';


export default function AddStudents() {
    return (
        <Stack direction="column" width="90%">
            <Stack >
                <Typography component="h2" color="#Ff0006" m="1.5rem 0" sx={{ fontWeight: "500", fontSize: "25px" }}>Add Student</Typography>
            </Stack>
            <Stack >
                <AddForm />
            </Stack>
        </Stack>
    )
}

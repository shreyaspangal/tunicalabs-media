import React from 'react';
import AddForm from '../../components/AddForm';
import { Stack, TextField, Button, MenuItem, Grid, Paper, Box } from '@mui/material';


export default function AddStudents() {
    return (
        <Stack direction="column" width="90%">
            <Stack >
                <h2>Add Student</h2>
            </Stack>
            <Stack >
                <AddForm />
            </Stack>
        </Stack>
    )
}

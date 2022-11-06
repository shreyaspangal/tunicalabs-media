import React from 'react';
import AddForm from '../../components/AddForm';
import { Stack, Typography } from '@mui/material';


export default function AddStudents({ tableData, saveToLocalStorage }) {

    // console.log(tableData)

    return (
        <Stack direction="column" width="90%">
            <Stack >
                <Typography component="h2" color="#Ff0006" m="1.5rem 0" sx={{ fontWeight: "400", fontSize: "22px" }}>Add Student</Typography>
            </Stack>
            <Stack >
                <AddForm tableData={tableData} saveToLocalStorage={saveToLocalStorage} />
            </Stack>
        </Stack>
    )
}

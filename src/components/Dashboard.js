import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
// Data
import Data from '../db/data.json';
// Components
import Header from './Header';
import SideMenu from './SideMenu';
import ViewStudents from '../pages/Students/ViewStudents';
import AddStudent from '../pages/Students/AddStudents';

export default function Dashboard() {

    let location = window.location.pathname;

    const [tableData, setTableData] = useState(Data);

    return (
        <Box>
            <Header />
            <Paper sx={{ margin: "2rem", marginTop: "3rem" }} elevation={24}>
                <Box display='flex'>
                    <Box height='100vh' sx={{ paddingLeft: "2rem", borderRight: "1px solid black" }}>
                        <SideMenu />
                    </Box>
                    <Box sx={{ marginLeft: "2rem" }} width="100%">
                        {location === "/viewstudent" ? (
                            <ViewStudents tableData={tableData} setTableData={setTableData} />
                        ) : (
                            <AddStudent tableData={tableData} setTableData={setTableData} />
                        )}
                    </Box>
                </Box>
                <CssBaseline />
            </Paper>
        </Box>
    )
}

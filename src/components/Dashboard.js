import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
// Data
import Data from '../DB/data.json';
// Components
import Header from './Header';
import SideMenu from './SideMenu';
import ViewStudents from '../pages/Students/ViewStudents';
import AddStudent from '../pages/Students/AddStudents';

const InitialFValues = {
    name: "",
    age: "",
    school: "",
    classes: "",
    division: "",
    status: ""
};

export default function Dashboard() {

    let location = window.location.pathname;

    const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem('studentsData')) || Data);
    const [searchInput, setSearchInput] = useState(InitialFValues);
    const [searchBtnFlag, setSearchBtnFlag] = useState(false);

    const searhState = { searchInput, setSearchInput, searchBtnFlag, setSearchBtnFlag, InitialFValues }

    const saveToLocalStorage = (key /* String "" */, value /* Any */, fn = setTableData /* Function (){} */) => {
        // Update state variable
        fn(value);
        // Save new data to local storage from state variable
        localStorage.setItem(key, JSON.stringify(value));
    }

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
                            <ViewStudents tableData={tableData} saveToLocalStorage={saveToLocalStorage} searhState={searhState} />
                        ) : (
                            <AddStudent tableData={tableData} saveToLocalStorage={saveToLocalStorage} />
                        )}
                    </Box>
                </Box>
                <CssBaseline />
            </Paper>
        </Box>
    )
}

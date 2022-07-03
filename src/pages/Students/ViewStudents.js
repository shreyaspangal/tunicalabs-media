import React from 'react';
import Table from '../../components/Table';
import SearchInput from '../../components/SearchInput';
import { Stack, TextField, Button, MenuItem, Grid, Paper, Box, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const InitialFValues = {
    name: "",
    age: "",
    school: "",
    classes: "",
    division: ""
};

export default function viewStudents({ tableData, setTableData }) {

    const [searchInput, setSearchInput] = React.useState(InitialFValues);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchInput({
            ...searchInput,
            [name]: value
        });
    }

    // Filter Table Functionality
    const handleSearchClick = (event) => {
        event.preventDefault();
        const newTableData = [...tableData];

        let findTableRow = newTableData.filter((row) => {
            return (row.name === searchInput.name
                || Number(row.age) === Number(searchInput.age)
                || row.school === searchInput.school
                || row.classes === searchInput.classes
                || row.division === searchInput.division)
        });
        console.log(findTableRow)
        console.log(searchInput)
        // Check
        if (findTableRow.length === 0) {
            setTableData(tableData) // Throw no match found error
        } else {
            setTableData(findTableRow); // Update table rows
        }
    }

    return (
        <Stack direction="column" width="90%">
            <Stack >
                <Typography component="h2" color="#Ff0006" m="1.5rem 0" sx={{ fontWeight: "400", fontSize: "22px" }}>View Student</Typography>
            </Stack>
            <Stack >
                <SearchInput searchInput={searchInput} handleInputChange={handleInputChange} handleSearchClick={handleSearchClick} />
            </Stack>
            <Stack sx={{ marginTop: "2rem" }}>
                <Table tableData={tableData} setTableData={setTableData} />
            </Stack>
            <Stack sx={{ marginTop: "2rem", marginBottom: "3rem" }}>
                <Button variant="contained" color="error" sx={{ width: "13rem", margin: "0rem", padding: ".5rem .1rem", backgroundColor: "#781715" }}>
                    Download Excel &nbsp; &nbsp; <DownloadIcon size="small" />
                </Button>
            </Stack>
        </Stack>
    )
}


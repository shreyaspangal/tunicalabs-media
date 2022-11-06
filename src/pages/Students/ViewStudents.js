import React from 'react';
import Table from '../../components/Table';
import Data from '../../DB/data.json';
import SearchInput from '../../components/SearchInput';
import { Stack, Typography } from '@mui/material';
import { CSVLink } from "react-csv";
import "./downloadExcelBtn.css";

export default function viewStudents({ tableData, saveToLocalStorage, searhState: { searchInput, setSearchInput, searchBtnFlag, setSearchBtnFlag, InitialFValues } }) {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchInput({
            ...searchInput,
            [name]: value
        });
    }

    let findTableRow = tableData.filter((row) => {
        return (row.name.includes(searchInput.name.trim())
            || Number(row.age) === Number(searchInput.age)
            || row.school === searchInput.school
            || row.classes === searchInput.classes
            || row.division === searchInput.division
            || row.status === searchInput.status)
    });

    // Filter
    let displayTableData = !searchBtnFlag ? tableData : findTableRow;

    // Filter Table Functionality
    const handleSearchClick = (event) => {
        event.preventDefault();
        if (findTableRow.length === 0) {
            // Throw no match found error
            setSearchBtnFlag("Failed") // Switch to Remove Btn
        } else {
            setSearchBtnFlag(true); // Switch to Search Btn
        }
    }

    const handleRemoveClick = (event) => {
        event.preventDefault();
        setSearchInput(InitialFValues); // Reset form values
        setSearchBtnFlag(false) // Switch to Search Btn
    }

    return (
        <Stack direction="column" width="90%">
            <Stack >
                <Typography component="h2" color="#Ff0006" m="1.5rem 0" sx={{ fontWeight: "400", fontSize: "22px" }}>View Student</Typography>
            </Stack>
            <Stack >
                <SearchInput searchInput={searchInput} handleInputChange={handleInputChange} handleSearchClick={handleSearchClick} handleRemoveClick={handleRemoveClick} searchBtnFlag={searchBtnFlag} />
            </Stack>
            <Stack sx={{ marginTop: "2rem" }}>
                <Table tableData={tableData} saveToLocalStorage={saveToLocalStorage} searchBtnFlag={searchBtnFlag} displayTableData={displayTableData} />
            </Stack>
            {/* Download Excel Table */}
            <Stack sx={{ marginTop: "2rem", marginBottom: "3rem" }}>
                <CSVLink
                    data={Data}
                    filename={"students-table.csv"}
                    className="download-excel-btn"
                >
                    Download Excel
                </CSVLink>
            </Stack>
        </Stack>
    )
}


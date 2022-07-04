import React, { useState } from 'react';
import Table from '../../components/Table';
import Data from '../../DB/data.json';
import SearchInput from '../../components/SearchInput';
import { Stack, Typography } from '@mui/material';
import { CSVLink } from "react-csv";
import "./downloadExcelBtn.css";


const InitialFValues = {
    name: "",
    age: "",
    school: "",
    classes: "",
    division: ""
};

export default function viewStudents({ tableData, setTableData }) {

    const [searchInput, setSearchInput] = useState(InitialFValues);
    const [searchBtnFlag, setSearchBtnFlag] = useState(false);

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

        let findTableRow = tableData.filter((row) => {
            return (row.name === searchInput.name
                && Number(row.age) === Number(searchInput.age)
                && row.school === searchInput.school
                && row.classes === searchInput.classes
                && row.division === searchInput.division)
        });
        // Filter
        if (findTableRow.length === 0) {
            // Throw no match found error
            setSearchBtnFlag("Failed") // Switch to Remove Btn
        } else {
            setTableData(findTableRow); // Update table rows
            setSearchBtnFlag(true) // Switch to Remove Btn
        }
    }

    const handleRemoveClick = (event) => {
        event.preventDefault();
        setSearchInput(InitialFValues); // Reset form values
        setSearchBtnFlag(false) // Switch to Search Btn
        setTableData(Data); // Re-fill the table with db/data.json data
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
                <Table tableData={tableData} setTableData={setTableData} searchBtnFlag={searchBtnFlag} />
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


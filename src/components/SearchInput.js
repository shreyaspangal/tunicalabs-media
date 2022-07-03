import React from 'react';
import { styled } from '@mui/material/styles';
import { schoolNames, classNames, divisions } from '../db/FormData';
import { Stack, TextField, Button, MenuItem, Grid, Paper, Box } from '@mui/material';

const SearchButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 30px",
    border: "1px solid",
    borderColor: "transparent",
    backgroundColor: "#941919",
    lineHeight: 1.2,
    fontFamily: ["Open Sans", "sans-serif"]
});

export default function SearchInput({ searchInput, handleInputChange, handleSearchClick }) {

    return (
        <form>
            <Stack spacing={4} direction='row'>
                <Stack direction='row' spacing={2}>
                    <TextField
                        name="name"
                        variant="outlined"
                        label="Name"
                        value={searchInput.name}
                        size="small"
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={searchInput.age}
                        size="small"
                        onChange={handleInputChange}
                        type="number"
                    />
                    <TextField
                        name="school"
                        id="outlined-select-currency"
                        label="School"
                        select
                        value={searchInput.school}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "10rem" }}
                    >
                        {schoolNames.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name="classes"
                        id="outlined-select-currency"
                        label="Class"
                        select
                        value={searchInput.classes}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "10rem" }}
                    >
                        {classNames.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name="division"
                        id="outlined-select-currency"
                        label="Division"
                        select
                        value={searchInput.division}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "10rem" }}
                    >
                        {divisions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                <SearchButton variant="contained" color="error" sx={{ bgcolor: "#781715" }} onClick={(event) => handleSearchClick(event)}>
                    Search
                </SearchButton>
            </Stack>
        </form >
    )
}

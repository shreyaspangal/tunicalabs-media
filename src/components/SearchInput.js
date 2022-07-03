import React from 'react';
import { styled } from '@mui/material/styles';
import { schoolNames, classNames, divisions } from '../db/FormData';
import { Stack, TextField, Button, MenuItem, Grid, Paper, Box } from '@mui/material';
import Data from '../db/data.json';


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

export default function SearchInput({ searchInput, handleInputChange, handleSearchClick, handleRemoveClick, searchBtnFlag }) {

    return (
        <form onSubmit={(event) => handleSearchClick(event)}>
            <Stack spacing={4} direction='row'>
                <Stack direction='row' spacing={2}>
                    <TextField
                        name="name"
                        variant="outlined"
                        label="Name"
                        value={searchInput.name}
                        size="small"
                        onChange={handleInputChange}
                        required
                    />
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={searchInput.age}
                        size="small"
                        onChange={handleInputChange}
                        type="number"
                        required
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
                        required
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
                        required
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
                        required
                    >
                        {divisions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                {searchBtnFlag ? (
                    <SearchButton variant="contained" color="error" sx={{ bgcolor: "#781715" }}
                        onClick={(event) => handleRemoveClick(event)}>
                        Remove
                    </SearchButton>
                ) : (
                    <SearchButton variant="contained" color="error" sx={{ bgcolor: "#781715" }}
                        type="Submit">
                        Search
                    </SearchButton>
                )
                }
            </Stack>
        </form >
    )
}

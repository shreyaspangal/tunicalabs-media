import React from 'react';
import { styled } from '@mui/material/styles';
import { schoolNames, classNames, divisions, status } from '../DB/FormData';
import { Stack, TextField, Button, MenuItem } from '@mui/material';
// Icons
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


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
        <form onSubmit={(event) => handleSearchClick(event)} >
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
                        sx={{ minWidth: "10rem" }}
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
                        sx={{ minWidth: "7rem" }}
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
                        sx={{ minWidth: "7rem" }}
                    >
                        {divisions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name="status"
                        id="outlined-select-currency"
                        label="Status"
                        select
                        value={searchInput.status}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "7rem" }}
                    >
                         {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                {searchBtnFlag ? (
                    <SearchButton variant="contained" color="error" sx={{ bgcolor: "#781715" }}
                        onClick={(event) => handleRemoveClick(event)} startIcon={<CloseIcon />}>
                        Remove
                    </SearchButton>
                ) : (
                    <SearchButton variant="contained" color="error" sx={{ bgcolor: "#781715" }}
                        type="Submit" startIcon={<SearchIcon />}>
                        Search
                    </SearchButton>
                )
                }
            </Stack>
        </form >
    )
}

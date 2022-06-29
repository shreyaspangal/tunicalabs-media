import React from 'react';
import { styled } from '@mui/material/styles';
// import { schoolNames, classNames, divisions } from '../DB/InputData';
import { schoolNames, classNames, divisions } from '../DB/FormData';
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


const InitialFValues = {
    name: "",
    age: "",
    school: "",
    class: "",
    division: ""
};

export default function SearchInput() {

    const [values, setValues] = React.useState(InitialFValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    return (
        <form>
            <Stack spacing={4} direction='row'>
                <Stack direction='row' spacing={2}>
                    <TextField
                        name="name"
                        variant="outlined"
                        label="Name"
                        value={values.name}
                        size="small"
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={values.age}
                        size="small"
                        onChange={handleInputChange}
                        type="number"
                    />
                    <TextField
                        name="school"
                        id="outlined-select-currency"
                        label="School"
                        select
                        value={values.school}
                        size="small"
                        // helperText="Select your School"
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
                        name="class"
                        id="outlined-select-currency"
                        label="Class"
                        select
                        value={values.class}
                        default={values.class}
                        size="small"
                        // helperText="Select your class"
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
                        value={values.division}
                        size="small"
                        // helperText="Select your division"
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
                <SearchButton variant="contained" color="error" sx={{ bgcolor: "#781715" }}>
                    Search
                </SearchButton>
            </Stack>
        </form >
    )
}

import React from 'react';
import Table from './Table';
import { styled } from '@mui/material/styles';
import { Stack, TextField, Button, MenuItem, Grid, Paper, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


//   DATA BEGINS
const schoolNames = [
    {
        value: "school1",
        label: "School"
    },
    {
        value: "School2",
        label: "School 2"
    },
    {
        value: "School3",
        label: "School 3"
    },
    {
        value: "School4",
        label: "School 4"
    }
];

const classNames = [
    {
        value: "class1",
        label: "Class"
    },
    {
        value: "class2",
        label: "class 2"
    },
    {
        value: "class3",
        label: "class 3"
    },
    {
        value: "class4",
        label: "class 4"
    }
];
const divisions = [
    {
        value: "division1",
        label: "Division"
    },
    {
        value: "division2",
        label: "division 2"
    },
    {
        value: "division3",
        label: "division 3"
    },
    {
        value: "division4",
        label: "division 4"
    }
];

//   DATA ENDS

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
                <SearchButton variant="contained" color="error">
                    Search
                </SearchButton>
            </Stack>
            {/* <Stack sx={{ marginTop: "5rem" }}>
                <Table />
            </Stack>
            <Stack sx={{ marginTop: "3rem" }}>
                <Button variant="contained" color="error" sx={{ width: "13rem", margin: "0rem", padding: ".5rem .1rem", backgroundColor: "#941919" }}>
                    Download Excel &nbsp; &nbsp; <DownloadIcon size="small" />
                </Button>
            </Stack> */}

        </form >
    )
}

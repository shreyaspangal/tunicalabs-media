import React from 'react';
import { styled } from '@mui/material/styles';
import { schoolNames, classNames, divisions } from '../DB/FormData';
import { Stack, TextField, Button, MenuItem, Typography } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';


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
    date: "",
    school: "",
    class: "",
    division: "",
    status: "",
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
            <Stack direction="column" width="400px" spacing={4}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" >
                    <Typography component="h6">
                        Full Name
                    </Typography>
                    <TextField
                        name="name"
                        variant="outlined"
                        label="Name"
                        value={values.name}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "13rem" }}
                    />
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="h6">
                        Date Of Birth
                    </Typography>
                    <TextField
                        name="age"
                        variant="outlined"
                        value={values.date}
                        size="small"
                        onChange={handleInputChange}
                        type="date"
                        sx={{ minWidth: "13rem" }}
                    />
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="h6">
                        School
                    </Typography>
                    <TextField
                        name="school"
                        id="outlined-select-currency"
                        label="School"
                        select
                        value={values.school}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "13rem" }}
                    >
                        {schoolNames.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="h6">
                        Class
                    </Typography>
                    <TextField
                        name="class"
                        id="outlined-select-currency"
                        label="Class"
                        select
                        value={values.class}
                        default={values.class}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "13rem" }}
                    >
                        {classNames.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="h6">
                        Division
                    </Typography>
                    <TextField
                        name="division"
                        id="outlined-select-currency"
                        label="Division"
                        select
                        value={values.division}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "13rem" }}
                    >
                        {divisions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="h6">
                        Status
                    </Typography>
                    <FormControl sx={{ paddingRight: "1.5rem" }}>
                        <RadioGroup
                            row
                            aria-labelledby="row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="active" control={<Radio size="small" />} label="Active" />
                            <FormControlLabel value="invoice" control={<Radio size="small" />} label="Invoice" />
                        </RadioGroup>
                    </FormControl>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="h6">
                    </Typography>
                    <Stack >
                        <Button variant="contained" color="error" sx={{ width: "13rem", margin: "0rem", padding: ".5rem .1rem", backgroundColor: "#941919", letterSpacing: "2px", textTransform: 'capitalize' }}>
                            Save
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </form >
    )
}

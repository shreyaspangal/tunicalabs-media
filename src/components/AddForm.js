import React from 'react';
import { schoolNames, classNames, divisions } from '../db/FormData';
import { columns, rows, createData } from '../db/TableData';
import { Stack, TextField, Button, MenuItem, Typography } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom'

const InitialFValues = {
    name: "",
    age: "",
    school: "",
    classes: "",
    division: "",
    status: "",
};

export default function AddStudentForm({ tableData, setTableData }) {

    const navigate = useNavigate();

    // console.log(tableData)

    const [addFormData, setAddFormData] = React.useState(InitialFValues);

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setAddFormData({
            ...addFormData,
            [name]: value
        });
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newTableData = {
            id: tableData.length + 1,
            name: addFormData.name,
            age: addFormData.age,
            school: addFormData.school,
            classes: addFormData.classes,
            division: addFormData.division,
            status: addFormData.status
        }
        const newTableRow = [...tableData, newTableData];
        // Add new table row data
        setTableData(newTableRow);
        //Reset form values to empty
        setAddFormData(InitialFValues)
    }

    return (
        <form onSubmit={handleAddFormSubmit}>
            <Stack direction="column" width="400px" spacing={4}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" >
                    <Typography component="h6">
                        Full Name
                    </Typography>
                    <TextField
                        name="name"
                        variant="outlined"
                        label="Name"
                        value={addFormData.name}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "13rem" }}
                        required
                    />
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="h6">
                        Age
                    </Typography>
                    <TextField
                        name="age"
                        variant="outlined"
                        label="Age"
                        value={addFormData.age}
                        size="small"
                        onChange={handleInputChange}
                        type="number"
                        sx={{ minWidth: "13rem" }}
                        required
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
                        value={addFormData.school}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "13rem" }}
                        required
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
                        name="classes"
                        id="outlined-select-currency"
                        label="Class"
                        select
                        value={addFormData.classes}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "13rem" }}
                        required
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
                        value={addFormData.division}
                        size="small"
                        onChange={handleInputChange}
                        sx={{ minWidth: "13rem" }}
                        required
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
                            name="status"
                            value={addFormData.status}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel required value="Active" control={<Radio size="small" />} label="Active" />
                            <FormControlLabel required value="Invoice" control={<Radio size="small" />} label="Invoice" />
                        </RadioGroup>
                    </FormControl>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography component="h6">
                    </Typography>
                    <Stack >
                        <Button variant="contained" color="error" sx={{ width: "13rem", margin: "0rem", padding: ".5rem .1rem", backgroundColor: "#941919", letterSpacing: "2px", textTransform: 'capitalize' }} type="submit">
                            Save
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </form >
    )
}

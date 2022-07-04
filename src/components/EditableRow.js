import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { TextField, Button, MenuItem } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

// Data
import { schoolNames, classNames, divisions } from '../db/FormData';



export default function EditableRow({ row, editFormData, handleEditFormChange, handleCancelClick }) {
    return (
        <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#Fbe9e9' } }}>
            <TableCell>
                {row.id}
            </TableCell>
            <TableCell>
                <TextField
                    name="name"
                    variant="outlined"
                    label="Name"
                    value={editFormData.name}
                    size="small"
                    onChange={handleEditFormChange}
                    sx={{ maxWidth: "8rem" }}
                    required
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="age"
                    variant="outlined"
                    label="Age"
                    value={editFormData.age}
                    size="small"
                    onChange={handleEditFormChange}
                    type="number"
                    sx={{ maxWidth: "5rem" }}
                    required
                />
            </TableCell>
            <TableCell>
                <TextField
                    name="school"
                    id="outlined-select-currency"
                    label="School"
                    select
                    value={editFormData.school}
                    size="small"
                    onChange={handleEditFormChange}
                    sx={{ minWidth: "7rem" }}
                    required
                >
                    {schoolNames.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </TableCell >
            <TableCell >
                <TextField
                    name="classes"
                    id="outlined-select-currency"
                    label="Class"
                    select
                    value={editFormData.classes}
                    size="small"
                    onChange={handleEditFormChange}
                    sx={{ minWidth: "7rem" }}
                    required
                >
                    {classNames.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </TableCell >
            <TableCell >
                <TextField
                    name="division"
                    id="outlined-select-currency"
                    label="Division"
                    select
                    value={editFormData.division}
                    size="small"
                    onChange={handleEditFormChange}
                    sx={{ minWidth: "7rem" }}
                    required
                >
                    {divisions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </TableCell >
            <TableCell
                style={{ maxWidth: "7rem" }}>
                <FormControl sx={{ paddingRight: "1.5rem" }}>
                    <RadioGroup
                        row
                        name="status"
                        value={editFormData.status}
                        onChange={handleEditFormChange}
                    >
                        <FormControlLabel required value="Active" control={<Radio size="small" />} label="Active" />
                        <FormControlLabel required value="Invoice" control={<Radio size="small" />} label="Invoice" />
                    </RadioGroup>
                </FormControl>
            </TableCell >
            <TableCell sx={{ minWidth: 30, paddingRight: "0rem", textAlign: "right" }}>
                <Button sx={{ color: '#5db7e9' }} type="Submit">Save</Button>
            </TableCell>
            <TableCell sx={{ minWidth: 30, paddingRight: "0rem", textAlign: "left" }}>
                <Button sx={{ color: '#5db7e9' }} onClick={handleCancelClick}>Cancel</Button>
            </TableCell>
        </TableRow >
    )
}

import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { columns } from '../db/TableData';

export default function ReadOnlyRow({ row, handleEditClick, handleDeleteClick }) {

    return (
        <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { bgcolor: '#Fbe9e9' } }}>
            {columns.map((column) => {
                const value = row[column.id];
                return (
                    <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                    </TableCell>
                );
            })}
            <TableCell sx={{ minWidth: 30, paddingRight: "0rem", textAlign: "right" }}>
                <Button sx={{ color: '#5db7e9' }} onClick={(event) => handleEditClick(event, row)}>Edit</Button>
            </TableCell>
            <TableCell sx={{ minWidth: 30, paddingRight: "0rem" }}>
                <Button sx={{ color: '#5db7e9', textAlign: "left" }} onClick={() => handleDeleteClick(row.id)}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}

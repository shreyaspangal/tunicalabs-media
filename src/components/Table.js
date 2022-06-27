import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Link } from "react-router-dom";


const columns = [
    { id: "id", label: "ID", minWidth: 40, align: "center" },
    {
        id: "name",
        label: "Name",
        minWidth: 80,
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "age",
        label: "Age",
        minWidth: 50,
        // align: "right",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "school",
        label: "School",
        minWidth: 30,
        // align: "right",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "classes",
        label: "Class",
        minWidth: 30,
        align: "right",
        format: (value) => value.toFixed(0)
    },
    {
        id: "division",
        label: "Division",
        minWidth: 50,
        align: "right"
    },
    {
        id: "status",
        label: "Status",
        minWidth: 60,
        align: "right",
        format: (value) => value.toLocaleString("en-US")
    }
];

function createData(id, name, age, school, classes, division, status) {
    return { id, name, age, school, classes, division, status };
}

const rows = [
    createData(1, "Student Name", 10, "Modal School", 3, "A", "Active"),
    createData(2, "Student Name", 10, "Modal School", 3, "A", "Active"),
    createData(3, "Student Name", 10, "Modal School", 3, "A", "Active"),
    createData(4, "Student Name", 10, "Modal School", 3, "A", "Active"),
    createData(5, "Student Name", 10, "Modal School", 3, "A", "Active")
];

export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth, color: "#ffff", background: "#781715", borderBottom: "0", fontWeight: 300 }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell align="center" colSpan={2} sx={{ background: "#781715", borderBottom: "0" }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} sx={{ '&:nth-child(odd)': { bgcolor: '#Fbe9e9' } }}>
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
                                        <TableCell sx={{ minWidth: 30, paddingRight: "0rem", textAlign: "right", textDecoration: "underline 2px #5db7e9", color: '#5db7e9' }}>
                                            Edit
                                        </TableCell>
                                        <TableCell sx={{ minWidth: 30, paddingRight: "0rem", textAlign: "left", textDecoration: "underline 2px #5db7e9", color: '#5db7e9' }}>
                                            Delete
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

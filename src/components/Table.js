import React, { useState } from "react";
import { Table, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// Data
import { columns } from "../DB/TableData";
// Row Components
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
// Icons
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


export default function ColumnGroupingTable({ tableData, saveToLocalStorage, searchBtnFlag, displayTableData }) {

    // ReadOnly Mode State
    const [editStudentId, setEditStudentId] = useState(null);

    // Edit Mode State
    const [editFormData, setEditFormData] = useState({
        name: "",
        age: "",
        school: "",
        classes: "",
        division: "",
        status: "",
    });

    // ReadOnly Mode Method
    const handleEditClick = (event, row) => {
        event.preventDefault();
        setEditStudentId(row.id);

        const formValues = {
            name: row.name,
            age: row.age,
            school: row.school,
            classes: row.classes,
            division: row.division,
            status: row.status,
        };

        setEditFormData(formValues);
    }

    // ReadOnly Mode Method
    const handleDeleteClick = (studentId) => {
        const newTableData = [...tableData];

        const index = newTableData.findIndex((row) => row.id === studentId);

        newTableData.splice(index, 1);

        saveToLocalStorage('studentsData', newTableData);
    }

    // Edit Mode Method
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target
        setEditFormData({
            ...editFormData,
            [name]: value
        })
    }

    // Edit Mode Method
    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedFormData = {
            id: editStudentId,
            name: editFormData.name,
            age: editFormData.age,
            school: editFormData.school,
            classes: editFormData.classes,
            division: editFormData.division,
            status: editFormData.status,
        }

        const newFormData = [...tableData];

        const index = tableData.findIndex((data) => data.id === editStudentId);

        newFormData[index] = editedFormData;

        saveToLocalStorage('studentsData', newFormData);
        setEditStudentId(null);
    }

    // Edit Mode Method
    const handleCancelClick = () => {
        setEditStudentId(null);
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <form onSubmit={handleEditFormSubmit}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table aria-label="sticky table" id="table-id">
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
                        {   // If search filter fails to find data row, display error message
                            searchBtnFlag === "Failed" ? (
                                <TableRow sx={{ height: "5rem" }}>
                                    <TableCell align="center" colSpan={9}>
                                        <Typography display="flex" justifyContent="center" alignItems="center">
                                            <SentimentVeryDissatisfiedIcon /> &nbsp; No Data Found!
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                displayTableData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <>
                                                {editStudentId === row.id ?
                                                    (<EditableRow row={row} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit} handleCancelClick={handleCancelClick} key={row.id} />)
                                                    : (<ReadOnlyRow row={row} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} key={row.id} searchBtnFlag={searchBtnFlag} />)
                                                }
                                            </>
                                        )
                                    })
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={displayTableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </form>
    );
}

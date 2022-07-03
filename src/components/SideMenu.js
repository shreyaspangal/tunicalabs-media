import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';

export default function SideMenu() {
  let location = window.location.pathname;

  return (
    <Box display="flex" flexDirection='column' width='250px'>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <h2 style={{ fontWeight: "400", color: "#808080" }}>Student</h2>
        < KeyboardArrowDownIcon sx={{ marginRight: ".8rem" }} />
      </Box>
      <Box textAlign="left">
        {/* View Student */}
        <Box display="flex" alignItems="center">
          <PeopleAltIcon fontSize="small" color={location === '/viewstudent' ? "error" : "disabled"} />
          <p style={{ paddingLeft: ".8rem" }}>
            {location === '/viewstudent' ? (
              <Link to="/viewstudent" style={{ textDecoration: 'none', color: "red" }}>
                View Student
              </Link>
            ) : (
              <Link to="/viewstudent" style={{ textDecoration: 'none', color: "#808080" }}>
                View Student
              </Link>
            )}
          </p>
        </Box>
        {/* Add Student */}
        <Box display="flex" alignItems="center" sx={{ borderBottom: "1px solid gray" }}>
          <GroupAddIcon fontSize="small" color={location === '/addstudent' ? "error" : "disabled"} />
          <p style={{ paddingLeft: ".8rem" }}>
            {location === '/addstudent' ? (
              <Link to="/addstudent" style={{ textDecoration: 'none', color: "red" }}>
                Add Student
              </Link>
            ) : (
              <Link to="/addstudent" style={{ textDecoration: 'none', color: "#808080" }}>
                Add Student
              </Link>
            )}
          </p>
        </Box>
      </Box>
    </Box>
  );
}

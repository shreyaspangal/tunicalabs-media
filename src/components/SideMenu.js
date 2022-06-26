// import React from 'react'

// export default function SideMenu() {
//   return (
//     <div className='side-menu'>
//       <h1>SideMenu</h1>
//     </div>
//   )
// }

import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Box from "@mui/material/Box";

export default function SideMenu() {
  return (
    // Container
    <Box display="flex" flexDirection='column' width='250px' >
      {/* Title */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <h2>Student</h2>
        < KeyboardArrowDownIcon sx={{ marginRight: ".8rem" }} />
      </Box>
      {/* Sub Titles */}
      <Box textAlign="left">
        {/* Tab 1 */}
        <Box display="flex" alignItems="center">
          <PeopleAltIcon fontSize="small" />
          <p style={{ paddingLeft: ".8rem" }}> View Student</p>
        </Box>
        {/* Tab 2 */}
        <Box display="flex" alignItems="center" sx={{ borderBottom: "1px solid gray" }}>
          <GroupAddIcon fontSize="small" />
          <p style={{ paddingLeft: ".8rem" }}> Add Student</p>
        </Box>
      </Box>
    </Box>
  );
}

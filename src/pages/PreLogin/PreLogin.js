import React from 'react';
import Signup from '../../components/Signup';
import Signin from '../../components/Signin';
import { Box } from '@mui/material';
import './PreLogin.css'


const checkboxColor = "#781715";


export default function PreLogin() {
  return (
    <Box display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"

    >
      <Box className="content">
        {/* <Signup /> */}
        <Signin />
      </Box>
    </Box>
  )
}

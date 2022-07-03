import React from 'react';
import Signup from '../../components/Signup';
import Signin from '../../components/Signin';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import './PreLogin.css'


export default function PreLogin() {

  let location = window.location.pathname;

  return (
    <Box>
      <Header />
      <Box className="content">
        {location === "/signup" ? (
          <Signup />
        ) : (
          <Signin />
        )}
      </Box>
    </Box>
  )
}

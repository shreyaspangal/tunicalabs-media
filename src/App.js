import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';


import Header from './components/Header';
import SideMenu from './components/SideMenu';
import ViewStudents from './pages/Students/ViewStudents';
import AddStudent from './pages/Students/AddStudents';
import PreLogin from './pages/PreLogin/PreLogin';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Margin } from '@mui/icons-material';
import './App.css';

const flag = false;

function App() {

  return (
    <Box height='100%'>
      <Box>
        <Header />
      </Box>
      {flag ? (
        <Box display='flex'>
          <Box display="flex" height='100vh' sx={{ marginLeft: "2rem", borderRight: "1px solid black" }}>
            <SideMenu />
          </Box>
          <Box sx={{ marginLeft: "2rem" }} width="100%">
            {/* <ViewStudents /> */}
            {/* <AddStudent /> */}
          </Box>
        </Box>
      ) :
        (
          <PreLogin />
        )
      }
      <CssBaseline />
    </Box>
  );
}

export default App;

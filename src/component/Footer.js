import React from "react";
import  Button from '@mui/material/Button';
import Toolbar from  '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';



export default function Footer (){
    return(
        <>
       <AppBar position="static">
  <Toolbar style={{ backgroundColor: '#800080' }}>
    <Button color="inherit">&copy;ASAC Tasneem-Developer 2022</Button>
  </Toolbar>
</AppBar>
        </>
    )
}



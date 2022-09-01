import React from "react";
import Toolbar from  '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

export default function Header (props){
  const style={
    fontSize: 'xxx-large',
    fontFamily: 'monospace',
    color: '#fff',
    height:'60px',
        
  };
return (
    <>
    <AppBar style={style} position="static">
        <Toolbar>
           <h3>Tasneem Store</h3>
        </Toolbar>

    </AppBar>
    </>
)
}



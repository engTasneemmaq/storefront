import React from "react";
import Toolbar from  '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

export default function Header(props) {

  return (
    <>
      <AppBar style={{ backgroundColor: '#800080' }} className="header_container" position="static">
        <Toolbar>
          <h3>Tasneem Store ™️</h3>
        </Toolbar>
      </AppBar>
    </>
  )
}



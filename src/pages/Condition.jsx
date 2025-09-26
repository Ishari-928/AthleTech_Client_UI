import React from 'react';
import { Box } from "@mui/material";

import conditionImg from "../assets/images/conditioon.jpg";


const Condition = () => {
    return (
        <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="110vh" 
    >
        <img 
            src={conditionImg} 
            alt="MORA Kid Athlete Event" 
            style={{ width: "100%", maxWidth: "600px", marginTop: "50px"}} 
        />
    </Box>
    );
  };
  
  export default Condition;
  

import React from 'react';
import { Paper, Typography } from '@mui/material'

function Rakiwe({rakinKvli,furiazgen}){
    return(
        <Paper  sx={{display: 'flex', width:'100%', justifyContent:'center', alignItems:'center',color:furiazgen}}  elevation={3}>
            <Typography>
            {rakinKvli}
            </Typography>   

        </Paper>
    )

};
export default Rakiwe;
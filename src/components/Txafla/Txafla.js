import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';





export default function Txafla({wif,logko}) {
  
  return (
    <Box sx={{ height: 400, width: '700px',display:'flex',justifyContent:'center' }}>
      <DataGrid
        rows={wif}
        columns={logko}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowHeight={() => 'auto'}
      />
    </Box>
  );
}
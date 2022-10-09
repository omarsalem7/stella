import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { rows, columns } from '../data/route1';

export default function Table() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

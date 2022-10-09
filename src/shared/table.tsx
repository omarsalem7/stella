import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from '../data/route1';
import { FilterInputProps } from './filter.types';

export default function Table({ columns }: FilterInputProps) {
  return (
    <>
      <div className="mobile">
        {columns.map((col, index) => (
          <div key={Math.random() * 100}>
            Column {index + 1}: {col.field}
            <hr />
          </div>
        ))}
      </div>
      {window.innerWidth >= 640 && (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={3}
            rowsPerPageOptions={[3]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      )}
    </>
  );
}

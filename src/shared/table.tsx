import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { columnsType } from './filter.types';

type TableProps = {
  columns: columnsType;
  rows: {
    id: number;
    A1: string;
    A2: string;
    A3: string;
  }[];
};

export default function Table({ columns, rows }: TableProps) {
  // console.log('*********start**********');
  // console.log(columns);
  // console.log('*********end**********');
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

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type MultiProps = {
  handleMultiCheck: (data: string[]) => void;
  columns: {
    field: string;
    headerName: string;
  }[];
};

let checkStorage1 = localStorage.getItem('/route1');
let checkStorage2 = localStorage.getItem('/route2');
let storage1 = checkStorage1 ? JSON.parse(checkStorage1) : [];
let storage2 = checkStorage2 ? JSON.parse(checkStorage2) : [];
export default function MultipleSelect({
  columns,
  handleMultiCheck,
}: MultiProps) {
  const [multi, setMulti] = useState<string[]>([]);
  const location = useLocation();
  const handleChange = (event: SelectChangeEvent<typeof multi>) => {
    const {
      target: { value },
    } = event;
    setMulti(typeof value === 'string' ? value.split(',') : value);
  };
  useEffect(() => {
    handleMultiCheck(multi);
  }, [multi]);

  useEffect(() => {
    if (location.pathname === '/route1') setMulti(storage1);
    if (location.pathname === '/route2') setMulti(storage2);
  }, [storage1]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Filter columns
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={multi}
          onChange={handleChange}
          input={<OutlinedInput label="Filter columns" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {columns.map(({ headerName }) => (
            <MenuItem key={headerName} value={headerName}>
              <Checkbox checked={multi.indexOf(headerName) > -1} />
              <ListItemText primary={headerName} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

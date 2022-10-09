import { useState, useEffect } from 'react';
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
  }[];
};

let checkStorage = localStorage.getItem('filters');
let storage = checkStorage ? JSON.parse(checkStorage) : [];
export default function MultipleSelect({
  columns,
  handleMultiCheck,
}: MultiProps) {
  const [multi, setMulti] = useState<string[]>([]);

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
    setMulti(storage);
  }, [storage]);

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
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {columns.map(({ field }) => (
            <MenuItem key={field} value={field}>
              <Checkbox checked={multi.indexOf(field) > -1} />
              <ListItemText primary={field} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

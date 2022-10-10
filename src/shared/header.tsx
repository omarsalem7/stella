import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MultipleSelect from './multipleSelect';
import CheckBoxsFilter from './checkBoxsFilter';
import styles from './header.module.css';
import { filterColumns, arrayRotate } from '../utils';
import { columnsType } from './filter.types';

type HeaderPropType = {
  handleFilters: (data: columnsType) => void;
  filter: columnsType;
  columns: columnsType;
};

const Header = ({ handleFilters, filter, columns }: HeaderPropType) => {
  const location = useLocation();
  const [openf, setOpenf] = useState(false);
  const [openc, setOpenc] = useState(false);
  const [checks, setChecks] = useState<string[]>([]);
  const [multiChecks, setMultiChecks] = useState<string[]>([]);
  const handleChangeChecks = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setChecks((prev) => [...prev, value]);
    } else {
      setChecks(checks.filter((ch) => ch !== value));
    }
  };
  const handleMultiCheck = (data: string[]) => {
    setMultiChecks(data);
  };

  const handleStorage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      localStorage.setItem(location.pathname, JSON.stringify(multiChecks));
    } else {
      localStorage.removeItem(location.pathname);
      // localStorage.removeItem(location.pathname);
    }
  };

  return (
    <div className={styles.headerBtns}>
      <button onClick={() => setOpenc(true)}>Customize display</button>
      <button onClick={() => setOpenf(true)}>Filter</button>
      <Modal open={openc} onClose={() => setOpenc(false)}>
        <Box sx={style}>
          <h2>Customize Modal</h2>
          <div className={styles.formHandler}>
            <CheckBoxsFilter
              handleChange={handleChangeChecks}
              columns={columns}
            />
            <div className={styles.btnNavigation}>
              <button
                onClick={() => {
                  handleFilters([...arrayRotate(filter)]);
                }}
              >
                Up
              </button>
              <button
                onClick={() => {
                  handleFilters([...arrayRotate(filter, true)]);
                }}
              >
                Down
              </button>
            </div>
          </div>
          <div>
            <Button onClick={() => handleFilters(columns)}>Reset</Button>
            <Button
              onClick={() => handleFilters(filterColumns(columns, checks))}
            >
              Ok
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal open={openf} onClose={() => setOpenf(false)}>
        <Box sx={style}>
          <h2>Filter Modal</h2>
          <MultipleSelect
            handleMultiCheck={handleMultiCheck}
            columns={columns}
          />
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox_id"
            value="value"
            onChange={handleStorage}
          />
          <label htmlFor="checkbox_id">Save for later</label>
          <div>
            <Button onClick={() => handleFilters(columns)}>Reset</Button>
            <Button
              onClick={() => handleFilters(filterColumns(columns, multiChecks))}
            >
              Apply
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '7px',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default Header;

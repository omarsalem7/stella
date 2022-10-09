import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MultipleSelect from './multipleSelect';
import CheckBoxsFilter from './checkBoxsFilter';
import styles from './header.module.css';
import { columns } from '../data/route1';

const Header = () => {
  const [openf, setOpenf] = useState(false);
  const [openc, setOpenc] = useState(false);

  return (
    <div className={styles.headerBtns}>
      <button onClick={() => setOpenc(true)}>Customize display</button>
      <button onClick={() => setOpenf(true)}>Filter</button>
      <Modal
        open={openc}
        onClose={() => setOpenc(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>customize modal</h2>
          <CheckBoxsFilter columns={columns} />
          <div>
            <Button onClick={() => setOpenc(false)}>Cancel</Button>
            <Button>Ok</Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openf}
        onClose={() => setOpenf(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>filter modal</h2>
          <MultipleSelect columns={columns} />
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox_id"
            value="value"
          />
          <label htmlFor="checkbox_id">Save for later</label>
          <div>
            <Button>Reset</Button>
            <Button>Apply</Button>
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

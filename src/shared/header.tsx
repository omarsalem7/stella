import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MultipleSelect from './multipleSelect';
import styles from './header.module.css';

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
          <Button onClick={() => setOpenc(false)}>Cancel</Button>
          <Button>Ok</Button>
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
          <MultipleSelect />
          <Button onClick={() => setOpenf(false)}>Cancel</Button>
          <Button>Ok</Button>
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

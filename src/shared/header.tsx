import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
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
        <Box sx={style}>customize modal</Box>
      </Modal>
      <Modal
        open={openf}
        onClose={() => setOpenf(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>filter modal</Box>
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
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default Header;

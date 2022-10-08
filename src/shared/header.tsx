import styles from './header.module.css';
const Header = () => {
  return (
    <div className={styles.headerBtns}>
      <button>Customize display</button>
      <button>Filter</button>
    </div>
  );
};

export default Header;

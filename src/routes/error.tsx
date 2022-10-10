import { useRouteError } from 'react-router-dom';
import styles from './error.module.css';

const Error = () => {
  const { statusText, message }: any = useRouteError();
  //   console.error(error);
  return (
    <div className={styles.error}>
      <h1>Oops!</h1>
      <p>
        <i>{statusText || message}</i>
      </p>
      <p>
        Our guard dog is working hard to fix that but in the meantime, please
        let him enjoy his coffee
      </p>

      <div>
        <img
          width="100%"
          src="https://dashboard.microverse.org/assets/this-is-fine-58d6f8740ed69396a34da5c219fc18a6b2b9b17c1907eef01f6efab4797087df.png"
          alt="Page not found"
        />
      </div>
    </div>
  );
};

export default Error;

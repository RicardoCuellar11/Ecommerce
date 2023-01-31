import Backdrop from 'components/Backdrop';
import LoaderImage from 'assets/images/loader.gif';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';

const Loader = ({
  noPortal,
  backdropClassName,
  wrapperClassName,
  loaderClassName,
}) => {
  const backdropElement = document.getElementById('backdrop');
  const overlaysElement = document.getElementById('overlays');

  if (noPortal) {
    return (
      <>
        <div className={`${styles.loader_wrapper} ${wrapperClassName}`}>
          <img
            className={`${styles.loader} ${loaderClassName}`}
            src={LoaderImage}
            alt="Loader"
          />
        </div>
      </>
    );
  }

  return (
    <>
      {createPortal(
        <Backdrop className={backdropClassName} />,
        backdropElement
      )}
      {createPortal(
        <div className={`${styles.loader_wrapper} ${wrapperClassName}`}>
          <img
            className={`${styles.loader} ${loaderClassName}`}
            src={LoaderImage}
            alt=""
          />
        </div>,
        overlaysElement
      )}
    </>
  );
};

export default Loader;

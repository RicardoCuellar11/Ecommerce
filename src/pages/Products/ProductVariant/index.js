import styles from './index.module.scss';

const ProductVariant = ({ id, _thumbnail, selectedVariantId }) => {


  let shouldAddEventHandler = false;
  if (selectedVariantId !== id) {
    shouldAddEventHandler = true;
  }

  const handleSelectVariant = () => {
    if (id === selectedVariantId) {
      return;
    }

  };

  let variantStyles =
    selectedVariantId === id ? styles.thumbnail_selected : styles.thumbnail;

  const thumbnail = require(`assets/${_thumbnail}`);

  return (
    <img
      className={variantStyles}
      onClick={shouldAddEventHandler ? handleSelectVariant : undefined}
      src={thumbnail}
      alt=""
    />
  );
};

export default ProductVariant;

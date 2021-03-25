import styles from '../css/CartPage.module.css';

const EmptyCart = () => {
  return (
        <div className={styles["div"]}>
          <div className={styles.EmptyCartBox}>
            <img src="/assets/icons/emptyBasket.svg" alt="Empty Basket Icon" />
            <span>oops!</span>
            <p>Your Cart Is Empty</p>
          </div>
        </div>
  );
}

export default EmptyCart;
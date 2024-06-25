import React from "react";
import styles from "./index.module.css";

const PriceSubmt = () => {
  return (
    <div className={`boxWrapper ${styles.main}`}>
      <div className={styles.totalWrapper}>
        <span>Total</span>
        <input type="text" name="price" className="inputField" />
      </div>
      <div className={styles.btns}>
        <button type="reset" id={styles.resetBtn}>
          Reset
        </button>
        <button type="submit" id={styles.submitBtn}>
          Done
        </button>
      </div>
    </div>
  );
};

export default PriceSubmt;

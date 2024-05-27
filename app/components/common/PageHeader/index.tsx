import React from "react";
import styles from "./index.module.css";

const PageHeader = () => {
  return (
    <div className={styles.main}>
      <h1>Add Patient</h1>
      <div>
        {/* user image */}
        <span>Pabodha Pathirana</span>
      </div>
    </div>
  );
};

export default PageHeader;

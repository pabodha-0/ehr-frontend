import React from "react";
import styles from "./index.module.css";

const MedicalHistory = () => {
  const medicalHistoryChecks = [
    {
      name: "DM",
      inputName: "dm",
    },
    {
      name: "Epilepsy",
      inputName: "epilepsy",
    },
    {
      name: "HT",
      inputName: "ht",
    },
    {
      name: "Cancer",
      inputName: "cancer",
    },
    {
      name: "IHD",
      inputName: "ihd",
    },
    {
      name: "BA",
      inputName: "ba",
    },
    {
      name: "CVA",
      inputName: "cva",
    },
  ];

  const socialHistoryChecks = [
    {
      name: "Alcoholic",
      inputName: "alcoholic",
    },
    {
      name: "Smoking",
      inputName: "smoking",
    },
  ];

  const surgicalHistoryChecks = [
    {
      name: "Surgery",
      inputName: "hadSurgery",
    },
  ];
  return (
    <div className={`boxWrapper ${styles.main}`}>
      <div className={styles.historyWrapper}>
        <h5>Medical History</h5>
        <div className={styles.grid}>
          {medicalHistoryChecks.map(({ name, inputName }, i) => (
            <div className={styles.checkboxWrapper} key={i}>
              <span>{name}</span>
              <hr />
              <input type="checkbox" className="ui-checkbox" name={inputName} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.historyWrapper}>
        <h5>Social History</h5>
        <div className={styles.grid}>
          {socialHistoryChecks.map(({ name, inputName }, i) => (
            <div className={styles.checkboxWrapper} key={i}>
              <span>{name}</span>
              <hr />
              <input type="checkbox" className="ui-checkbox" name={inputName} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.historyWrapper}>
        <h5>Surgical History</h5>
        <div className={styles.grid}>
          {surgicalHistoryChecks.map(({ name, inputName }, i) => (
            <div className={styles.checkboxWrapper} key={i}>
              <span>{name}</span>
              <hr />
              <input type="checkbox" className="ui-checkbox" name={inputName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;

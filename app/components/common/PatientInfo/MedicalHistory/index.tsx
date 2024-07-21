import React from "react";
import styles from "./index.module.css";
import { FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const MedicalHistory = ({
  showMedicalHistory,
  setShowMedicalHistory,
  existingUser,
  allDisabled,
}: {
  showMedicalHistory: boolean;
  setShowMedicalHistory: Function | null;
  existingUser?: boolean;
  allDisabled?: boolean;
}) => {
  const patient = useSelector(
    (state: RootState) => state.patient.activePatient?.data
  );

  const medicalHistoryChecks = [
    {
      name: "DM",
      inputName: "patientDM",
      defaultValue: patient?.medicalHistory.dm,
    },
    {
      name: "Epilepsy",
      inputName: "patientEpilepsy",
      defaultValue: patient?.medicalHistory.epilepsy,
    },
    {
      name: "HT",
      inputName: "patientHT",
      defaultValue: patient?.medicalHistory.ht,
    },
    {
      name: "Cancer",
      inputName: "patientCancer",
      defaultValue: patient?.medicalHistory.cancer,
    },
    {
      name: "IHD",
      inputName: "patientIHD",
      defaultValue: patient?.medicalHistory.ihd,
    },
    {
      name: "BA",
      inputName: "patientBA",
      defaultValue: patient?.medicalHistory.ba,
    },
    {
      name: "CVA",
      inputName: "patientCVA",
      defaultValue: patient?.medicalHistory.cva,
    },
  ];

  const socialHistoryChecks = [
    {
      name: "Alcoholic",
      inputName: "patientIsAlcoholic",
      defaultValue: patient?.socialHistory.alcoholic,
    },
    {
      name: "Smoking",
      inputName: "patientIsSmoking",
      defaultValue: patient?.socialHistory.smoking,
    },
  ];

  const surgicalHistoryChecks = [
    {
      name: "Surgery",
      inputName: "patientHadSurgery",
      defaultValue: patient?.surgicalHistory.surgery,
    },
  ];

  return (
    <div className={`boxWrapper ${styles.main}`}>
      <div className={styles.historyWrapper}>
        <div
          className={styles.headerBox}
          onClick={() => setShowMedicalHistory && setShowMedicalHistory(false)}
        >
          <h5>Medical History</h5>
          <FaChevronUp
            className={`${styles.icon} ${
              showMedicalHistory ? "" : styles.iconReverse
            }`}
          />
        </div>

        <div className={styles.grid}>
          {medicalHistoryChecks.map(({ name, inputName, defaultValue }, i) => (
            <div
              key={i}
              className={`
                ${styles.checkboxWrapper} 
                ${existingUser && !defaultValue ? styles.hiddenCheckbox : ""}`}
            >
              <span>{name}</span>
              <hr />
              <input
                type="checkbox"
                className="ui-checkbox"
                name={inputName}
                value="true"
                defaultChecked={defaultValue}
                disabled={allDisabled}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.historyWrapper}>
        <h5>Social History</h5>
        <div className={styles.grid}>
          {socialHistoryChecks.map(({ name, inputName, defaultValue }, i) => (
            <div
              key={i}
              className={`
                ${styles.checkboxWrapper} 
                ${existingUser && !defaultValue ? styles.hiddenCheckbox : ""}`}
            >
              <span>{name}</span>
              <hr />
              <input
                type="checkbox"
                className="ui-checkbox"
                name={inputName}
                value="true"
                defaultChecked={defaultValue}
                disabled={allDisabled}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.historyWrapper}>
        <h5>Surgical History</h5>
        <div className={styles.grid}>
          {surgicalHistoryChecks.map(({ name, inputName, defaultValue }, i) => (
            <div
              key={i}
              className={`
                ${styles.checkboxWrapper} 
                ${existingUser && !defaultValue ? styles.hiddenCheckbox : ""}`}
            >
              <span>{name}</span>
              <hr />
              <input
                type="checkbox"
                className="ui-checkbox"
                name={inputName}
                value="true"
                defaultChecked={defaultValue}
                disabled={allDisabled}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;

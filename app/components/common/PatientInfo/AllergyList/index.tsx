"use client";

import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const AllergyList = () => {
  const patient = useSelector(
    (state: RootState) => state.patient.activePatient?.data
  );

  return (
    <div className={`boxWrapper ${styles.main}`}>
      <h5>Allergies</h5>
      <div className={styles.allergyWrapper}>
        <div className={styles.allergies}>
          <h6>Food Allergies</h6>
          {patient?.foodAllergies.map((allergy, i) => (
            <div key={i}>{allergy.name}</div>
          ))}
        </div>
        <div className={styles.allergies}>
          <h6>Drug Allergies</h6>
          {patient?.drugAllergies.map((allergy, i) => (
            <div key={i}>{allergy.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllergyList;

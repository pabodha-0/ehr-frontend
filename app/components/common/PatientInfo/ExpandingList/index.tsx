"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import MedicalHistory from "../MedicalHistory";
import Allergies from "../Allergies";
import FamilyHistory from "../FamilyHistory";
import Investigations from "../Investigations";

const ExpandingList = () => {
  const [showMedicalHistory, setShowMedicalHistory] = useState(false);
  const [showAllergies, setShowAllergies] = useState(false);
  const [showFamilyHistory, setShowFamilyHistory] = useState(false);
  const [showInvestigations, setShowInvestigations] = useState(false);

  return (
    <div className={styles.main}>
      <div className={showMedicalHistory ? "" : styles.hide}>
        <div className={styles.transition}>
          <MedicalHistory />
        </div>
      </div>

      <div className={showAllergies ? "" : styles.hide}>
        <div className={styles.transition}>
          <Allergies />
        </div>
      </div>

      <div className={showFamilyHistory ? "" : styles.hide}>
        <div className={styles.transition}>
          <FamilyHistory />
        </div>
      </div>

      <div className={showInvestigations ? "" : styles.hide}>
        <div className={styles.transition}>
          <Investigations />
        </div>
      </div>
      <div className={styles.grid}>
        <h5
          className="boxWrapper"
          onClick={() => setShowMedicalHistory(!showMedicalHistory)}
        >
          Medical History
        </h5>
        <h5
          className="boxWrapper"
          onClick={() => setShowAllergies(!showAllergies)}
        >
          Allergies
        </h5>
        <h5
          className="boxWrapper"
          onClick={() => setShowFamilyHistory(!showFamilyHistory)}
        >
          Family History
        </h5>
        <h5
          className="boxWrapper"
          onClick={() => setShowInvestigations(!showInvestigations)}
        >
          Investigations
        </h5>
      </div>
    </div>
  );
};

export default ExpandingList;

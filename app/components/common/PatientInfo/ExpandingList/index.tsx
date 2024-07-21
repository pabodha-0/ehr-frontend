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
      <div className={showMedicalHistory ? styles.unhide : styles.hide}>
        <div className={styles.transition}>
          <MedicalHistory
            showMedicalHistory={showMedicalHistory}
            setShowMedicalHistory={setShowMedicalHistory}
          />
        </div>
      </div>

      <div className={showAllergies ? styles.unhide : styles.hide}>
        <div className={styles.transition}>
          <Allergies
            showAllergies={showAllergies}
            setShowAllergies={setShowAllergies}
          />
        </div>
      </div>

      <div className={showFamilyHistory ? styles.unhide : styles.hide}>
        <div className={styles.transition}>
          <FamilyHistory
            showFamilyHistory={showFamilyHistory}
            setShowFamilyHistory={setShowFamilyHistory}
          />
        </div>
      </div>

      <div className={showInvestigations ? styles.unhide : styles.hide}>
        <div className={styles.transition}>
          <Investigations
            showInvestigations={showInvestigations}
            setShowInvestigations={setShowInvestigations}
          />
        </div>
      </div>
      <div className={styles.grid}>
        <h5
          className={`boxWrapper ${!showMedicalHistory ? "" : styles.hide}`}
          onClick={() => setShowMedicalHistory(!showMedicalHistory)}
        >
          Medical History
        </h5>
        <h5
          className={`boxWrapper ${!showAllergies ? "" : styles.hide}`}
          onClick={() => setShowAllergies(!showAllergies)}
        >
          Allergies
        </h5>
        <h5
          className={`boxWrapper ${!showFamilyHistory ? "" : styles.hide}`}
          onClick={() => setShowFamilyHistory(!showFamilyHistory)}
        >
          Family History
        </h5>
        <h5
          className={`boxWrapper ${!showInvestigations ? "" : styles.hide}`}
          onClick={() => setShowInvestigations(!showInvestigations)}
        >
          Investigations
        </h5>
      </div>
    </div>
  );
};

export default ExpandingList;

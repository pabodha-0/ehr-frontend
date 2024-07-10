"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { InputWithSuggestion } from "../../InputWithSuggestion";
import { FaPlus } from "react-icons/fa6";

const Diagnosis = () => {
  const [diagnosisAmount, setDiagnosisAmount] = useState(4);
  const diagnosisSuggestions = ["k", "l"];

  return (
    <div className="boxWrapper">
      <h5>Diagnosis</h5>
      <div className={styles.grid}>
        {Array.from(Array(diagnosisAmount)).map((_, i) => (
          <div key={i}>
            <InputWithSuggestion
              inputName="patientDiagnoses"
              suggestionList={diagnosisSuggestions}
            />
          </div>
        ))}
        <div
          className={styles.addNew}
          onClick={() => setDiagnosisAmount(diagnosisAmount + 1)}
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;

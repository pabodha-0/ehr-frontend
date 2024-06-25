"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { InputWithSuggestion } from "../../InputWithSuggestion";
import { FaPlus } from "react-icons/fa6";

const Treatment = () => {
  const [internalDrugsAmount, setInternalDrugsAmount] = useState(5);
  const [externalDrugsAmount, setExternalDrugsAmount] = useState(2);
  return (
    <div className="boxWrapper">
      <h5>Diagnosis</h5>
      <div className={styles.drugsGridWrapper}>
        <div className={styles.internalDrugsGrid}>
          <h6>Drug (Internal)</h6>
          <span></span>
          <h6>Dosage</h6>
          <span></span>
          <h6>Frequency</h6>
          <span></span>
          <h6>Days</h6>
          <span></span>
          <h6>Qty.</h6>
          <h6>Exp.</h6>
        </div>
        {Array.from(Array(internalDrugsAmount)).map((_, i) => (
          <div className={styles.internalDrugsGrid} key={i}>
            <InputWithSuggestion
              inputName="internalDrug"
              suggestionList={["k"]}
            />
            <hr />
            <InputWithSuggestion inputName="dosage" suggestionList={["k"]} />
            <hr />
            <InputWithSuggestion inputName="frequency" suggestionList={["k"]} />
            <hr />
            <input type="text" className="inputField" />
            <hr />
            <input type="text" className="inputField" disabled />
            <input type="text" className="inputField" disabled />
          </div>
        ))}
        <div
          className={styles.addNew}
          onClick={() => setInternalDrugsAmount(internalDrugsAmount + 1)}
        >
          <FaPlus />
        </div>
      </div>
      <div className={styles.drugsGridWrapper}>
        <div className={styles.externalDrugsGrid}>
          <h6>Drug (External)</h6>
          <span></span>
          <h6>Dosage</h6>
          <span></span>
          <h6>Frequency</h6>
          <span></span>
          <h6>Days</h6>
          <span></span>
          <h6>Qty.</h6>
        </div>
        {Array.from(Array(externalDrugsAmount)).map((_, i) => (
          <div className={styles.externalDrugsGrid} key={i}>
            <InputWithSuggestion
              inputName="internalDrug"
              suggestionList={["k"]}
            />
            <hr />
            <InputWithSuggestion inputName="dosage" suggestionList={["k"]} />
            <hr />
            <InputWithSuggestion inputName="frequency" suggestionList={["k"]} />
            <hr />
            <input type="text" className="inputField" />
            <hr />
            <input type="text" className="inputField" disabled />
          </div>
        ))}
        <div
          className={styles.addNew}
          onClick={() => setExternalDrugsAmount(externalDrugsAmount + 1)}
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default Treatment;

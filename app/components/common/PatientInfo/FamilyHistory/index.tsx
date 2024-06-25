"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { FaPlus } from "react-icons/fa6";
import {FaChevronUp} from "react-icons/fa";

const FamilyHistory = ({showFamilyHistory, setShowFamilyHistory}: {showFamilyHistory: boolean, setShowFamilyHistory: Function}) => {
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
    {
      name: "Alcoholic",
      inputName: "alcoholic",
    },
    {
      name: "Smoking",
      inputName: "smoking",
    },
  ];

  const [familyTree, setFamilyTree] = useState(["Mother", "Father", "Child"]);

  return (
      <div className="boxWrapper">
        <div className={styles.headerBox} onClick={() => setShowFamilyHistory(false)}>
          <h5>Family History</h5>
          <FaChevronUp className={`${styles.icon} ${showFamilyHistory ? "" : styles.iconReverse}`}/>
        </div>

        <div className={styles.mainGrid}>
          {familyTree.map((familyMember, i) => (
              <div key={i}>
                <h6>
                  {i + 1}. {familyMember}
                </h6>
                <div className={styles.subGrid}>
                  <div className={styles.inputWrapper}>
                    <h6>Name</h6>
                    <input type="text" className="inputField" name={`${familyMember.toLowerCase()}-name`}/>
                  </div>
                  <div className={styles.inputWrapper}>
                    <h6>Occupation</h6>
                    <input type="text" className="inputField" name={`${familyMember.toLowerCase()}-occupation`}/>
                  </div>
                </div>
                <div className={styles.subGrid}>
                  {medicalHistoryChecks.map(({name, inputName}, j) => (
                      <div className={styles.checkboxWrapper} key={j}>
                        <span>{name}</span>
                        <hr/>
                        <input
                            type="checkbox"
                            className="ui-checkbox"
                            name={`${familyMember.toLowerCase()}-${inputName}`}
                        />
                      </div>
                  ))}
                </div>
              </div>
          ))}

          <div
              className={styles.addNew}
              onClick={() => setFamilyTree((prevState) => [...prevState, "Child"])}
          >
            <FaPlus className={styles.icon}/>
            <span>Add child</span>
          </div>
        </div>
      </div>
  );
};

export default FamilyHistory;

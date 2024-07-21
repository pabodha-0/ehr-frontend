"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { FaPlus } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import FamilyContainer from "./FamilyContainer";

const FamilyHistory = ({
  showFamilyHistory,
  setShowFamilyHistory,
  existingUser,
  allDisabled,
}: {
  showFamilyHistory: boolean;
  setShowFamilyHistory: Function | null;
  existingUser?: boolean;
  allDisabled?: boolean;
}) => {
  const [familyTree, setFamilyTree] = useState(["Mother", "Father", "Child"]);

  const patient = useSelector(
    (state: RootState) => state.patient.activePatient?.data
  );

  return (
    <div className="boxWrapper">
      <div
        className={styles.headerBox}
        onClick={() => setShowFamilyHistory && setShowFamilyHistory(false)}
      >
        <h5>Family History</h5>
        <FaChevronUp
          className={`${styles.icon} ${
            showFamilyHistory ? "" : styles.iconReverse
          }`}
        />
      </div>

      <div className={styles.mainGrid}>
        {familyTree.map((familyMember, i) => {
          if (existingUser && patient?.relations.length != 0) {
            return patient?.relations?.map((relation) => {
              if (familyMember == relation.relation) {
                return (
                  <div key={i}>
                    <FamilyContainer
                      iteration={i}
                      familyMember={familyMember}
                      familyMemberDetails={relation}
                      allDisabled
                    />
                  </div>
                );
              }
            });
          } else {
            return (
              <div key={i}>
                <FamilyContainer iteration={i} familyMember={familyMember} />
              </div>
            );
          }
        })}

        {!allDisabled && (
          <div
            className={styles.addNew}
            onClick={() =>
              setFamilyTree((prevState) => [...prevState, "Child"])
            }
          >
            <FaPlus className={styles.icon} />
            <span>Add child</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyHistory;

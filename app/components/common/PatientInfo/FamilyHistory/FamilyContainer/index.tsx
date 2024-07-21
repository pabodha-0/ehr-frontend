import React from "react";
import styles from "./index.module.css";
import { Relation } from "@/app/redux/types/PatientStateTypes";

const FamilyContainer = ({
  iteration,
  familyMember,
  allDisabled,
  familyMemberDetails,
}: {
  iteration: number;
  familyMember: string;
  allDisabled?: boolean;
  familyMemberDetails?: Relation;
}) => {
  const medicalHistoryChecks = [
    {
      name: "DM",
      inputName: "DM",
      defaultValue: familyMemberDetails?.relatedPatient.medicalHistory.dm,
    },
    {
      name: "Epilepsy",
      inputName: "Epilepsy",
      defaultValue: familyMemberDetails?.relatedPatient.medicalHistory.epilepsy,
    },
    {
      name: "HT",
      inputName: "HT",
      defaultValue: familyMemberDetails?.relatedPatient.medicalHistory.ht,
    },
    {
      name: "Cancer",
      inputName: "Cancer",
      defaultValue: familyMemberDetails?.relatedPatient.medicalHistory.cancer,
    },
    {
      name: "IHD",
      inputName: "IHD",
      defaultValue: familyMemberDetails?.relatedPatient.medicalHistory.ihd,
    },
    {
      name: "BA",
      inputName: "BA",
      defaultValue: familyMemberDetails?.relatedPatient.medicalHistory.ba,
    },
    {
      name: "CVA",
      inputName: "CVA",
      defaultValue: familyMemberDetails?.relatedPatient.medicalHistory.cva,
    },
    {
      name: "Alcoholic",
      inputName: "Alcoholic",
      defaultValue: familyMemberDetails?.relatedPatient.socialHistory.alcoholic,
    },
    {
      name: "Smoking",
      inputName: "Smoking",
      defaultValue: familyMemberDetails?.relatedPatient.socialHistory.smoking,
    },
  ];

  return (
    <div>
      <h6>
        {iteration + 1}. {familyMember}
      </h6>
      <div className={styles.subGrid}>
        <div className={styles.inputWrapper}>
          <h6>Name</h6>
          <input
            type="text"
            className="inputField"
            name={`${familyMember.toLowerCase()}Name`}
            defaultValue={familyMemberDetails?.relatedPatient.name}
            disabled={allDisabled}
          />
        </div>
        <div className={styles.inputWrapper}>
          <h6>Occupation</h6>
          <input
            type="text"
            className="inputField"
            name={`${familyMember.toLowerCase()}Occupation`}
            defaultValue={familyMemberDetails?.relatedPatient.occupation}
            disabled={allDisabled}
          />
        </div>
      </div>
      <div className={styles.subGrid}>
        {medicalHistoryChecks.map(({ name, inputName, defaultValue }, j) => {
          return (
            <div
              className={`
                ${styles.checkboxWrapper} 
                ${
                  familyMemberDetails && !defaultValue
                    ? styles.hiddenCheckbox
                    : ""
                }`}
              key={j}
            >
              <span>{name}</span>
              <hr />
              <input
                type="checkbox"
                className="ui-checkbox"
                name={`${familyMember.toLowerCase()}${inputName}`}
                value="true"
                defaultChecked={defaultValue}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FamilyContainer;

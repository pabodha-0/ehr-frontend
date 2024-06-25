import React from "react";
import styles from "./index.module.css";
import { InputWithSuggestion } from "../../InputWithSuggestion";
import {FaChevronUp} from "react-icons/fa";

const Investigations = ({showInvestigations, setShowInvestigations}: {showInvestigations: boolean, setShowInvestigations: Function}) => {
  const investigationTypes = [
    {
      name: "Full Blood Count",
      fields: [
        {
          name: "WBC",
          inputName: "WBC",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "N",
          inputName: "N",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "L",
          inputName: "L",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "E",
          inputName: "E",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "M",
          inputName: "M",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "B",
          inputName: "B",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Hemoglobin",
          inputName: "Hemoglobin",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "PCV",
          inputName: "PCV",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Platelets",
          inputName: "Platelets",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
      ],
    },
    {
      name: "Liver",
      fields: [
        {
          name: "Gamma GT",
          inputName: "GammaGT",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "SGOT (AST)",
          inputName: "SGOTAST",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "SGPT (ALT)",
          inputName: "SGPTALT",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Total Bilirubin",
          inputName: "TotalBilirubin",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Direct Bilirubin",
          inputName: "DirectBilirubin",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Indirect Bilirubin",
          inputName: "IndirectBilirubin",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
      ],
    },
    {
      name: "Lipid Profile",
      fields: [
        {
          name: "Total Cholesterol",
          inputName: "TotalCholesterol",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "S. TG",
          inputName: "STG",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "HDL",
          inputName: "HDL",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "LDL",
          inputName: "LDL",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "CHO/ HDL",
          inputName: "CHOHDL",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
      ],
    },
    {
      name: "Urine",
      fields: [
        {
          name: "Albumin",
          inputName: "Albumin",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Sugar",
          inputName: "Sugar",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Pus Cells",
          inputName: "PusCells",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Red Cells",
          inputName: "RedCells",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Urine Culture",
          inputName: "UrineCulture",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
      ],
    },
    {
      name: "Kidney Function Test",
      fields: [
        {
          name: "Serum Creatinine",
          inputName: "SerumCreatinine",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Blood Urea",
          inputName: "BloodUrea",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Serum Electrolytes - Na",
          inputName: "SerumElectrolytesNA",
          substring: "+",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Serum Electrolytes - K",
          inputName: "SerumElectrolytesK",
          substring: "+",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Serum Electrolytes - Cl",
          inputName: "SerumElectrolytesCL",
          substring: "-",
          suggestions: [],
          defaultValue: "Normal",
        },
      ],
    },
    {
      name: "Blood Sugar Test",
      fields: [
        {
          name: "FBS",
          inputName: "FBS",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "PPBS",
          inputName: "PPBS",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "RBS",
          inputName: "RBS",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "HBA1C",
          inputName: "HBA1C",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
      ],
    },
    {
      name: "Thyroid Function Test",
      fields: [
        {
          name: "TSH",
          inputName: "TSH",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "T3",
          inputName: "T3",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "T4",
          inputName: "T4",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
      ],
    },
    {
      name: "Other",
      fields: [
        {
          name: "ESR",
          inputName: "ESR",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "CRP",
          inputName: "CRP",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "ECG",
          inputName: "ECG",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
          metric: "k",
        },
      ],
    },
  ];

  return (
      <div className="boxWrapper">
        <div className={styles.headerBox} onClick={() => setShowInvestigations(false)}>
          <h5>Investigations</h5>
          <FaChevronUp className={`${styles.icon} ${showInvestigations ? "" : styles.iconReverse}`}/>
        </div>

        {investigationTypes.map((investigationType, i) => (
            <div key={i} className={styles.gridWrapper}>
              <h6>{investigationType.name}</h6>
              <div className={styles.grid}>
                {investigationType.fields.map((field, i) => {
                  if (field.suggestions.length == 0) {
                    return (
                        <div key={i} className={styles.subGridWrapper}>
                          <h6>
                            {field.name} <sup>{field.substring}</sup>
                          </h6>
                          <label className="inputField">
                            <input type="text" name={`patient${field.inputName}`}/>
                            <span>{field.metric}</span>
                          </label>
                        </div>
                    );
                  } else {
                    return (
                        <div key={i}>
                          <h6>{field.name}</h6>
                          <InputWithSuggestion
                              inputName={field.inputName}
                              suggestionList={field.suggestions}
                          />
                        </div>
                    );
                  }
                })}
              </div>
            </div>
        ))}
      </div>
  );
};

export default Investigations;

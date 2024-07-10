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
          metric: "mm<sup>3</sup>"
        },
        {
          name: "N",
          inputName: "N",
          suggestions: [],
          defaultValue: "Normal",
          metric: "%"
        },
        {
          name: "L",
          inputName: "L",
          suggestions: [],
          defaultValue: "Normal",
          metric: "%"
        },
        {
          name: "E",
          inputName: "E",
          suggestions: [],
          defaultValue: "Normal",
          metric: "%"
        },
        {
          name: "M",
          inputName: "M",
          suggestions: [],
          defaultValue: "Normal",
          metric: "%"
        },
        {
          name: "B",
          inputName: "B",
          suggestions: [],
          defaultValue: "Normal",
          metric: "%"
        },
        {
          name: "Hemoglobin",
          inputName: "Hemoglobin",
          suggestions: [],
          defaultValue: "Normal",
          metric: "g/dl"
        },
        {
          name: "PCV",
          inputName: "PCV",
          suggestions: [],
          defaultValue: "Normal",
          metric: "%"
        },
        {
          name: "Platelets",
          inputName: "Platelets",
          suggestions: [],
          defaultValue: "Normal",
          metric: "x10<sup>3</sup>/ul"
        },
      ],
    },
    {
      name: "Liver",
      fields: [
        {
          name: "Gamma GT",
          inputName: "GammaGT",
          suggestions: [],
          defaultValue: "Normal",
          metric: "1u/l"
        },
        {
          name: "SGOT (AST)",
          inputName: "SGOTAST",
          suggestions: [],
          defaultValue: "Normal",
          metric: "1u/l"
        },
        {
          name: "SGPT (ALT)",
          inputName: "SGPTALT",
          suggestions: [],
          defaultValue: "Normal",
          metric: "1u/l"
        },
        {
          name: "Total Bilirubin",
          inputName: "TotalBilirubin",
          suggestions: [],
          defaultValue: "Normal",
          metric: "umol/l"
        },
        {
          name: "Direct Bilirubin",
          inputName: "DirectBilirubin",
          suggestions: [],
          defaultValue: "Normal",
          metric: "umol/l"
        },
        {
          name: "Indirect Bilirubin",
          inputName: "IndirectBilirubin",
          suggestions: [],
          defaultValue: "Normal",
          metric: "umol/l"
        },
      ],
    },
    {
      name: "Lipid Profile",
      fields: [
        {
          name: "Total Cholesterol",
          inputName: "TotalCholesterol",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg"
        },
        {
          name: "S. TG",
          inputName: "STG",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg"
        },
        {
          name: "HDL",
          inputName: "HDL",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg"
        },
        {
          name: "LDL",
          inputName: "LDL",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg"
        },
        {
          name: "CHO/ HDL",
          inputName: "CHOHDL",
          suggestions: [],
          defaultValue: "Normal",
          metric: ""
        },
      ],
    },
    {
      name: "Urine",
      fields: [
        {
          name: "Albumin",
          inputName: "Albumin",
          suggestions: [],
          defaultValue: "Normal",
          metric: ""
        },
        {
          name: "Sugar",
          inputName: "Sugar",
          suggestions: [],
          defaultValue: "Normal",
          metric: ""
        },
        {
          name: "Pus Cells",
          inputName: "PusCells",
          suggestions: [],
          defaultValue: "Normal",
          metric: ""
        },
        {
          name: "Red Cells",
          inputName: "RedCells",
          suggestions: [],
          defaultValue: "Normal",
          metric: ""
        },
        {
          name: "Urine Culture",
          inputName: "UrineCulture",
          suggestions: [],
          defaultValue: "Normal",
          metric: ""
        },
      ],
    },
    {
      name: "Kidney Function Test",
      fields: [
        {
          name: "Serum Creatinine",
          inputName: "SerumCreatinine",
          suggestions: [],
          defaultValue: "Normal",
          metric: "umol/l"
        },
        {
          name: "Blood Urea",
          inputName: "BloodUrea",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg/dl"
        },
        {
          name: "Serum Electrolytes - Na<sup>+</sup>",
          inputName: "SerumElectrolytesNA",
          substring: "+",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mmol/l"
        },
        {
          name: "Serum Electrolytes - K<sup>+</sup>",
          inputName: "SerumElectrolytesK",
          substring: "+",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mmol/l"
        },
        {
          name: "Serum Electrolytes - Cl<sup>-</sup>",
          inputName: "SerumElectrolytesCL",
          substring: "-",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mmol/l"
        },
      ],
    },
    {
      name: "Blood Sugar Test",
      fields: [
        {
          name: "FBS",
          inputName: "FBS",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg/dl"
        },
        {
          name: "PPBS",
          inputName: "PPBS",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg/dl"
        },
        {
          name: "RBS",
          inputName: "RBS",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg/dl"
        },
        {
          name: "HBA1C",
          inputName: "HBA1C",
          suggestions: [],
          defaultValue: "Normal",
          metric: "%"
        },
      ],
    },
    {
      name: "Thyroid Function Test",
      fields: [
        {
          name: "TSH",
          inputName: "TSH",
          suggestions: [],
          defaultValue: "Normal",
          metric: "uiu/ml"
        },
        {
          name: "T3",
          inputName: "T3",
          suggestions: [],
          defaultValue: "Normal",
          metric: "uiu/ml"
        },
        {
          name: "T4",
          inputName: "T4",
          suggestions: [],
          defaultValue: "Normal",
          metric: "uiu/ml"
        },
      ],
    },
    {
      name: "Other",
      fields: [
        {
          name: "ESR",
          inputName: "ESR",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mm"
        },
        {
          name: "CRP",
          inputName: "CRP",
          suggestions: [],
          defaultValue: "Normal",
          metric: "mg/l"
        },
        {
          name: "ECG",
          inputName: "ECG",
          suggestions: [],
          defaultValue: "Normal",
          metric: "",
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
                          <h6 dangerouslySetInnerHTML={field.name ? {__html: field.name} : {__html: ""}}></h6>
                          <label className="inputField">
                            <input type="text" name={`patient${field.inputName}`}/>
                            <span dangerouslySetInnerHTML={field.metric ? {__html: field.metric} : {__html: ""}}></span>
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

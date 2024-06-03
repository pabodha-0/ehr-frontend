import React from "react";
import styles from "./index.module.css";
import { InputWithSuggestion } from "../../InputWithSuggestion";

const Investigations = () => {
  const investigationTypes = [
    {
      name: "Full Blood Count",
      fields: [
        {
          name: "WBC",
          inputName: "wbc",
          substring: "",

          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "N",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "L",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "E",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "M",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "B",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Hb",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "PCV",
          inputName: "wbc",
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
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "SGOT (AST)",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "SGPT (ALT)",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Total Bilirubin",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Direct Bilirubin",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Indirect Bilirubin",
          inputName: "wbc",
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
          name: "Total Cholestrol",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "S. TG",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "HDL",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "LDL",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "CHO/ HDL",
          inputName: "wbc",
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
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Sugar",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Pus Cells",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Red Cells",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Urine Cultrue",
          inputName: "wbc",
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
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Blood Urea",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Serum Eloctrolytes - Na",
          inputName: "wbc",
          substring: "+",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Serum Eloctrolytes - K",
          inputName: "wbc",
          substring: "+",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "Serum Eloctrolytes - Cl",
          inputName: "wbc",
          substring: "-",
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
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "T3",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "T4",
          inputName: "wbc",
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
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "CRP",
          inputName: "wbc",
          substring: "",
          suggestions: [],
          defaultValue: "Normal",
        },
        {
          name: "ECG",
          inputName: "wbc",
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
      <h5>Investigations</h5>
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
                      <input type="text" />
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

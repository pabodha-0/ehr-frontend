"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

export const InputWithSuggestion = ({
  inputName,
  suggestionList,
}: {
  inputName: string;
  suggestionList: string[];
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.main}>
      <label className={`inputField ${styles.inputLabel}`}>
        <input
          type="text"
          name={inputName}
          className={styles.input}
          value={inputValue}
          onChange={(e: any) => {
            setInputValue(e.target.value);
          }}
        />
        <ul className={styles.suggestionList}>
          {suggestionList.map((suggestion, i) => {
            if (inputValue.length != 0) {
              if (
                suggestion.substring(0, inputValue.length).toLowerCase() ==
                inputValue.toLowerCase()
              ) {
                return (
                  <li key={i} onClick={() => setInputValue(suggestion)}>
                    {suggestion}
                  </li>
                );
              }
            } else {
              return (
                <li key={i} onClick={() => setInputValue(suggestion)}>
                  {suggestion}
                </li>
              );
            }
          })}
        </ul>
      </label>
    </div>
  );
};

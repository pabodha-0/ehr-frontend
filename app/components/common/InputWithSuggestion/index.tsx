"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

export const InputWithSuggestion = ({
  inputName,
  suggestionList,
  defaultValue,
  disabled,
}: {
  inputName: string;
  suggestionList: { name: string }[] | undefined;
  defaultValue?: string;
  disabled?: boolean;
}) => {
  const [inputValue, setInputValue] = useState(
    defaultValue ? defaultValue : ""
  );

  return (
    <div className={styles.main}>
      <div
        className={`inputField ${styles.inputLabel} ${
          disabled ? "inputDisabled" : ""
        }`}
      >
        <input
          type="text"
          name={inputName}
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={disabled}
        />
        <ul className={`custom-scrollbar ${styles.suggestionList} `}>
          {suggestionList &&
            suggestionList.map((suggestion, i) => {
              if (suggestion.name) {
                return (
                  <li
                    key={i}
                    onClick={() => {
                      setInputValue(suggestion.name);
                    }}
                  >
                    {suggestion.name}
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { FaPlus } from "react-icons/fa6";

const Allergies = () => {
  const [foodAllergiesAmount, setFoodAllergiesAmount] = useState(1);
  const [drugAllergiesAmount, setDrugAllergiesAmount] = useState(1);

  return (
    <div className="boxWrapper">
      <h5>Allergies</h5>
      <h6 className={styles.subHeader}>Food Allergies</h6>
      <div className={styles.grid}>
        {Array.from(Array(foodAllergiesAmount)).map((_, i) => (
          <input type="text" className="inputField" key={i} />
        ))}
        <div
          className={styles.addNew}
          onClick={() => setFoodAllergiesAmount(foodAllergiesAmount + 1)}
        >
          <FaPlus />
        </div>
      </div>

      <h6 className={styles.subHeader}>Drug Allergies</h6>
      <div className={styles.grid}>
        {Array.from(Array(drugAllergiesAmount)).map((_, i) => (
          <input type="text" className="inputField" key={i} />
        ))}
        <div
          className={styles.addNew}
          onClick={() => setDrugAllergiesAmount(drugAllergiesAmount + 1)}
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default Allergies;

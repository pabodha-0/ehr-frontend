"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { FaPlus } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { InputWithSuggestion } from "../../InputWithSuggestion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { getAllFoodAllergies } from "@/app/redux/features/foodAllergy";
import { getAllDrugAllergies } from "@/app/redux/features/drugAllergy";

const Allergies = ({
  showAllergies,
  setShowAllergies,
}: {
  showAllergies: boolean;
  setShowAllergies: Function;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllFoodAllergies());
    dispatch(getAllDrugAllergies());
  }, [dispatch]);

  const [foodAllergiesAmount, setFoodAllergiesAmount] = useState(1);
  const [drugAllergiesAmount, setDrugAllergiesAmount] = useState(1);

  const foodAllergyList = useSelector(
    (state: RootState) => state.foodAllergie.allFoodAllergies?.data
  );

  const drugAllergyList = useSelector(
    (state: RootState) => state.drugAllergie.allDrugAllergies?.data
  );

  return (
    <div className="boxWrapper">
      <div className={styles.headerBox} onClick={() => setShowAllergies(false)}>
        <h5>Allergies</h5>
        <FaChevronUp
          className={`${styles.icon} ${
            showAllergies ? "" : styles.iconReverse
          }`}
        />
      </div>

      <h6 className={styles.subHeader}>Food Allergies</h6>
      <div className={styles.grid}>
        {Array.from(Array(foodAllergiesAmount)).map((_, i) => (
          //   <input type="text" className="inputField" key={i} name="patientFoodAllergies"/>
          <div key={i}>
            <InputWithSuggestion
              inputName="patientFoodAllergies"
              suggestionList={foodAllergyList}
            />
          </div>
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
          //   <input
          //     type="text"
          //     className="inputField"
          //     key={i}
          //     name="patientDrugAllergies"
          //   />
          <div key={i}>
            <InputWithSuggestion
              inputName="patientDrugAllergies"
              suggestionList={drugAllergyList}
            />
          </div>
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

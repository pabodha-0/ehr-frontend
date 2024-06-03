"use client";

import React, { useState } from "react";
import styles from "./index.module.css";

const OnExamination = () => {
  const [temp, setTemp] = useState(98.6);

  return (
    <div className="boxWrapper">
      <h5>On Examination</h5>
      <div className={styles.grid}>
        <div>
          <h6>Pale</h6>
          <div className={styles.booleanWrapper}>
            <label>
              <input type="radio" name="pale" id="" />
              <div className={styles.booleanBtn}>Yes</div>
            </label>
            <label>
              <input type="radio" name="pale" id="" />
              <div className={styles.booleanBtn}>No</div>
            </label>
          </div>
        </div>

        <div>
          <h6>Temp</h6>
          <div className={styles.equalGrid}>
            <label className="inputField">
              <input
                type="text"
                inputMode="numeric"
                onChange={(e: any) => setTemp(e.target.value)}
              />
              <span>F</span>
            </label>
            {temp <= 98.6 ? (
              <div className={styles.tempNoWarning}></div>
            ) : (
              <div className={styles.tempWarning}>Fever</div>
            )}
          </div>
        </div>

        <div>
          <h6>Ear</h6>
          <input type="text" name="" className="inputField" />
        </div>

        <div>
          <h6>Nose</h6>
          <input type="text" name="" className="inputField" />
        </div>
        <div>
          <h6>Throat</h6>
          <input type="text" name="" className="inputField" />
        </div>
        <div>
          <h6>Lymph Node</h6>
          <input type="text" name="" className="inputField" />
        </div>
        <div>
          <h6>Lungs</h6>
          <input type="text" name="" className="inputField" />
        </div>
        <div>
          <h6>Abdomen</h6>
          <input type="text" name="" className="inputField" />
        </div>
        <div></div>
        <div></div>
        <div>
          <h6>Heart Sounds</h6>
          <input type="text" name="" className="inputField" />
        </div>

        <div>
          <h6>Pulse</h6>
          <div className={styles.verticalGrid}>
            <div className={styles.subGrid}>
              <span>Pulse</span>
              <label className="inputField">
                <input type="text" />
                <span>per M.</span>
              </label>
            </div>
            <div className={styles.subGrid}>
              <span>Rhythm</span>
              <input type="text" className="inputField" />
            </div>
          </div>
        </div>

        <div>
          <h6>Blood Pressure</h6>
          <div className={styles.verticalGrid}>
            <div className={styles.bpGridWrapper}>
              <span>1.</span>
              <div className={styles.bpGrid}>
                <input type="text" name="" className="inputField" />
                <hr />
                <input type="text" name="" className="inputField" />
              </div>
            </div>

            <div className={styles.bpGridWrapper}>
              <span>2.</span>
              <div className={styles.bpGrid}>
                <input type="text" name="" className="inputField" />
                <hr />
                <input type="text" name="" className="inputField" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h6>Vision</h6>
          <div className={styles.verticalGrid}>
            <div className={styles.visionGridWrapper}>
              <span>Left</span>
              <div className={styles.equalGrid}>
                <input type="text" name="" className="inputField" />
                <input type="text" name="" className="inputField" />
              </div>
            </div>

            <div className={styles.visionGridWrapper}>
              <span>Right</span>
              <div className={styles.equalGrid}>
                <input type="text" name="" className="inputField" />
                <input type="text" name="" className="inputField" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnExamination;

import React from "react";
import styles from "./index.module.css";
import {FaChevronUp} from "react-icons/fa";

const MedicalHistory = ({showMedicalHistory, setShowMedicalHistory}: {showMedicalHistory: boolean, setShowMedicalHistory: Function}) => {
    const medicalHistoryChecks = [
        {
            name: "DM",
            inputName: "DM",
        },
        {
            name: "Epilepsy",
            inputName: "Epilepsy",
        },
        {
            name: "HT",
            inputName: "HT",
        },
        {
            name: "Cancer",
            inputName: "Cancer",
        },
        {
            name: "IHD",
            inputName: "IHD",
        },
        {
            name: "BA",
            inputName: "BA",
        },
        {
            name: "CVA",
            inputName: "CVA",
        },
    ];

    const socialHistoryChecks = [
        {
            name: "Alcoholic",
            inputName: "IsAlcoholic",
        },
        {
            name: "Smoking",
            inputName: "IsSmoking",
        },
    ];

    const surgicalHistoryChecks = [
        {
            name: "Surgery",
            inputName: "HadSurgery",
        },
    ];
    return (
        <div className={`boxWrapper ${styles.main}`}>
            <div className={styles.historyWrapper}>
              <div className={styles.headerBox} onClick={() => setShowMedicalHistory(false)}>
                <h5>Medical History</h5>
                <FaChevronUp className={`${styles.icon} ${showMedicalHistory ? "" : styles.iconReverse}`}/>
              </div>

              <div className={styles.grid}>
                    {medicalHistoryChecks.map(({name, inputName}, i) => (
                        <div className={styles.checkboxWrapper} key={i}>
                            <span>{name}</span>
                            <hr/>
                            <input type="checkbox" className="ui-checkbox" name={`patient${inputName}`}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.historyWrapper}>
                <h5>Social History</h5>
                <div className={styles.grid}>
                    {socialHistoryChecks.map(({name, inputName}, i) => (
                        <div className={styles.checkboxWrapper} key={i}>
                            <span>{name}</span>
                            <hr/>
                            <input type="checkbox" className="ui-checkbox" name={`patient${inputName}`}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.historyWrapper}>
                <h5>Surgical History</h5>
                <div className={styles.grid}>
                    {surgicalHistoryChecks.map(({name, inputName}, i) => (
                        <div className={styles.checkboxWrapper} key={i}>
                            <span>{name}</span>
                            <hr/>
                            <input type="checkbox" className="ui-checkbox" name={`patient${inputName}`}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MedicalHistory;

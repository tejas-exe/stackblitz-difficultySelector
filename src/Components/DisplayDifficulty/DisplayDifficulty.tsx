import * as React from 'react';
import styles from "../../style.module.css";

const DisplayDifficulty = (props) => {
  return (
    <div className={styles.displayDifficulty}>
      {props.difficulty ? `Difficulty set to ${props.difficulty}` : "No difficulty set"}
    </div>
  );
};

export default DisplayDifficulty;

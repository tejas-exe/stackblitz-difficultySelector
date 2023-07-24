import * as React from 'react';
import styles from '../../style.module.css';
import { useState } from 'react';
const MenuListItems = (props) => {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <div
      className={`${styles.menuitem} ${hoverEffect ? styles.hoverTrue : ''} ${props.difficultySet == props.slect ?styles.select:"" }`}
      onMouseEnter={() => {
        setHoverEffect(true);
      }}
      onMouseLeave={() => {
        setHoverEffect(false);
      }}
      onClick={(e) => {
        props.setDifficulty(props.difficultySet);
      }}
    >
      {`set to : ${props.difficultySet}`}
    </div>
  );
};

export default MenuListItems;

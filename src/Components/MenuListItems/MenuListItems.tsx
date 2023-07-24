import * as React from 'react';
import styles from '../../style.module.css';
import MenuItem from '../MenuItem/MenuItem';
import { difficulty } from './DifficultyList';

const MenuListItems = (props) => {
  const [select, setSelect] = React.useState('');
  function setDifficulty(e) {
    setSelect(e);
    props.setDifficulty(e);
  }
  return (
    <div className={styles.menulist}>
      {difficulty.map((item) => (
        <MenuItem
          difficultySet={item}
          setDifficulty={setDifficulty}
          slect={select}
        />
      ))}
    </div>
  );
};

export default MenuListItems;

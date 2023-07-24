import * as React from 'react';
import style from './style.module.css';
import DisplayDifficulty from './Components/DisplayDifficulty/DisplayDifficulty';
import MenuListItems from './Components/MenuListItems/MenuListItems';

export default function App() {
  const [difficulty, setDifficulty] = React.useState('');
  return (
    <div className={style.fDiv}>
      <h1>Select Your react difficulty</h1>
      <div className={style.mainDiv}>
        <MenuListItems
          setDifficulty={(e) => {
            setDifficulty(e);
          }}
        />
        <DisplayDifficulty difficulty={difficulty} />
      </div>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
// import styles from './First.module.css';
import styles from './First.css';

function First() {
  let random = Math.floor(Math.random() * 10) + 1;
  let [num, setNum] = useState(0);
  let multiplyer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleGenerate() {
    setNum(random);
  }
  return (
    <div>
      <h1>Random Number That is Generating {num}</h1>
      <button className={styles.button} onClick={handleGenerate}>
        Generate no
      </button>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>multiplyer</th>
            <th className={styles.th}>Product</th>
          </tr>
        </thead>
        <tbody>
          {multiplyer.map((element, index) => (
            <tr key={index}>
              <td className={styles.td}>{element}</td>
              <td className={styles.td}>{element * num}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default First;
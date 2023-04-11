import React, { useState } from 'react';
// import styles from './second.css'; 
// import styles from './Second.css';
import styles from './Second.css';

function Second() {
  const [times, setTimes] = useState([]);
  function onmouseover(event){
    const name = event.target.getAttribute('data-name');
    setTimes([...times,{time: new Date().toLocaleString() ,eventmouse:'onMouseOver',id:name}]);

    
}
function onmouseout(event){
    // Define function logic here
    const name = event.target.getAttribute('data-name');
    setTimes([...times,{time: new Date().toLocaleString() ,eventmouse:'onMouseOut',id:name}]);

  }
  return (
    <div>
      <h1 className={styles.title} data-name="Header 1" onMouseOver={onmouseover} onMouseOut={onmouseout}>H1</h1>
      <h2 className={styles.title} data-name="Header 2" onMouseOver={onmouseover} onMouseOut={onmouseout}>H2</h2>
    <div className={styles.title} data-name="div" onMouseOver={onmouseover} onMouseOut={onmouseout}>Div Tag</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event Name</th>
            <th>Tag Name</th>
          </tr>
        </thead>
        <tbody>
          {times.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.eventmouse}</td>
              <td>{log.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Second;
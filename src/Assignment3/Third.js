import React, { useState } from 'react';
// import styles from './third.module.css'; 
import styles from './Third.css'

function Third() {
    const [greet, setGreet] = useState([ 'Good Morning','Good Afternoon','Good Evening','Good Night'])
    const [currentNum, setCurrentNum] = useState(0)
    
    const handleGreet = () => {
        setCurrentNum(currentNum + 1)
    }
     
    return (
        <div>
            <h1 style={{backgroundColor:'white'}} className={styles.greetings}>Greetings : {greet[currentNum]}</h1> {/* Use class name from module CSS */}
            <button onClick={handleGreet}>Greet</button>
        </div>
    )
}

export default Third;
import React, { useState } from "react";

import  styles from './Lucky.module.css';

function LuckyNumberGame() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const handleGuess = (event) => {
    event.preventDefault();
    setCount(count + 1);
    if (parseInt(guess) < luckyNumber) {
      setMessage(`You guessed ${guess}. Try a bigger number.`);
    } else if (parseInt(guess) > luckyNumber) {
      setMessage(`You guessed ${guess}. Try a smaller number.`);
    } else {
      setMessage(`Congratulations, you guessed the right number in ${count} attempts!`);
    }
    setGuess("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lucky Number Guessing Game</h1>
      <p className={styles.subtitle}>Guess a number between 1 and 100:</p>
      <form onSubmit={handleGuess}>
        <input className={styles.input} type="number" value={guess} onChange={(event) => setGuess(event.target.value)} />
        <button className={styles.button} type="submit">Guess</button>
      </form>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default LuckyNumberGame;
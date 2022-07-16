import React from "react";
import styles from "./counter.module.css";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useState } from "react";

const Counter = ({count}) => {
  const [counter,setCountnter]  = useState(count)
  console.log("count",count)
  // sample value to be replaced
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        className={styles.button}
        data-testid="task-counter-increment-button"
        onClick={() => setCountnter(counter + 1)}
      >
        <HiPlus />
      </button>
      <span data-testid="task-counter-value">{counter}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => counter > 1 && setCountnter(counter - 1)}
        className={styles.button}
      >
        <HiMinus />
      </button>
    </div>
  );
};

export default Counter;

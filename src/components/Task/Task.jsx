import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter"
import { ImCross } from "react-icons/im";

const Task = ({ showData, setData }) => {
  console.log("Show", showData);
  // const data = props.showData;
  // NOTE: do not delete `data-testid` key value pair
  function handlecheck(elem) {
    // console.log(e.target.checked);
    // e.target.checked = !e.target.checked;
    console.log(elem)
    elem.done = !elem.done
    setData([...showData])

  }

  return (
    <>
      {showData?.map((elem) => (
        <li data-testid="task" className={styles.task} key={elem.id}>
          <input
            type="checkbox"
            data-testid="task-checkbox"
            className={styles.checkb}
            checked={elem.done}
            onChange={() => handlecheck(elem)}
          />
          {elem.done ? (
            <div
              data-testid="task-text"
              style={{ textDecoration: "line-through",color:"gray" }}
              className="txt"
            >
              {elem.text}
            </div>
          ) : (
            <div data-testid="task-text" className="txt">
              {elem.text}
            </div>
          )}
          {/* Counter here */}
          <Counter count={elem.count} />
          <button
            data-testid="task-remove-button"
            className={styles.cross}
            onClick={() => setData(showData.filter((e)=>e.id!==elem.id))}
          >
            <ImCross />
          </button>
        </li>
      ))}
    </>
  );
};

export default Task;

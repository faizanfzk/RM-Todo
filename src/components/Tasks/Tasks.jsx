import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task";

const Tasks = ({ data, setData }) => {
  console.log("Task", data);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {data.length > 0 ? (
        <ul data-testid="tasks" className={styles.tasks}>
          {/* Task List */}
          <Task showData={data} setData={setData} />
        </ul>
      ) : (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          Task is Empty
        </div>
      )}
    </>
  );
};

export default Tasks;

import React,{useState} from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({data}) => {
  // sample values to be replaced
  
   let totalTask = data.length;
   let uc = data.filter((e) => {
     return e.done == false;
   });
   let unCompletedTask = uc.length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <p>
        You have <b data-testid="header-remaining-task">{unCompletedTask}</b> of <b data-testid="header-total-task">{totalTask}</b> tasks remaining
      </p>
    </div>
  );
};

export default TaskHeader;

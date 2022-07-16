import React,{useState} from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import {AddTask} from "./AddTask"
import { Tasks } from "./Tasks"
import data from "../data/tasks.json"

const TaskApp = () => {
  const [newData, setNewData] = useState(data);
 console.log("newData : ", newData);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <TaskHeader data={newData} />
      <AddTask addData={setNewData} data={newData} />
      <Tasks data={newData} setData={setNewData} />
    </div>
  );
};

export default TaskApp;

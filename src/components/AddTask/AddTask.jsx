import React from "react";
import styles from "./addTask.module.css";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";

const AddTask = ({addData,data}) => {
  // const { addData, data } = props;
  const [textdata, setTextdata] = useState({
    count: 1,
    done: false,
    id: null,
    text: "",
  });
  function handleAdd() {
    // console.log("text",textdata);
    let flag = true
    for (let i = 0; i < data.length; i++){
      if (textdata.text == data[i].text) {
        flag = false
      }
    }
    if(flag && textdata.text!=="")
    addData([...data, textdata]);
    
    // console.log("data", data);
  }
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        className={styles.addinput}
        // style={{width:"80%",border:"none",fontSize:"x-large",}}
        placeholder="Add task..."
        onInput={(e) =>
          setTextdata({
            ...textdata,
            text: e.target.value,
            id: data.length + 1,
          })
        }
      />
      <button
        className= {styles.addbtn }
        data-testid="add-task-button"
        onClick={handleAdd}
      >
        <HiPlus />
      </button>
    </div>
  );
};

export default AddTask;

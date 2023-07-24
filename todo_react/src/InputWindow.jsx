import React, { useState } from "react";

function InputWindow ({addTask, userTask, setUserTask}) {

    

    return(
        <div>
            <h3>ToDo-App</h3>
            <input value={userTask} placeholder="Enter your task" onChange={(e) => setUserTask(e.target.value)}/>
            <button onClick={() => {addTask(userTask); setUserTask('')}}>add task</button>
        </div>
    )
}

export default InputWindow;
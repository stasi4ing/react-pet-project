import React, { useState } from 'react';
import InputWindow from './InputWindow';
import RenderTask from './RenderTask';

function App() {

  const[note, setNote] = useState([]);
  const [userTask, setUserTask] = useState('');

  

  function id() {
    let str = '';
        for (let i = 0; i < 16; i++) {
          str += Math.floor(Math.random()*10);
        }
        return str;
  }

  function addTask (userTask) {
    const newNote = {
      id: id(),
      task: userTask,
      edit: false
    };
    setNote([...note, newNote])
  }

  function removeTask (index) {
    setNote([...note.slice(0, index), ...note.slice(index+1)]);
  }
  
  function changeInput(e, id, field) {
    setNote(note.map((task) => {
      if (task.id == id) {
        task[field] = e.target.value;
      }
      return task;
    }))
  }

  return (<div>
    <InputWindow addTask= {addTask} userTask={userTask} setUserTask={setUserTask}/>
    <RenderTask note = {note} removeTask = {removeTask} changeInput = {changeInput} setNote = {setNote}/>
  </div>
  )
}
    

export default App;

import React, {useState} from "react";

function RenderTask ({note, removeTask, changeInput, setNote}) {

    function editTask(id) {
        setNote(note.map((item)=> {
            if (item.id == id) {
                item.edit = !item.edit;
            }
            return item;
        }))
    }

    const res = note.map((item, index) => {
        return ( item.edit ?
            <input
				value={item.task}
				onChange={e => changeInput(e, item.id, 'task')}
				onBlur={() => editTask(item.id)}
			/>
        
        : <p key={item.id}>{item.task}
        <button onClick={() => editTask(item.id)}>Edit</button>
        <button onClick={() => removeTask(index)}>delete</button></p>)
      })

    return (<div>
        {res}
    </div>);
}

export default RenderTask;
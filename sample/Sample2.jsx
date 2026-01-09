import React, { useState } from 'react'

function Sample2() {

    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    const addTask = () =>{
        setTasks([...tasks, {name : text, completed : false}]);
        setText("");
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_,i) => i !== index));
    }

  return (
    <div>
        <h1>To-Do List</h1>

        <input type="text" value={name} placeholder='Enter task' />
        <button type='submit' onClick={addTask}>add</button>

        <ul>
            {tasks.map((task , index) => (
                <li key={task}>
                    <input type="checkbox"
                    checked = {tasks.completed}/>
                    <span>{tasks.name}</span>
                    <button onClick={() => deleteTask(index)}>delete</button>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default Sample2



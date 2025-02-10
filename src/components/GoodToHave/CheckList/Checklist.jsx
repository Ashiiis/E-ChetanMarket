import React, { useContext, useState } from "react";
import "./Checklist.css"
import Check from "/src/assets/check-box.svg"
import { TaskContext } from "./TaskContext";
function Checklist() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
    const {updateCount} = useContext(TaskContext);
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
      setCount(prevCount => prevCount +1);
      updateCount(count+1);
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setCount(count-1);
  };
    return (
        <div>
            <div className="app">
                <header className="header">
                  <p>List</p>
                </header>
                <div className="input-container">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Add a new task"
                    />
                 
                </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'task completed' : 'task'}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}> <img src={Check} /></button>
          </li>

        ))}
      </ul>
      <div className="add1">
      <button onClick={addTask}>Add</button>
      {/* <h1>{count}</h1> */}
      </div>
     
    </div>
            
        </div>
    );
}

export default Checklist
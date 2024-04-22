import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');


  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    if (window.confirm('Voulez-vous supprimer cette tâche ?')) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>My Todo App</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a new todo"
            value={taskInput}
            onChange={handleTaskInputChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        <p>Todos :</p>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} onClick={() => handleDeleteTask(index)}>
              {task}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App


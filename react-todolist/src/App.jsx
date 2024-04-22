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
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
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
            <li
              key={index}
              onClick={() => handleToggleComplete(index)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
              <button className="delete-button" onClick={(e) => { e.stopPropagation(); handleDeleteTask(index); }}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>

  // const [tasks, setTasks] = useState([]);
  // const [taskInput, setTaskInput] = useState('');


  // const handleTaskInputChange = (event) => {
  //   setTaskInput(event.target.value);
  // };


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (taskInput.trim() !== '') {
  //     setTasks([...tasks, taskInput]);
  //     setTaskInput('');
  //   }
  // };

  // const handleDeleteTask = (index) => {
  //   if (window.confirm('Voulez-vous supprimer cette tâche ?')) {
  //     const updatedTasks = [...tasks];
  //     updatedTasks.splice(index, 1);
  //     setTasks(updatedTasks);
  //   }
  // };

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h2>My Todo App</h2>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="text"
  //           placeholder="Type a new todo"
  //           value={taskInput}
  //           onChange={handleTaskInputChange}
  //         />
  //         <button type="submit">Add Todo</button>
  //       </form>
  //       <p>Todos :</p>
  //       <ul>
  //         {tasks.map((task, index) => (
  //           <li key={index} onClick={() => handleDeleteTask(index)}>
  //             {task}
  //           </li>
  //         ))}
  //       </ul>
  //     </header>
  //   </div>
  );
}

export default App


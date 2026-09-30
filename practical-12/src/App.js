import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add task
  const addTask = () => {
    if (task.trim() === '') return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false
      }
    ]);

    setTask('');
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Mark task complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Edit task
  const editTask = (id) => {
    const newTask = prompt('Edit task:');

    if (newTask && newTask.trim() !== '') {
      setTasks(
        tasks.map((item) =>
          item.id === id
            ? { ...item, text: newTask }
            : item
        )
      );
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.completed
                  ? 'line-through'
                  : 'none'
              }}
            >
              {item.text}
            </span>

            <button onClick={() => toggleComplete(item.id)}>
              {item.completed ? 'Undo' : 'Complete'}
            </button>

            <button onClick={() => editTask(item.id)}>
              Edit
            </button>

            <button onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css'
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="font-bold mb-4 text-3xl text-green-600"> To-Do List</h1>
      <TaskForm onAdd={addTask} />
      {tasks.length === 0 ? (
        <p className="text-amber-300 mt-4">No tasks</p>
      ) : (
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      )}
    </div>
  );
}

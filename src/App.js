import React from 'react';
import BoardList from './components/BoardList';
import TaskColumn from './components/TaskColumn';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <BoardList />
      </aside>
      <main className="main-content">
        <Header />
        <div className="task-columns">
          <TaskColumn status="Todo" />
          <TaskColumn status="Doing" />
          <TaskColumn status="Done" />
        </div>
      </main>
    </div>
  );
}

export default App;

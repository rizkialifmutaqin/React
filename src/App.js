// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoIncrement from './components/ToDoIncrement';
import ImageComponent from './components/ImageComponent';
import CatButton from './components/CatButton';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aplikasi ToDo List</h1>
      </header>

      <section style={{margin: '1em 0em'}}>
        <ToDoForm />
        <ToDoList />
      </section>

      <section>
        <ToDoIncrement />
      </section>

      <section>
        <ImageComponent />
        <CatButton />
      </section>

      <footer>
        <h3 style={{textAlign: 'center'}}>Dibuat oleh orang tampan &copy; 2023</h3>
      </footer>
    </div>
  );
}

export default App;

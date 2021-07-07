import React from 'react';
import PropsApp from './Components/PropsApp';
import NewEmp from './Components/NewEmp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PropsApp/>
        <NewEmp/>
      </header>
    </div>
  );
}

export default App;

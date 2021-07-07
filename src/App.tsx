import React from 'react';
import PropsApp from './Components/PropsApp';
import NewEmp from './Components/NewEmp';
import ToggleButton from './Components/ToggleButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PropsApp/>
        <NewEmp/>
        <ToggleButton/>
      </header>
    </div>
  );
}

export default App;

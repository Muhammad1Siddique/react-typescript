import React from 'react';
// import PropsApp from './Components/PropsApp';
// import NewEmp from './Components/NewEmp';
// import ToggleButton from './Components/ToggleButton';
// import UserForm from './Components/UserForm';
import { LifecycleMethod } from './Components/LifecycleMethod';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PropsApp/>
        <NewEmp/>
        <ToggleButton/>
        <UserForm/> */}
        <LifecycleMethod initialValue={0}/>
      </header>
    </div>
  );
}

export default App;

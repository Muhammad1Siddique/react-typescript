import React from 'react';
// import PropsApp from './Components/PropsApp';
// import NewEmp from './Components/NewEmp';
// import ToggleButton from './Components/ToggleButton';
// import UserForm from './Components/UserForm';
// import { LifecycleMethod } from './Components/LifecycleMethod';
// import { FunctionLCM } from './Components/LifecycleMethod';
// import Greeting from './Components/Greeting';
//import { ConditionalRender } from './Components/ConditionalRender';
import { MultipleList } from './Components/MultipleList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PropsApp/>
        <NewEmp/>
        <ToggleButton/>
        <UserForm/> */}
        {/* <LifecycleMethod initialValue={0}/><br/><br/>
        <FunctionLCM initialValue={0}/> */}
        {/* <Greeting isLoggedIn={true}/> 
        <Greeting isLoggedIn={false}/> */}
        {/* <ConditionalRender/> */}
        <MultipleList/>
      </header>
    </div>
  );
}

export default App;

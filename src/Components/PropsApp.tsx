import React from 'react';
import '../App.css';

function Sum(a:number, b:number){
  return a + b;
}

interface IProps {
  value1: number;
  value2: number;
}

function SubComponent(Props:IProps){
  return <>{Props.value1 - Props.value2}</>
}

function PropsApp() {
  const Value = Sum(33,45);
  return (
    <div>
       <h4>Sum of two Value: {Value}</h4>
       <h4>Sub of two Value: <SubComponent value1={95} value2={64}/></h4>
    </div>
  );
}

export default PropsApp;
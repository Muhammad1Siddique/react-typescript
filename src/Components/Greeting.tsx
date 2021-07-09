import React from 'react'

export interface IProps{
    isLoggedIn:Boolean;
}

export function UserGreeting(){
    return <h2>Welcome back!</h2>
}
export function GuestGreeting(){
    return <h2>Please Sign up.</h2>
}

const Greeting = (Props:IProps) => {
    const isLoggedIn = Props.isLoggedIn
    if(isLoggedIn){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/> 
        
    }
}

export default Greeting;

import React from "react";

export interface IProps{
    isLoggedIn:Boolean;
}
//Loggedin Welcome Message
export function UserGreeting(){
    return <h2>Welcome back!</h2>
}
//Recommend to login Account
export function GuestGreeting(){
    return <h2>Please Sign up.</h2>
}
// Login Status Message
export const Greeting = (Props:IProps) => {
    const isLoggedIn = Props.isLoggedIn
    if(isLoggedIn){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/> 
        
    }
}


export class LoginControl extends React.Component{
    
    render(){
        return(
            <div>
                <Greeting isLoggedIn={true}/>
            </div>
        )
    }
}


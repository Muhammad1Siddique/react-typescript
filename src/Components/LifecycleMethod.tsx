import React from "react"

export interface IProps{
    initialValue: number;
}

export interface IState{
    count: number;
}

export class LifecycleMethod extends React.Component<IProps, IState>{
    state: IState = {
        count: this.props.initialValue
    }

    componentDidMount(){
        console.log("componentDidMount called");
        this.setState({count: this.state.count + 1});
    }
    
    componentWillReceiveProps(nextProps:IProps){
        console.log("componentWillReceiveProps called");
    }

    componentDidUpdate(prevProps:IProps, prevState:IState){
        console.log("componentDidUpdate", prevProps, prevState);
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called");
        return true;
    }

    onClickButton = () =>{
        this.setState({count:this.state.count + 1})  
    }

    render(){
        console.log("Render called");
        return(
            <div>
                Count with Class Component: {this.state.count}<br/>
                <button onClick={this.onClickButton}>Increment</button>
            </div>
        )
    }
}
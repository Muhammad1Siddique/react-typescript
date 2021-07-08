import React from "react"

export interface IProps{
    initialValue: number;
}

export interface IState{
    count: number;
    hideComponent: boolean;
}

export class LifecycleMethod extends React.Component<IProps, IState>{
    state: IState = {
        count: this.props.initialValue,
        hideComponent:false
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
        this.setState({count:this.state.count + 1, hideComponent:true})  
    }

    render(){
        console.log("Render called");
        return(
            <div>
                Count with Class Component: {this.state.count}<br/>
                <button onClick={this.onClickButton}>Increment</button>
                {!this.state.hideComponent && <HideLifecycle/>}
            </div>
        )
    }
}

export class HideLifecycle extends React.Component{
    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }

    render(){    
        return(
            <div>Hide Component on Click</div>
        )
    }
}
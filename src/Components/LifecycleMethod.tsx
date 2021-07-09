import React, {useState, useEffect} from "react"

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

export function FunctionLCM(Props:IProps) {
    const [count, setCount] = useState(Props.initialValue);
    const incrementValue = () =>{
        setCount(count+1);
    }
    
    useEffect(()=>{
        console.log("one time useEffect");
        setCount(count + 1);
    },[count])

    useEffect(()=>{
        console.log("useEffect called when count value change");
        return ()=>{
            console.log('useEffect clean up phase');
        }
    },[count]);

    return(
        <div>
            count with function component: {count}<br/>
            <button onClick={incrementValue}>Increment</button>
        </div>
    )
}
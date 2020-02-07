import React from 'react';
class Counter extends React.Component {
    state={number:0};
    onIncrease = ()=>{
        this.setState({number: this.state.number+1})
    };
    constructor(props){
        // constructor 메소드 내부에서는 반드시 super 함수를 호출해야 한다
        super(props);
        console.log('constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerived~~");
        
    }
    shouldComponentUpdate(){
        console.log('shouldComponentupdate');
    }
    render() {
        console.log("render");
        return (
            <div>
                <h1>Counter</h1>
                <div>Value:{this.state.number}</div>
                <button onClick={this.onIncrease}>+</button>
            </div>
        );
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshot~~');
    }
}
export default Counter;

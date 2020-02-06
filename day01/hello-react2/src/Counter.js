import React from 'react';
class Counter extends React.Component{
    // state 사용하자
    state={
        number: 1
    };
    render(){
        return(
            <div>   
                <h1>카운터</h1>
                <div>값:{this.state.number}</div>
                <button>더하기 버튼</button>
                <button>빼기 버튼</button>             
            </div>
        );
    }
}
export default Counter;

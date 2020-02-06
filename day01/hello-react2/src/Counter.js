import React from 'react';
class Counter extends React.Component {
    // state 사용하자
    state = {
        number: 100
    };
    clickToIncrease = () => {
        // 방법 1
        const {number}=this.state;
        this.setState({
            number: number+1
        });
        // 방법 2
        this.setState({
            number: this.state.number + 1 // 속성이 한개일경우
        })
    };
    clickToDecrease = () => {
        this.setState({
            number: this.state.number - 1
        }) // 화면에 변하는 상태를 출력
        this.state.number = this.state.number - 1; // setState를 안쓰면 값은 바뀔지라도 화면에 바뀌는 모습이 보이지 않는다. 상태변수의 값은 setState 메소드를 통해 쓰자
    };
    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값:{this.state.number}</div>
                <button onClick={this.clickToIncrease}>더하기 버튼</button>
                <button onClick={this.clickToDecrease}>빼기 버튼</button>
            </div>
        );
    }
}
export default Counter;

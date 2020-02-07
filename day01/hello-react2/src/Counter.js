import React from 'react';

class Counter extends React.Component {
    state={number:0};
    onIncrease = ()=>{
        this.setState({number: this.state.number+1})
    };
    render() {
        const {number}=this.state;
        if(number>=3){
            throw new Error('에러발생');
        }
        return (
        <div onClick={this.onIncrease}>{`${number}번째 클릭입니다`} </div>
        );
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshot~~');
    }
}
export default Counter;

import React, {Fragment} from 'react';
import Title from './Title';
class TODO extends React.Component {
    state = {
        count1: 0, count2:0
    };
   onClick1=()=>{
    this.setState({count1:this.state.count1+1});
   }
   onClick2=()=>{
    this.setState({count2:this.state.count2+2});
   }
    render() {
        return (
            <div>
                <Title title={`현재 카운트는 ${this.state.count1}입니다`}/>
                <p>{this.state.count1}</p>
                <button onClick={this.onClick1}>증가1</button>
                <button onClick={this.onClick2}>증가2</button> 
                {/*증가 2를 눌렀을 때, 자식 컴포넌트도 함께 렌더링 된다.
                ==> 불필요한 렌더링 발생(화면에 카운트가 증가되지는 않지만, 콘솔창에서 찍힘)
                이러한 불필요함을 방지하기 위해서는 React.memo 또는 React.PureComponent를 사용
                */}
            </div>
        );
    }
}

export default TODO;
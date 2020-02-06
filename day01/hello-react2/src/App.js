import React, {Component} from 'react';
import './App.css';
import MyName from './Myname.js';
import MyName2 from './Myname2.js';
import Counter from './Counter.js';
import MyComponent from './MyComponent.js';

class App extends React.Component {
    state = {
        color: 'skyblue',
        text: '좋아요',
        liked: true
    };
    onClick = () => {
        let {color, text, liked} = this.state;
        liked = !liked;
        if(liked){ 
            text ='좋아요';
            color='skyblue';
        }else{
            text='싫어요';
            color='red';
        }
        this.setState({color, text, liked});
    };
    render() {
        return (
            <div>
                // 태그와 태그 사이에는 주석가능 {/*위에서 정의한 값을 넣어주는 것*/}
                안녕하세요
                <div className="App">
                    App.css를 적용한 - 안녕하세요
                </div>
                <MyName whoami="이민기"/>
                <MyName whoami="김김김"/>
                <MyName/> {/*속성값을 지정하지 않음 --> defaultProps값이 적용 */}
                <MyName2 whoami="또길동" age='23'/>
                <Counter/> {/*<MyComponent/>*/}
                <br></br>
                <br></br>
                <br></br>
                <li>
                    "좋아요" 버튼을 클릭하면 배경색을 붉은색으로, 버튼 라벨을 "싫어요"로 변경
                </li>
                <li>
                    "싫어요" 버튼을 클릭하면 배경색을 파란색으로, 버튼 라벨을 "좋아요"로 변경
                </li>
                <br></br>
                <button
                    style={{
                    backgroundColor: this.state.color
                    }}onClick={this.onClick}>{this.state.text}</button>

            </div>
        );
    }
}
export default App;

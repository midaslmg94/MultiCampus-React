import React, { Component } from 'react';
import './App.css';
import MyName from'./Myname.js';
import MyName2 from './Myname2.js';
import Counter from './Counter.js';

class App extends React.Component {
  render() {    
    return(
      <div>  // 태그와 태그 사이에는 주석가능
       {/*위에서 정의한 값을 넣어주는 것*/}
        안녕하세요
        <div className="App">
          App.css를 적용한 - 안녕하세요          
        </div>
        <MyName whoami="이민기"/> 
        <MyName whoami="김김김"/> 
        <MyName/> {/*속성값을 지정하지 않음 --> defaultProps값이 적용 */}
        <MyName2 whoami="또길동" age= '23'/>
        <Counter/>
      </div>
    );
  }
}
export default App;

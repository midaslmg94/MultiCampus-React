import React, { Component } from 'react';
import './App.css'
// 함수형으로 만들어보자
// 함수형은 State(상태변수)와 LifeCycle 개념이 없다
function MyName2({whoami, age}){ // whoami, age가 객체로 들어옴   
    return(
        <div>
            Myname2.js에서 가져왔음. 함수형, 객체 사용
            <br></br>
            나는 {whoami}입니다 {/*객체 사용*/}
            나이는 <span className="ageColor">{age}</span>살입니다.
        </div>
    );    
}
export default MyName2;
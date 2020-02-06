## React 실습



#### 리액트를 다루는 기술[**https://velopert.com/3613**](https://velopert.com/3613)



- HTML에서는 닫는 태그가 존재하지 않는(필수가 아닌) 태그들이 존재 하지만, JSX에서는 반드시 닫는 태그를 사용해야 한다.

  ```html
  #HTML
  <input type="text">
  <br>
  
  # JSX
  <input type="text" />
  <input type="text"></input>
  <br />
  <br></br>
  
  ```

  

- JSX에서는 반드시 하나의 태그(엘리먼트)로 감싸져 있어야 한다.

  ```react
  # 잘못된 예 
  <div> … </div>
  <div> … </div>
  
  # 올바른 예 
  <div>
  	<div> … </div>
  	<div> … </div>
  </div>
  
  ```

  -  2개의 <div> 엘리먼트를 묶어주는 역할의 <div>가 생성 --> 불필요한 DOM 객체가 생성된것임

  ```react
  class App extends React.Component {
    render() {
      return (
        <div> <-- 1번 div
          <div> <-- 2번 div
            abc
          </div>
          <div> <-- 3번 div
            xyz
          </div>
        </div>
      );
    }
  }
  ```

  - 불필요한 DOM 객체를 생성하지 않고 묶어줄 수 있다 : <></> 를 사용해서 엘리먼트를 묶을 수 있음

  ```react
  class App extends React.Component {
    render() {
      return (
        <>
          <div>
            abc
          </div>
          <div>
            xyz
          </div>
        </>
      );
    }
  }
  
  ```

- 주석 

  ```react
  class App extends React.Component {
    render() { // 주석이야
      return ( // 주석입니당
        <> {/*주석입니다*/}
          <div>
            abc
          </div>
          <div>
            xyz
          </div>
        </>
      );
    }
  }
  ```



- JSX안에서 자바스크립트 값 사용

- ```react
  import React, { Component } from 'react';
  class App extends React.Component {
    render() { // 주석이야
      const name = 'react';
      const value = 1;
      return ( // 주석입니당
        <> {/*주석입니다*/}
          <div>
            { // js의 값, 연산에 따른 콘솔출력 가능
              name=='react'?console.log("react와 일치"):console.log("react와 불일치"),
              name=='REACT'?console.log("react와 일치"):console.log("react와 불일치")
            }
            { // 함수를 선언하고 실행도 가능
              (function() {
                if (value == 1) return <div>하나</div>;
                if (value == 2) return <div>둘</div>;
              })()
            }
            abc
          </div>
          <div>
            xyz<br></br>
            {name}
          </div>
        </>
      );
    }
  }
  
  
  
  export default App;
  
  ```



- CSS사용

  ```react
  import React, { Component } from 'react';
  import './App.css';
  class App extends React.Component {
    render() { 
      let style={
        backgroundColor:'blue',
        padding: '16px',
        color: 'yellow',
        fontsize: '12px'
      };
      return(
        <div //주석 된다
            style={style}> {/*위에서 정의한 값을 넣어주는 것*/}
          안녕하세요
          <div className="App"> {/*클래스 이름을 "App"로 설정*/}
            App.css를 적용한 - 안녕하세요 
            // 주석 안됨
          </div>
        </div>
      );
    }
  }
  export default App;
  
  # App.css
  .App { # 클래스 이름이 "App"인것에 적용 
    background-color: black;
    color: aquamarine;
    font-size: 30px;
    padding: 1rem;
    font-weight: 600;
    text-align: center;
  }
  
  ```

- 


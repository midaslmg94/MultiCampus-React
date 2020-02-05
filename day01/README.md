# React 
##### 200204 화요일

- 프로퍼티(속성,요소) : `props`
  - 객체가 가지고 있는 특성 -- property(ex. 나이, 이름)
  - 부모가 자식에게 내려주는 값(=자식이 부모로 부터 받는 값)
- 상태 : `state`
  - 자기가 갖고있는 값
- 속성 : 객체가 가지고 있는 특성 -- property(ex. 나이, 이름)
- 동작 : 값에 대한 처리 -- method(ex.걷는다, 먹는다, 숨쉰다)



- 컴포넌트
  - 부모 컴포넌트
  - 자식 컴포넌트 



- create-react-app : 리액트의 진입장벽을 낮추기 위해서 제공 환경 --> 이것을 `부트스트랩`이라고 한다. 기본환경을 잡아주는 것
  - `npm start` : 개발 서버 실행
  - `npm run build` : 빌드 
  - `npm run eject` : 필요한 만큼 나누는 작업



- 리액트의 특징 
  - 가상 돔(virtual dom) : 문서 전체를 업데이트 하지 않고, 바뀐 부분만 수정해서 업데이트 함. 이렇게 하면 문서를 빠르고 효율적으로 수정 가능.
  - 함수형 프로그래밍 권장



- 리액트 개발 환경 직접 구축 --> 외부 패키지를 사용하지 않고 리액트 웹 페이지 제작

  - 바벨, 웹팩을 사용하여 구축

  - 리액트 라이브러리 다운로드
  
    ```txt
    https://unpkg.com/react@16.12.0/umd/react.development.js
    https://unpkg.com/react@16.12.0/umd/react.production.min.js
    https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js
  https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js
    ```
  
    - development가 들어간 파일 --> 개발 환경에서 사용하는 파일 --> 에러 메시지 확인 가능
    
    - production이 들어간 파일 --> 실행(배포)환경에서 사용하는 파일
    
    - react : 플랫폼 구분없이 공통으로 사용되는 파일(리액트 코어 파일)
    
    - react-dom : 웹 환경 개발에서 사용되는 파일
    
      

------

##### 200205 수요일

- 코드를 분할하지 않고 사용

  - App.js

  ```react
  #Todo.js
  import React from 'react';
  export function Todo({title}){
      return <div>{title}</div>
  }
  export default Todo;
  
  #TodoList.js
  // page 27 Code Splitting
  import React, {Component} from 'react';
  import Todo from '/.Todo.js';
  class TodoList extends Component{
      // state : 객체이며 상태변수. 해당 컴포넌트 내에서 사용(유지)되는 값
      state = {
          todos:  [],
      };
      onClickHandler=()=>{
          let {todos}=this.state;
          let position = todos.length+1;
          let newTodo = <Todo title={`할일 ${position}`} />
          this.setState({todos: [...todos, newTodo]});
      };
      render(){
          // 위에서 설정한 todos의 값이 전부 들어간다
          let {todos} = this.state;
          return(
              <div>                
                  <button onClick={this.onClickHandler}>할일 추가</button>
                  {todos}
              </div>
          );
      }
  }
  
  export default TodoList;
  
  #App.js
  import React from 'react';
  import TodoList from './TodoList.js';
  
  function App() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
  
  export default App;
  
  ```

- 

- 코드 분할하기( `page 27 Code Splitting`)

  - Todo.js

  ```react
  import React from 'react';
  // 상속을 받지 않고, 값의 상태변수가 필요없고, 단순 출력만 하려면 클래스형이 아니라 함수형으로 선언한다.
  // 다른 곳에서 Todo를 import 해서 쓸 수 있다, title : 프로퍼티
  export function Todo({title}){
      return <div>{title}</div>
  }
  
  // 위와 동일함
  function Todo({title}){
      return <div>{title}</div>
  }
  export default Todo;
  ```

  - TodoList.js

  ```react
  
  ```

  - TodoList.js

  ```react
  // page 27 Code Splitting
  import React, {Component} from 'react';
  //import Todo from './Todo.js';
  class TodoList extends Component{
      // state : 객체이며 상태변수. 해당 컴포넌트 내에서 사용(유지)되는 값
      state = {
          todos:  [],
      };
      onClickHandler=()=>{
          import('./Todo.js').then(({Todo})=>{
             
              let {todos}=this.state;
              let position = todos.length+1;
              let newTodo = <Todo title={`할일 ${position}번째`} />
              this.setState({todos: [...todos, newTodo]});
          });
      };
      render(){
          // 위에서 설정한 todos의 값이 전부 들어간다
          let {todos} = this.state;
          return(
              <div>                
                  <button onClick={this.onClickHandler}>할일 추가</button>
                  {todos}
              </div>
          );
      }
  }
  
  export default TodoList;
  ```

  
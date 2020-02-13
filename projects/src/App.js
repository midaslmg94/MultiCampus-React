import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends React.Component {
  id = 0;   // todos의 길이
  state = {
    input: '', 
    todos: []
  }

  //  Form 컴포넌트에서 필요한 기능을 정의

  //  추가 버튼을 클릭했을 때 처리 
  //  --> 할일 목록을 추가하고, 입력창의 내용을 지운다.
  onCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', 
      todos: todos.concat({
        id: this.id++, 
        text: input, 
        checked: false, 
      })
    });
  };

  //  키보드를 눌렀을 때 발생 
  //  --> 엔터키가 눌러지면 "추가" 버튼을 클릭한 것과 동일한 처리
  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.onCreate();
    }
  };

  //  입력창에 내용이 바뀌면 호출
  //  --> 상태 변수 input의 값을 변경
  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  // TodoItem에서 사용하는 기능을 정의
  // 할일을 클릭했을 때, 선택<->비선택
  onToggle=(id)=>{ 
    const{todos} = this.state;
    // id와 일치하는 배열의 인덱스를 조회
    const index = todos.findIndex(todo=>todo.id===id);
    // 일치하는 할일 정보(객체)를 추출
    const selected= todos[index];
    // 배열을 복사
    const nextTodos = [...todos];

    //  기존 객체의 변경된 부분만 반영 
    nextTodos[index] = {
        ...selected,
        checked: !selected.checked
    };
    this.setState({todos:nextTodos});

  };

  // 할일에서 삭제 아이콘을 클릭했을 때 호출
  // 상태변수 todos에서 해당 항목을 삭제하고
  // id 변수를 감소
  onRemove=(id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter(todo=>todo.id !==id);
    this.setState({todos:newTodos});
  };
  render() {
    const { input, todos } = this.state;
    const { onKeyPress, onCreate, onChange,onToggle, onRemove } = this;
    return (
      <div>
        <TodoListTemplate 
          form={
            <Form value={input} 
              onKeyPress={onKeyPress} 
              onCreate={onCreate} 
              onChange={onChange} />
          }>
          <TodoItemList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;

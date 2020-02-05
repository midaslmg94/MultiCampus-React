// page 27 Code Splitting
import React, {Component} from 'react';
//import Todo from '/.Todo.js';

class TodoList extends Component{
    // state : 객체이며 상태변수. 해당 컴포넌트 내에서 사용(유지)되는 값
    state = {
        todos:  [],
    };
    onClickHandler=()=>{
        import('./Todo.js').then(({Todo})=>{
            let {todos}=this.state;
            let position = todos.length+1;
            let newTodo = <Todo title={`할일 ${position}`} />;
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
import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const{todos, onToggle, onRemove} = this.props; 
        /* 비구조화 객체. props에 들어가는 것은 todos:[], onToggle:[], onRemove:()=>{}*/
        return (
            <Fragment>
                <TodoItem text="Hi" onToggle={onToggle}/>
                <TodoItem text="React"/>
                <TodoItem text="Fuck"/>
            </Fragment>
        );
    }
}
export default TodoItemList;
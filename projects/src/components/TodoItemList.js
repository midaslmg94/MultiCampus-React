import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {   
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
        return this.props.todos!=nextProps.todos;
    } 
    render() {
        const { todos, onToggle, onRemove } = this.props;
        return(
            <div>
                {   console.log("TodoItemList") }
                {
                    
                    todos.map(
                        ({ id, text, checked }) => (
                            <TodoItem text={text} 
                                checked={checked} id={id} 
                                onToggle={onToggle} onRemove={onRemove} />
                        )
                    )
                }
            </div>
        );
    }
}

export default TodoItemList;

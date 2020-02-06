import React, {Component} from 'react';

class MyComponent extends React.Component {
    state = {
        desc: '',
        currentId: 1,
        todoList: []
    };
    onAdd = () => {
        let {desc, currentId, todoList} = this.state;
        let todo = {
            id: currentId,
            desc
        };
        this.setState({
            currentId: currentId + 1,
            todoList: [
                ...todoList,
                todo
            ]
        });
    };
    onDelete = e => {
        let {todoList} = this.state;
        let id = Number(e.target.dataset.id);
        let newTodoList = todoList.filter(todo => todo.id !== id);
        this.setState({todoList: newTodoList});
    };
    onSaveToServer = () => {}
    onChangeDesc = e => {
        let desc = e.target.value;
        this.setState({desc});
    };
    render() {
        let {desc, todoList} = this.state;
        return (
            <div>
                <h3>할일 목록</h3>
                <ul>
                    {todoList.map(todo => (
                        <li key={todo.id}>
                            <span>{todo.desc}</span>
                            <button data-id={todo.id} onClick={this.onDelete}>삭제</button>
                        </li>
                    ))}
                </ul>

                <input type="txt" value={desc} onChange={this.onChangeDesc}></input>
                <button onClick={this.onAdd}>추가</button>
                <button onClick={this.onSaveToServer}>서버에 저장</button>

            </div>
        );
    }
}
export default MyComponent;

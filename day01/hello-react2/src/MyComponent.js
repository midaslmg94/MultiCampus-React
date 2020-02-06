import React, {Component} from 'react';

class MyComponent extends React.Component {
    state = {
        desc: '',
        currentId: 1,
        todoList: []
    };
    onAdd = () => {
        const {desc, currentId: id, todoList} = this.state; // 객체의 비구조화, currentId에 별명을 id로 부여함
        const todo = {
            id,
            desc
        }; // 단축 속성명 사용. desc :desc와 같음
        this.setState({
            id: id + 1,
            todoList: [
                ...todoList,
                todo
            ] // 기존의 Todo 리스트를 가지고오고, 새롭게 만든 할일을 추가
        });

    };
    onDelete = e => {
        let {todoList} = this.state;
        let id = Number(e.target.dataset.id); // data
        console.log(id);
        // filter 메소드는 뒤에 명시하고 있는 조건을 만족하는 원소로 다시 배열을 만들 때 사용한다.
        let newtodoList = todoList.filter(todo => todo.id != id)
        this.setState({todoList: newtodoList});
    };

    // 화면에 입력하는 값이 보일 수 있게 하는 핸들러
    onSaveToServer = () => {
        console.log(this.state.todoList);
    }
    onChangeDesc = e => {
        let desc = e.target.value;
        this.setState({desc}); // 단축 속성명 desc와 desc의 이름이 같기 때문

    };

    render() {
        let {desc, todoList} = this.state;
        return (
            <div>
                <h3>할일 목록</h3>
                <ul>
                    {/*todoList.map()에 소괄호를 씀. 반환하는 것이 객체이기 때문에 소괄호로 묶어준다.(화살표 함수이므로)*/}
                    {todoList.map(todo => (
                        <li key={todo.id}>
                            <span>{todo.desc}</span>
                            <button data-id={todo.id} onClick={this.todoList}>삭제</button>
                        </li>
                    ))}
                </ul>
                {/*desc : 입력한 값이 화면에 보일 수 있게 함*/}
                <input type="text" value={desc} onChange={this.onChangeDesc}></input>
                <button onClick={this.onAdd}>추가</button>
                <button onClick={this.onSaveToServer}>서버에 저장</button>

            </div>
        );
    }
}
export default MyComponent;

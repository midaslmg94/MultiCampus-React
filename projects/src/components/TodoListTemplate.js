import React, {Children} from 'react';
import './TodoListTemplate.css';
const TodoListTemplate = ({form, children}) => { // 함수형 컴포넌트는 상태변수를 가질 수 없으므로 props를 가지는 것이다. 이것은 App.js에서 파라미터로 넣어줘야 함
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할일
            </div>
            <section className="form-wrapper">
                {form} 
            </section>
            <section className="todos-wrapper">
                {children}
            </section>

        </main>
    );
};

export default TodoListTemplate;
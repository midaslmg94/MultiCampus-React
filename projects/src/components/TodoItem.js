import React, {Component, Fragment} from 'react';
import './TodoItem.css'
class TodoItem extends Component {
    render() {
        const {text, checked, id, onToggle, onRemove} = this.props;
        return (
            <Fragment>
                <div className="todo-item" onClick={() => onToggle(id)}>
                    <div
                        className="remove"
                        onClick={(e) => {
                        e.stopPropagation();
                        onRemove(id);
                    }}>
                        &times;
                    </div>
                    <div className={`todo-text ${checked && 'checked'}`}>
                        <div>{text}</div>
                        {/* checked의 상태에 따라 text에 적용되는 css를 다르게 하겠다는 의미*/}
                    </div>
                    {checked && (
                        <div className="check-mark"></div>
                    )
}
                </div>
            </Fragment>
        );
    }
}
export default TodoItem;
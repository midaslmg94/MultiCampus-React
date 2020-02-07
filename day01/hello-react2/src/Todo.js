import React, {Fragment} from 'react';
import Title from './Title';
class Todo extends React.Component {
    state = {
        priority: 'high'
    };
    onClick = () => {
        let {priority} = this.state;
        priority = priority === 'high'
            ? 'low'
            : 'high';
        this.setState({priority})
    };
    render() {
        let {title, desc} = this.props;
        let {priority} = this.state;
        let element = (
            <div>
                <Title title={title}/>
                <p>{desc}</p>
                <p>{priority === 'high'
                        ? '우선순위 높음'
                        : '우선순위 낮음'}</p>
                <button onClick={this.onClick}>우선순위 변경</button>
            </div>
        );
        return (element);
    }
}

export default Todo;
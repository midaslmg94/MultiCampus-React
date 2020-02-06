import React, {Fragment} from 'react';
import Title from './Title';
class TODO extends React.Component {
    state = {
        count: 0
    };
    onClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    render() {
        return (
            <Fragment>
                <Title title={`현재 카운트는 ${this.state.count}입니다`}/>
                <button onClick={this.onClick}>증가</button>
            </Fragment>
        );
    }
}

export default TODO;
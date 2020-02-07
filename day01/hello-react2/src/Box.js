import React from 'react';

class Box extends React.Component {
    state = {
        boxWidth: 0
    };
    divRef = React.createRef(); // 직접 제어하기 위해서 붙여 놓음
    componentDidMount() { // 렌더링 된 결과를 가져와서 state의 값을 바꾼다.
        let rect = this
            .divRef
            .current
            .getBoundingClientRect();
        this.setState({boxWidth: rect.width});
    }
    render() {
        let {boxWidth} = this.state;
        let backgroundColor = boxWidth < 400
            ? 'red'
            : 'blue';

        return (
            <div
                ref={this.divRef}
                style={{
                width: '100%',
                height: '100px',
                backgroundColor
            }}>Box</div>
        );
    }
}
export default Box;
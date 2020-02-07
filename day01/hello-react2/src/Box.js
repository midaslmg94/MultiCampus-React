import React from 'react';

class Box extends React.Component {
    state = {
        items: []
    };
    divRef = React.createRef(); // 직접 제어하기 위해서 붙여 놓음
    getSnapshotBeforeUpdate(prevProps, prevState) {
        let {items} = this.state;
        if (prevState.items.length < items.length) {
            let rect = this
                .divRef
                .current
                .getBoundingClientRect();
            console.log("getSnapshotBeforeUpdate")
            return rect.height;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            let rect = this
                .divRef
                .current
                .getBoundingClientRect();
            console.log(rect.height);
            if (rect.height !== snapshot) {
                console.log('새로운 줄이 추가되었습니다');
            }
        }
    }

    componentDidMount() { // 렌더링 된 결과를 가져와서 state의 값을 바꾼다.
        let rect = this
            .divRef
            .current
            .getBoundingClientRect();
        this.setState({boxWidth: rect.width});
    }
    onClick = () => {
        const {items} = this.state;
        this.setState({
            items: [
                ...items,
                `${items.length + 1}'s items `
            ]
        });
    };
    render() {
        let {items} = this.state;
        return (
            <div>
                <button onClick={this.onClick}>추가하기</button>
                <div
                    ref={this.divRef}
                    style={{
                    width: '100%'
                }}>
                    {items.map(item => <span style={{
                        height: 50
                    }}>
                        {item
}
                    </span>)}
                </div>

            </div>
        );
    }
}
export default Box;
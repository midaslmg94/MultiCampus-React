    class LikeButton extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                liked: false
            };
        }
        render() {
            let text = this.state.liked ? '좋아요 취소' : '좋아요';
            return React.createElement(
                'button', {
                    onClick: () =>
                        this.setState({
                            liked: !this.state.liked
                        })
                },
                text,
            );

        }
    }
    // page 11 코드 1-7 참조
    class Container extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }
        render() { 
            return (
                <div>
                    <LikeButton />
                    <div style={{marginTop: 20}}>
                        <span>현재 카운트:</span>
                        <span>{this.state.count}</span>
                        <button onClick={()=>this.setState({count: this.state.count+1})}>증가</button>
                        <button onClick={()=>this.setState({count: this.state.count-1})}>감소</button>
                    </div>
                </div>
            );
        }
    }
    ReactDOM.render(
        React.createElement(Container), document.querySelector('#react-root')
    );
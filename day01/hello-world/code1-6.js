class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    let text = this.state.liked ? '좋아요 취소' : '좋아요';
    return React.createElement('button', {
      onClick: () => this.setState({
        liked: !this.state.liked
      })
    }, text);
  }

} // page 11 코드 1-7 참조


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return React.createElement("div", null, React.createElement(LikeButton, null), React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8:"), React.createElement("span", null, this.state.count), React.createElement("button", {
      onClick: () => this.setState({
        count: this.state.count + 1
      })
    }, "\uC99D\uAC00"), React.createElement("button", {
      onClick: () => this.setState({
        count: this.state.count - 1
      })
    }, "\uAC10\uC18C")));
  }

}

ReactDOM.render(React.createElement(Container), document.querySelector('#react-root'));
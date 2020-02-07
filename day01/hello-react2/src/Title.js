import React from 'react';

class Title extends React.PureComponent {
    constructor(props) {
        super(props);

    }
    render() {
        let {title} = this.props;
        let element = <p style={{
            color: 'blue'
        }}>{title}</p>;
        console.log(element);
        return element;
    }

}
export default Title;
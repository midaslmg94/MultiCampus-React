import React from 'react';

class Child extends React.Component{
    render(){
        const props = this.props  // 불변성을 지켜라 
        return (
            <p><input value={props.name} onChange={props.onChange} /></p>
        );
    }
}

export default Child;
import React from 'react';
import Child from './Child';
class Parent extends React.Component {
    state = {
        name: ''
    };
    onChange = e=>{
        let {name}=this.state;
        name = e.target.value;
        this.setState({name});
    };

    render() {
        return (
            <>
                <h1>My name is {this.state.name}</h1>
                <Child name={this.state.name} onChange={this.onChange}/>
            </>
        );
    }
}
export default Parent;

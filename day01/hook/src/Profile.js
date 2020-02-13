import React, {useState} from 'react';

function Profile() {
    // [상태값, 상태값 변경 함수] = React.훅이름('초기값')
    //const [name, setName] = useState('');
    //const [age, setAge] = useState('');

    const [state, setState] = useState({name:'', age:''});
    /*state = {
        name: ''
    };
    onChange = e => {
        this.setState({name: e.target.value});
    };*/
    return (
        <div>
            <p>{`My name is ${state.name}`}</p>
            <p>{`My age is ${state.age}`}</p>
            <p>
                <input type="text" value={state.name} onChange={e=>{setState({...state, name: e.target.value})}}/>
                <input type="number" value={state.age} onChange={e=>{setState({...state, age:e.target.value})}}/>       
            </p>
        </div>
    );

}
export default Profile;
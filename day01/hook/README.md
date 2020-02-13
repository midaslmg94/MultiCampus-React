# React Hook


#### 리액트 훅

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. : 함수형 컴포넌트에서도 컴포넌트의 **상태값을 관리**할 수 있고, 컴포넌트의 **생명 주기 함수를 이용**할 수 있음





------

#### React.useState 

- 함수형 컴포넌트에 상태값 추가
  - 클래스형 컴포넌트로 구현

```react
import React from 'react';

class Profile extends React.Component {
    state = { name: '' };
    onChange = e => this.setState({ name: e.target.value });
    render() {
        return (
            <>
                <p>{`My name is ${this.state.name}`}</p>
                <p><input type="text" value={this.state.name} onChange={this.onChange}/></p>
            </>
        );
    }
}

export default Profile;

```

- 함수형 컴포넌트로 구현

```react
import React, {useState} from 'react';

function Profile() {
    // [상태값, 상태값 변경 함수] = React.훅이름('초기값')
    // state = {name: ''};
    const [name, setName] = useState('');
    return (
        <div>
          <p>{`My name is ${name}`}</p>
          <p><input type="text" value={name} onChange={e=>{setName(e.target.value)}}/></p>
        </div>
    );

}
export default Profile;
```



- name과 age를 하나의 변수에 담아서 함수형 컴포넌트로 구현

```react
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
                <input type="text" value={state.age} onChange={e=>{setState({...state, age:e.target.value})}}/>       
            </p>
        </div>
    );

}
export default Profile;
```



------

#### React.useEffect

- 함수형 컴포넌트에 생명 주기 함수 사용
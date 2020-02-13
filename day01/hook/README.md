# React Hook


#### 리액트 훅

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. : 함수형 컴포넌트에서도 컴포넌트의 **상태값을 관리**할 수 있고, 컴포넌트의 **생명 주기 함수를 이용**할 수 있음





------

#### React.useState 훅

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

#### React.useEffect 훅

- 함수형 컴포넌트에서 생명 주기 함수를 이용할 수 있도록
- 생명 주기 함수를 이용해서 DOM이외에 상태변수의 값을 출력
- 코드의 중복 방지, 간략화



- 클래스형 컴포넌트에서 생명주기 함수를 사용하면 부득이 코드 중복이 발생할 수 있다.

```react

import React from 'react';

class Effect extends React.Component{
    state={count:0};
    onClick=()=>{
        this.setState({count:this.state.count+1})
    };
    onClickZero=()=>{
        this.setState({count:0})
    };
	# 중복 발생
    componentDidMount(){
        document.title=`현재 클릭 수 : ${this.state.count}`;
    }
    componentDidUpdate(){
        document.title=`현재 클릭 수 : ${this.state.count}`;
    }

    render(){
        return(
            <div>
                <p>현재 클릭수:{this.state.count}</p>
                <p><button onClick={this.onClick}>클릭</button></p>
                <p><button onClick={this.onClickZero}>초기화</button></p>
            </div>
        );
    }
}
export default Effect;
```



- `useEffect` 훅을 사용해보자 --> 코드 중복을 줄이고 간결하게 만든다

```react
import React, {useEffect, useState} from 'react';

function Effect() {
    const [count, setCount] = useState(0);
    // 렌더링 결과가 실제 돔에  반영된 후 호출되는 훅
    useEffect(() => {
        document.title = `현재 클릭 수 : ${count}`;
    });
    return (
        <div>
            <p>현재 클릭수:{count}</p>
            <p>
                <button onClick={()=>setCount(count+1)}>클릭</button>
                <button onClick={()=>setCount(0)}>초기화</button>
            </p>
        </div>
    );

}
export default Effect;
```


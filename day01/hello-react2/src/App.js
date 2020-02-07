import React from 'react';
import './App.css';
import MyName from './Myname.js';
import MyName2 from './Myname2.js';
import Counter from './Counter.js';
import MyComponent from './MyComponent.js';
import Todo from './Todo';
import Box from './Box';

import ErrorBoundary from './ErrorBoundary';
// Context API로 데이터 전달하기
const UserContext = React.createContext('unknown');

class App extends React.Component {
    render() {

        return (
            <div>
                <UserContext.Provider value="minki">
                    <div>상단 메뉴</div>
                    <Profile/>
                    <div>하단 메뉴</div>
                </UserContext.Provider>
            </div>
        );
    }
}

function Profile() {
    return (
        <div>
            <Greeting/>
        </div>
    )
}
function Greeting() {
    return (
        <UserContext.Consumer>
            {username=><p>{`${username}님 안녕하세욤`}</p>}
        </UserContext.Consumer>
    );
}

export default App;

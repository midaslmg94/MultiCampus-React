import React from 'react';
import Parent from './Parent';

const UserContext = React.createContext('unknown');
const ThemeContext = React.createContext('dark');

class App extends React.Component {
  state = { username: '' };
  onChange = e => {
    const username = e.target.value;
    this.setState({ username });
  };
  render() {
    const { username } = this.state;
    return (
      <div>
        <Parent/> {/*상태값 올림*/}
        <ThemeContext.Provider value="light">
          <UserContext.Provider value={username}>
            <div>상단 메뉴</div>
            <Profile />
            <div>하단 메뉴</div>
          </UserContext.Provider>
        </ThemeContext.Provider>
        <input type="text" value={username} onChange={this.onChange} />        
      </div>
    );
  }
}

class Profile extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("Profile's render() called");
    return <div><Greeting /></div>;
  }
}

function Greeting() {
  console.log("Greeting() called");
  return (
    <ThemeContext.Consumer>
      { theme => (
        <UserContext.Consumer>
          { 
            username => (
              <p style={{ color: theme === 'dark' ? 'gray' : 'green' }}>{`${username}님 안녕하세요.`}</p>
            ) 
          }
        </UserContext.Consumer>
      ) }
    </ThemeContext.Consumer>
  );
}

export default App;


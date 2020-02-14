import React from 'react';
import Profile from './Profile.js';
import Effect from './Effect.js';
import WidthPrinter from './WidthPrinter.js'
import MyComponent from './MyComponent.js';
class App extends React.Component {
    render() {
        return (
            <div>
                <Profile/>
                <Effect/>
                <WidthPrinter/>
                <MyComponent/>
            </div>
        );
    }
}

export default App;

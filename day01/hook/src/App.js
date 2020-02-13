import React from 'react';
import Profile from './Profile.js';
import Effect from './Effect.js';
import WidthPrinter from './WidthPrinter.js'
class App extends React.Component {
    render() {
        return (
            <div>
                <Profile/>
                <Effect/>
                <WidthPrinter/>
            </div>
        );
    }
}

export default App;

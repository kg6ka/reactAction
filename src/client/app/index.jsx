import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/AwesomeComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello React!</p>
                <AwesomeComponent />
                <HeaderComponent x-try="123"/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
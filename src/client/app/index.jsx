import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/AwesomeComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';

const myApp = document.getElementById('app');
console.log('App start');

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello React!</p>
                <AwesomeComponent />
                <HeaderComponent x-try="123" numLimit={3}/>
            </div>
        );
    }
}

render(<App/>, myApp);
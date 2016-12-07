import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './components/AwesomeComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import FaderComponent from './components/fadeInComponent.jsx';
import UpdateComponent from './components/UpdateComponent.jsx';
import ArrayComponent from './components/ArrayComponent.jsx';
import BehaviorComponent from './components/BehaviorComponent.jsx';
import Child from './components/ChildeComponent.jsx';
import AppClone from './components/CloneComponent.jsx';

const myApp = document.getElementById('app');
const myUpdate = document.getElementById('update');
const behaviorBox = document.getElementById('behavior');

import './styles/common.css';

console.log('App start');

class App extends React.Component {
    render () {
        return (
            <div>
                <p> Hello React!</p>
                <AwesomeComponent />
                <HeaderComponent x-try="123" numLimit={3}/>
                <FaderComponent src="http://lorempixel.com/400/200/" width="400" height="200"/>
            </div>
        );
    }
}

render(<App/>, myApp);
render(
    <div>
        <UpdateComponent />
        <ArrayComponent />
    </div>, myUpdate);
render(
    <div>
        <BehaviorComponent />
        <Child />
        <AppClone />
    </div>,
    behaviorBox
);
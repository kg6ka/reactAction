import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Smth extends Component {
    constructor() {
        super();
        this.state = {
            currValue: '...',
            a: '',
            b: '',
            count: 0
        };
        this.updateState = this.updateState.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.updateBtn = this.updateBtn.bind(this);
    }
    updateState(e) {
        this.setState({currValue: e.type});
    }
    updateValue() {
        this.setState({
            a: this.a.refs.input.value, // ReactDOM.findDOMNode(this.a).value,
            b: this.refs.b.value
        });
    }
    updateBtn() {
        this.setState({
            count: this.state.count+1
        })
    }
    componentWillMount() {
        console.log('componentWillMount');
        this.setState({
            mount: 2
        })
    }
    render() {
        console.log('render');
        return (
            <div>
                <input type="text"
                       onPaste={this.updateState}
                       onClick={this.updateState}
                       onCopy={this.updateState}
                       onFocus={this.updateState}
                       onBlur={this.updateState}
                       onKeyPress={this.updateState}
                />
                <span>{this.state.currValue}</span>
                <hr/>
                <Input ref={ component => this.a = component }
                        type="text"
                       updateValue={this.updateValue}
                />
                <span>{this.state.a}</span>
                <hr/>
                <input ref="b"
                        type="text"
                       onChange={this.updateValue}
                />
                <span>{this.state.b}</span>
                <Button count={this.state.count} updateBtn={this.updateBtn} />
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount');
        console.log(ReactDOM.findDOMNode(this).querySelector('button'));
        this.inc = setInterval(this.updateBtn, 500);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.inc);
    }
}

class Input extends Component {
    render() {
        // <input type="text" onChange={this.props.updateValue}/>
        return <div>
                <input ref="input" type="text" onChange={this.props.updateValue}/>
               </div>
    }
}


class Button extends Component {
    render() {
        return <button type="button" onClick={this.props.updateBtn}>{this.props.count}</button>
    }
}

class Wrapper extends Component {
    mount() {
        ReactDOM.render(<Smth />, document.getElementById('a'))
    }
    unMount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <button type="button" onClick={this.mount.bind(this)}>Mount</button>
                <button type="button" onClick={this.unMount.bind(this)}>UnMount</button>
                <div id="a">A</div>
            </div>
        )
    }
}

export default Wrapper;

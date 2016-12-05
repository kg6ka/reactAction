import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './nav.model.jsx';
import TabList from './tabListComponent.jsx';

let nav = ['menu', 'contact', 'about us'];
let tablist = ['jake', 'bone', 'donald'];
let textInput = null;

class HeaderComponent extends React.Component  {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            value: '',
            selectedIdx: 0
        };
        this.navItem = this.navItem.bind(this);
        this.navList = this.navList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._handleAction = this._handleAction.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    navItem(props) {
        return (
            <li key={props}>
                <a href="#">{props}</a>
            </li>
        )
    }

    navList(props) {
        return <ul className="list">{props.map(item => this.navItem(item))}</ul>
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Text field value is: '" + this.state.value + "'");
    }

    logo(props) {
        return <h1 id="logo">{props}</h1>
    }

    _handleAction(e, selectedIdx) {
        e.preventDefault();
        this.setState({selectedIdx});
    }

    isActive(id) {
        return this.state.selectedIdx === id;
    }

    toggleAction() {
        // console.log(ReactDOM.findDOMNode(this.refs.input).querySelector("input"))
        // textInput.focus();
        this.refs.input.focus();
        this.setState({selectedIdx: (this.state.selectedIdx + 1) % this.props.numLimit});
    }

    get searchForm() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} noValidate="noValidate">
                <input ref="input"
                       type="text"
                       placeholder="Search"
                       id="search"
                       value={this.state.value}
                       onChange={this.handleChange}
                />
                <button type="submit">Search</button>
            </form>
        )
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    {this.logo('Logo')}
                    <div>{this.props['x-try']}</div>
                    <div className="holder">
                        <Navigation list={nav}
                                    isActive={this.isActive}
                                    action={this._handleAction}/>
                        {this.searchForm}
                        <TabList isActive={this.isActive} tabList={tablist}/>
                    </div>
                    <button type="button" className="btn" onClick={this.toggleAction.bind(this)}>ToggleBtn</button>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
import React from 'react';

let nav = ['menu', 'contact', 'about us'];

class HeaderComponent extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.navItem = this.navItem.bind(this);
        this.navList = this.navList.bind(this);
        this.handleChange = this.handleChange.bind(this)
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
        console.log("Text field value is: '" + this.state.value + "'");
    }

    logo(props) {
        return <h1 id="logo">{props}</h1>
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    {this.logo('Logo')}
                    <div>{this.props['x-try']}</div>
                    <div className="holder">
                        {this.navList(nav)}
                        <div>
                            <input type="text"
                                   placeholder="Search"
                                   id="search"
                                   value={this.state.value}
                                   onChange={this.handleChange}
                            />
                            <button onClick={this.handleSubmit.bind(this)} type="button">Search</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class ArrayComponent extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(res => res.json() )
            .then(({results: items}) => this.setState({items}))
    }
    filter(e) {
        this.setState({filter: e.target.value})
    }
    render() {
        let items = this.state.items;
        if(this.state.filter) {
            items = items.filter(item =>
            item.name.toLowerCase()
                .includes(this.state.filter.toLowerCase()))
        }
        return (
            <div>
                <input type="text"
                       onChange={this.filter.bind(this)}/>
                {items.map((item, i) => (
                    <div key={item.name}>
                        <h4>{`${i+1} ${item.name}`}</h4>
                    </div>
                    )
                )}
            </div>
        )
    }
}

export default ArrayComponent
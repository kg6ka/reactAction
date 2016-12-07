import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        )
    }
}

class Parent extends Component {
    render() {
        // let items = React.Children.toArray(this.props.children);
        let items = React.Children.map(this.props.children, child => child);
        console.log(items)
        return null;
    }
}

export default Child;
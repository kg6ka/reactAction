import React, {Component} from 'react';

class AppClone extends Component {
    render() {
        return (
            <Button>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>
            </Button>
        )

    }
}

class Button extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'None'
        }
    }
    selectItem(selected) {
        this.setState({selected})
    }
    render() {
        let smthDo = child =>
            React.cloneElement(child, {
             onClick: this.selectItem.bind(this, child.props.value)
            });

        let items = React.Children.map(this.props.children, smthDo);
        return (
            <div>
                <h2>You have Selected: {this.state.selected}</h2>
                {items}
            </div>
        )
    }
}

export default AppClone;
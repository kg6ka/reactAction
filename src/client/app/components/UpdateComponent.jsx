import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

const updateBox = document.getElementById('update');

class UpdateComponent extends Component {
    constructor() {
        super();
        this.state = {
            increasing: false
        }
    }

    static get defaultProps() {
        return {
            value: 0
        }
    }

    update() {
        render(
            <UpdateComponent value={this.props.value+1} />,
            updateBox
        )
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        this.setState({increasing: nextProps.value > this.props.value});
        console.log(this.state.increasing)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return nextProps.value % 5 === 0;
    }

    render() {
        // console.log(this.props.value);
        return (
            <article>
                <button type="button" onClick={this.update.bind(this)}>{this.props.value}</button>
            </article>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState);
        return true
    }
}

UpdateComponent.propTypes = {
    value: React.PropTypes.number
};

export default UpdateComponent;
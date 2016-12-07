import React from 'react';

export default class FaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false
        }
    }

    // onImgLoader() {
    //     if(this.isMounted()) this.setState({loader: true})
    // }

    componentDidMount() {
        let imgTag = this.refs.img;
        let imgSrc = imgTag.getAttribute('src');
        let img = new window.Image();
        img.src = imgSrc;
        console.log(img)
    }

    render() {
        return (
            <div>
                <img ref="img" {...this.props} alt="image description"/>
            </div>
        )
    }
}
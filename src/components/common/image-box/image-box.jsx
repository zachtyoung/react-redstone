import React, {Component} from 'react';
import './image-box.scss';

class ImageBox extends Component {
    render (){
        const {subTitle, title, bgImage} = this.props;
        return (
            <div className="image-box text-center">
                <div className="image-box-wrap">
                    <div className="image-box-bg" style={{backgroundImage: `url(${bgImage})`}}>
                    </div>
                    <div className="imgbox-bg-overlay">
                    </div>
                </div>
                <div className="image-box-content">
                <h2 className="title text-white text-uppercase">{title}</h2>
                    <div className="subtitle text-primary text-uppercase mb-3">{subTitle}</div>
                    
                </div>
            </div>
        )
    }
}

export default ImageBox
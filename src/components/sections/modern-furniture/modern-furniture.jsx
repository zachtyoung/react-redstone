import React, {Component} from 'react';
import '../explore-amenities/explore-amenities.scss';

class ModernFurnitureSection extends Component {
    render (){
        return (
            <div className="amenities-general">
                <div className="row amenities">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                        <img className="img-fluid" src="/assets/imagewebp/home-3/img2.jpg" alt=""/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd">
                        <div className="w-lg-75 mx-auto">
                            <h3 className="text-uppercase text-primary">Lorem, ipsum.</h3>
                            <h2 className="text-uppercase mb-4">Lorem, ipsum dolor.</h2>
                            <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium saepe blanditiis maiores tempora. Ut reprehenderit dolorum cum in accusantium, iusto facilis explicabo tempora fugit fuga, modi deleniti veritatis! Itaque!</p>
                            <a href="#" className="btn btn-outline-primary" role="button">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModernFurnitureSection
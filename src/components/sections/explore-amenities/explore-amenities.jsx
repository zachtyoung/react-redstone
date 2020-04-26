import React, {Component} from 'react';
import './explore-amenities.scss';

class ExploreAmenitiesSection extends Component {
    render (){
        return (
            <div className="amenities-general amenities-bg">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center pb-maxmd">
                        <div className="w-lg-75 mx-auto">
                            <h3 className="text-uppercase text-primary">Lorem ipsum dolor</h3>
                            <h2 className="text-uppercase mb-4">Lorem ipsum dolor</h2>
                            <p className="pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione eos sunt, vel dolore deserunt tenetur reiciendis maiores iste quis illo omnis praesentium, officiis maxime earum nostrum eum nihil explicabo. Mollitia.</p>
                            <a href="#" className="btn btn-outline-primary" role="button">Explore</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                        <img className="img-fluid" src="/assets/imagewebp/home-3/img1.jpg" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExploreAmenitiesSection
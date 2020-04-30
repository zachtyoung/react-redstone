import React, {Component} from 'react';
import './ourservices.scss';
import Heading from "../../common/heading/heading";

class OurServicesSection extends Component {
    render (){
        return (
            <div className="ourservices">
                <div className="container">
                    <Heading>Our Services</Heading>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-map"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Lorem, ipsum dolor.</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, corporis? Odio temporibus dolor aspernatur non.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-user"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Lorem, ipsum dolor.</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-coffee"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Lorem, ipsum dolor.</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-badge"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Lorem ipsum dolor sit amet consectetur.</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non reiciendis in perspiciatis debitis impedit sapiente blanditiis assumenda aperiam aliquid placeat!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="featured-box style-2 ">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-like"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Lorem ipsum dolor sit.</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit voluptates doloribus consequatur repellat?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 d-flex">
                            <div className="featured-box style-2">
                                <div className="featured-box-wrap">
                                    <div className="featured-box-top">
                                        <div className="featured-box-icon"><i className="opal-icon-config"></i></div>
                                        <h3 className="featured-box-title text-uppercase">Lorem, ipsum dolor.</h3>
                                    </div>
                                    <div className="featured-box-bottom">
                                        <p className="featured-box-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem enim laborum reiciendis cum sint magnam nam pariatur fuga. Animi.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurServicesSection
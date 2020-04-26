import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from 'react-helmet';
import './contact.scss';

class ContactPage extends Component {
    render() {

        return (
            <div className={`contact-page-wrap`}>
                <Helmet>
                    <title>Redstone Advisors | Contact</title>
                </Helmet>
                <Breadcrumb title={'Contact Us'}/>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon">
                                    <div className="icon"><i className="opal-icon-phone"></i></div>
                                    <div className="content">
                                        <span className="title text-uppercase">PHONE & FAX:</span>
                                        <p className="description">316-687-2143</p>
                                        <p className="description">316-687-2146</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon">
                                    <div className="icon"><i className="opal-icon-point"></i></div>
                                    <div className="content">
                                        <span className="title text-uppercase">ADDRESS :</span>
                                        <p className="description">8100 E. 22nd Street North, Bldg. 800</p>
                                        <p className="description">Wichita, KS 67226</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon no-border">
                                    <div className="icon"><i className="opal-icon-envelope"></i></div>
                                    <div className="content">
                                        <span className="title text-uppercase">E-MAIL :</span>
                                        <p className="description">jyeskie@redstoneadv.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="form-contact mb-5">
                        <h3 className="text-uppercase text-center">Get in Touch !</h3>
                        <div className="mt-4 row">
                            <div className="col-12 mb-3">
                                <textarea id="textareaComment" className="form-control" placeholder="Your Message" rows="3"></textarea>
                            </div>
                            <div className="col-6 mb-3">
                                <input type="text" className="form-control" id="exampleInputName" placeholder="Your Name"/>
                            </div>
                            <div className="col-6 mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email"/>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary w-100">LEAVE A
                                    message <i className="opal-icon-arrow"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage
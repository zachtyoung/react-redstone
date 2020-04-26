import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual'
import './footer.scss';
import Copyright from "../copyright/copyright";
import ContactForm from "../contact-form/contact-form";


class FooterOne extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {translate} = this.props;
        return (
            <footer className="site-footer">
                {/*<ShapeSVG position={`top`}/>*/}
                {/*Section #1*/}
                <div className="section-1 text-center">
                    <div className="container">
                        <h3 className="text-uppercase">ARE YOU INTERESTED</h3>
 
                    </div>

                </div>

                {/*Section 2*/}
                <div className="section-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <h6 className="heading-title">Redstone Advisors</h6>
                                <p>Redstone Advisors is an SEC registered investment advisor
specializing in the management of domestic fixed-income
portfolios for institutional and individual clients.</p>
                                <div className="icon-list footer-address">
                                    <ul>
                                        <li>
                                            <span className="icon-list-icon">
                                                ADDRESS:
                                            </span>
                                            <span className="icon-list-text">8100 E. 22nd Street North, Bldg. 800
Wichita, KS 67226</span>
                                        </li>
                                        <li>
                                            <span className="icon-list-icon">
                                                PHONE:
                                            </span>
                                            <span className="icon-list-text">316-687-2143</span>
                                        </li>
                                        <li>
                                            <span className="icon-list-icon">
                                                E-MAIL:
                                            </span>
                                            <span className="icon-list-text">jyeskie@redstoneadv.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <h6 className="heading-title">CONTACT ADVISOR</h6>
                                <div className="image-box-wrap">
                                    <div className="image-box-img"><img src="/assets/imagewebp/theme/avatar_footer.webp" alt="" className={`img-fluid`}/></div>
                                    <div className="image-box-content">
                                        <h3 className="image-box-title">Troy Young</h3>
                                        <span className="image-box-description">CHARTERED FINANCIAL ANALYST</span>
                                    </div>
                                </div>
                                <div className="icon-list">
                                    <ul>
                                        <li>
                                            <span className="icon-list-icon">
                                                <i className="fa fa-phone"></i>
                                            </span>
                                            <span className="icon-list-text">316-461-6735</span>
                                        </li>
                                        <li>
                                            <span className="icon-list-icon">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <span className="icon-list-text">tyoung@redstoneadv.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12"></div>
                            <div className="col-lg-4 col-md-12">
                                <h6 className="heading-title">ENQUIRE</h6>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Section #2*/}
                {/*Section 3*/}
                <div className="section-3">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-sm-12">
                                <Copyright title="RedstoneAdv"/>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default withTranslate(FooterOne);

import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from 'react-helmet';
import {Parallax} from 'react-parallax';
import Heading from "../../common/heading/heading";
import './about.scss';
import OurTeamBlock from "../../common/our-team/our-team";
import CallToActionSection from "../../sections/caltoaction/caltoaction";
import OurTeamSection from "../../sections/our-team/our-team";

class AboutPage extends Component {
    render() {
        return (
            <div className="about-page-wrap">
                <Helmet>
                    <title>Redstone Advisors | About</title>
                </Helmet>
                <Breadcrumb title={'About Us'}/>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                                <Heading>ABOUT REDSTONE</Heading>
                                <p className="text-black">
                                Redstone Advisors is an SEC registered investment advisor
specializing in the management of domestic fixed-income
portfolios for institutional and individual clients.
                                </p>
                                <p>
                                Redstone Advisors was established in 1991 and provides a highly personal approach to investment management. We specialize in fixed income portfolios for high net-worth individuals, retirement and benefit plans, corporate funds, and Taft/Hartley funds.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/about/banner_ab1.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">

                    <Parallax
                        className={`section-parallax`}
                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/about/bg_ab1.webp`}
                        bgImageAlt="the cat"
                        strength={500}
                    >
                        <div className="about-parallax  position-relative">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">10 MILLION +</div>
                                                <div className="counter-text">DOLLARS MANAGED</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">100%</div>
                                                <div className="counter-text">EMPLOYEE OWNED</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="box-counter text-center text-white">
                                            <div className="box-counter-wrap">
                                                <div className="counter-nummer">50+</div>
                                                <div className="counter-text">CLIENTS MANAGED CITY-WIDE</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Parallax>

                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/about/banner_ab2.webp" alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                                <Heading>FOCUS ON THE CLIENT</Heading>
                                <p>
                                Strategy guidelines are customized for each individual client's objectives.<br></br>
Direct relationship between client and portfolio team.<br></br>
Regular communication of portfolio and market status
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-left">
                                <Heading>Consistent Performance</Heading>       
                                <p>
                                With over 90 years of combined investment experience, we have proven success through different economic cycles.
                                </p>



                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/about/banner_ab3.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <img className="img-fluid" src="/assets/imagewebp/about/banner_ab4.webp" alt=""/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                                <Heading>STRONG FOUNDATION</Heading>
                                <p>
                                100% owned by active employees<br></br>
Fiduciary Responsibility required by SEC regulation and oversight

                                </p>
                                <p>
                                Member of Investment Advisors Association (IAA)<br></br>
Independent with no external ties
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <CallToActionSection/>
                </div>
                <div className="section-wrapper">
                    <OurTeamSection />
                </div>
            </div>
        )
    }
}

export default AboutPage
import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import './the-building.scss';
import CounterBlockStyle from "../../common/countup/countup-style";
import GallerrySection from "../../sections/gallerry/gallerry";
class TheBuildingPage extends Component {
    render (){

        return (
            <div className={`the-building-wrap`}>
                <Helmet>
                    <title>Redstone Advisors | Publications</title>
                </Helmet>
                <Breadcrumb title={'Publications'}/>
          
                <div className="section-wrapper">
                    <div className="container">
                        <div className="text-description text-center">
                            <div className="row mt-5 pt-5">
                                <div className="col-lg-6 col-md-12">
                                    <h3 className="text-primary mb-4">AMENITIES.</h3>
                                    <p>Conference facilities</p>
                                    <p>Reliable, fast Wi-Fi</p>
                                    <p>Easy access to parking and transportation</p>
                                    <p>Dining options</p>
                                    <p>Fully equipped fitness centers</p>
                                    <p>Outdoor space</p>
                                    <p>Eco-friendly options</p>
                                    <p>Charging outlets with USB ports</p>
                                    <p>Smart Controls for Heating/Cooling</p>
                                    <p>Retail Amenities</p>
                                    <p>Community events and classes</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h3 className="text-primary mb-4">SERVICES .</h3>
                                    <p>Daylight and artificial lighting</p>
                                    <p>Escalators and lifts</p>
                                    <p>Ventilation and refrigeration</p>
                                    <p>Security and alarm systems</p>
                                    <p>Fire detection and protection</p>
                                    <p>Energy supply and use</p>
                                    <p>Facade engineering</p>
                                    <p>Air conditioning and refrigeration</p>
                                    <p>Smart Controls for Heating/Cooling</p>
                                    <p>Heating and ventilating</p>
                                    <p>Water, drainage and plumbing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TheBuildingPage
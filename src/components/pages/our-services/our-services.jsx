import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import './our-services.scss';
import Heading from "../../common/heading/heading";
import OurServices from "../../sections/ourservices/ourservices";
class OurServicesPage extends Component {
    render (){

        return (
            <div className="our-services-wrap">
                <Helmet>
                    <title>Redstone | Our Services</title>
                </Helmet>
                <Breadcrumb title={`Our Services`}/>
                <div className="section-wrapper">
                    <OurServices/>
                </div>
            </div>
        )
    }
}

export default OurServicesPage
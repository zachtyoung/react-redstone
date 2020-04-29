import React, {Component} from 'react';
import Helmet from "react-helmet";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import ContentWrap from "../../common/content-wrap";
import {connect} from "react-redux";
import ApartmentArchiveBlock from "../../common/apartment/archive-apartment";

class ApartmentsPage extends Component {
    render() {
        return (
            <div className={`apartments-page-wrap`}>
                <Breadcrumb title={'Strategy'}/>
                <Helmet>
                    <title>Redstone Advisors | Strategy</title>
                </Helmet>
      <ContentWrap>
                   <p>Our objective is to maximize total return within established client guidelines and investment policy.</p>
                   <p>Over time, total returns in fixed income are driven predominately by changes in the level of interest rates and changes in the slope and curvature of the yield curve.</p>
           <p>We utilize a total return framework to construct efficient portfolios by isolating and analyzing the sensitivity of security and portfolio performance to changes in the level of interest rates and yield curve movements.</p>
           </ContentWrap>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.apartments.apartments,
    }
}

export default connect(mapStateToProps)(ApartmentsPage);
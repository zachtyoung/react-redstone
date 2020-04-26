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
                                    <h3 className="text-primary mb-4">Taxable Market Review</h3>
                                    <h6>2020</h6>
                                    <p>Q1</p>
                                    <h6>2019</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                    <h6>2018</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                    <h6>2017</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                    <h6>2016</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                    <h6>2015</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h3 className="text-primary mb-4">Municipal Market Review</h3>
                                    <h6>2020</h6>
                                    <p>Q1</p>
                                    <h6>2019</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                    <h6>2018</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                    <h6>2017</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                    <h6>2016</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
                                    <h6>2015</h6>
                                    <p>Q1 Q2 Q3 Q4</p>
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
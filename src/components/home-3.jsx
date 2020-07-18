import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import ImageBox from "./common/image-box/image-box";
import OurValuesSection from "./sections/ourvalues/ourvalues";
import ExploreAmenitiesSection from "./sections/explore-amenities/explore-amenities";
import ModernFurnitureSection from "./sections/modern-furniture/modern-furniture";
import OfficeSpaceSection from "./sections/office-space/office-space";
import CallToActionSection from "./sections/caltoaction/caltoaction";
import BlogBlockGridStyle1 from "./common/blog/blog";
import BlogBlockGridStyle2 from "./common/blog/blog1";
import {Link} from 'react-router-dom';
class Home3 extends Component {
    render() {
        return (
            <div className={`home-page-wrap`}>
                <Helmet>
                    <title>Redstone Advisors</title>
                </Helmet>
                <div className="section-wrapper pt-0">
                    <div className="categories-banner">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-xl-3 col-md-6">
                                    <Link to={`${process.env.PUBLIC_URL}/strategy`}>
                                    <ImageBox
                                        subTitle="Bonds are uniquely suited to meet investors' needs"
                                        title="WHY BONDS?"
                                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/home-3/the-building.webp`}
                                    >
                                    </ImageBox>
                                    </Link>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/about-us`}>
                                    <ImageBox
                                        subTitle="As Specialists, we are uniquely suited to actively manage bond portfolios"
                                        title="WHY REDSTONE?"
                                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/home-3/amenities.webp`}
                                    >
                                    </ImageBox>
                                    </Link>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/blog`}>
                                    <ImageBox
                                        subTitle="Since uncertainty is constant, now is always the right time to include bonds in a diversified investment strategy"
                                        title="WHY NOW?"
                                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/home-3/neighbourhood.webp`}
                                    >
                                    </ImageBox>
                                    </Link>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/contact-us`}>
                                    <ImageBox
                                        subTitle="Request a consultation or portfolio review with an investment professional"
                                        title="WHY NOT?"
                                        bgImage={`${process.env.PUBLIC_URL}/assets/imagewebp/home-3/the-modern.webp`}
                                    >
                                    </ImageBox>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="section-wrapper">
                    
                        <OurValuesSection/>
                </div> */}
                <div className="section-wrapper p-0">
                    <ExploreAmenitiesSection/>
                </div>
                <div className="section-wrapper p-0">
                    <ModernFurnitureSection/>
                </div>
                <div className="section-wrapper p-0">
                    <OfficeSpaceSection/>
                </div>
                <div className="section-wrapper p-0">
                    <CallToActionSection/>
                </div>
                <div className="section-wrapper bg-blog" style={{backgroundColor: "#f8f8f8"}}>
                    <BlogBlockGridStyle1/>
                </div>
            </div>
        )
    }
}

export default Home3;
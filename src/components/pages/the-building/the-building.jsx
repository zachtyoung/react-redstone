import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
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
                                <Tabs>
                            <TabList>
                             <Tab>2019</Tab>
                             <Tab>2020</Tab>
                            </TabList>
               
                                <TabPanel>
                                    <div className='pub-tabs'>
                                    <div className='pub-tabs-left'>Left</div>
                                    <div className='pub-tabs-right'>Right</div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                       <p>goodbye</p>
                                </TabPanel>
                        
                        </Tabs>
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
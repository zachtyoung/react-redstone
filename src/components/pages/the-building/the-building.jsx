import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import pdf from './red-pdf.svg'
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
                            <h3>Market Review</h3>
                            <div className="row mt-5 pt-5 pub-wrap">
                                <div className="col-lg-6 col-md-12">
                                    <h4>Taxable</h4>
                                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                <span>2020</span>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <ul>
                                <li><img src={pdf}></img>First Quarter of 2019</li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    2019
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <ul>
                                    <li><img src={pdf}></img>First Quarter of 2019</li>
                                    <li><img src={pdf}></img>Second Quarter of 2019</li>
                                    <li><img src={pdf}></img>Third Quarter of 2019</li>
                                    <li><img src={pdf}></img>Fourth Quarter of 2019</li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                   2018
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <ul>
                                    <li><img src={pdf}></img>First Quarter of 2018</li>
                                    <li><img src={pdf}></img>Second Quarter of 2018</li>
                                    <li><img src={pdf}></img>Third Quarter of 2018</li>
                                    <li><img src={pdf}></img>Fourth Quarter of 2018</li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                        
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h4>Municipal</h4>
                                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    2020
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <ul>
                                <li><img src={pdf}></img>First Quarter of 2019</li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                   2019
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <ul>
                                    <li><img src={pdf}></img>First Quarter of 2019</li>
                                    <li><img src={pdf}></img>Second Quarter of 2019</li>
                                    <li><img src={pdf}></img>Third Quarter of 2019</li>
                                    <li><img src={pdf}></img>Fourth Quarter of 2019</li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    2018
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <ul>
                                    <li><img src={pdf}></img>First Quarter of 2018</li>
                                    <li><img src={pdf}></img>Second Quarter of 2018</li>
                                    <li><img src={pdf}></img>Third Quarter of 2018</li>
                                    <li><img src={pdf}></img>Fourth Quarter of 2018</li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                        
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
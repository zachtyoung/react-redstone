import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import './faq.scss';
class FAQPage extends Component {
    render (){

        return (
            <div className="faq-wrap">
                <Helmet>
                    <title>Redstone Advisors | FAQ's</title>
                </Helmet>
                <Breadcrumb title={`FAQ's`}/>
                <div className="section-wrapper mt-5">
                    <div className="container">
                        <h3 className="text-uppercase text-center">Get all the answers to the most
                            frequently asked questions (FAQs) </h3>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="container">
                        <h2 className="text-uppercase text-center text-primary mb-5">general questions</h2>
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit unde numquam reiciendis error amet provident architecto cumque impedit animi, deleniti sunt tenetur, accusantium expedita magnam magni mollitia vitae sit.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Lorem ipsum dolor sit amet.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim laudantium minus debitis ipsum asperiores molestias, cupiditate repellendus alias? Cumque, commodi provident magnam rem a soluta.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur aliquam quas facilis necessitatibus hic officiis illum neque reprehenderit dolore! Blanditiis deserunt, quibusdam reprehenderit odio quos quasi dolore nobis harum eum, tempora ipsam aut magnam maxime, error perferendis sunt distinctio!
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    </div>
                </div>
                <div className="section-wrapper mb-5">
                    <div className="container">
                        <h2 className="text-uppercase text-center text-primary mb-5">OTHER QUESTIONS</h2>
                        <Accordion>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Lorem ipsum dolor sit amet consectetur.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit unde numquam reiciendis error amet provident architecto cumque impedit animi, deleniti sunt tenetur, accusantium expedita magnam magni mollitia vitae sit.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                   Lorem ipsum dolor sit.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit unde numquam reiciendis error amet provident architecto cumque impedit animi, deleniti sunt tenetur, accusantium expedita magnam magni mollitia vitae sit.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit unde numquam reiciendis error amet provident architecto cumque impedit animi, deleniti sunt tenetur, accusantium expedita magnam magni mollitia vitae sit.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Lorem, ipsum dolor.
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit unde numquam reiciendis error amet provident architecto cumque impedit animi, deleniti sunt tenetur, accusantium expedita magnam magni mollitia vitae sit.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQPage
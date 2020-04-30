import React, {Component} from 'react';
import Heading from "../../common/heading/heading";
import OurTeamBlock from "../../common/our-team/our-team";

class OurTeamSection extends Component {
    render (){
        return (
            <div className="ourteam">
                <div className="container">
                    <Heading>OUR TEAM</Heading>
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebp/about/team_1.webp" name={`Troy Young`} job={`Senior Portfolio Manager`} position={`top`}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempora!
                            </OurTeamBlock>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebp/about/team_2.webp" name={`Gary Gamm`} job={`Managing Director`} position={`bottom`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nobis! Nostrum assumenda explicabo magni architecto!
                            </OurTeamBlock>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebp/about/team_3.webp" name={`Marc Vincent`} job={`Managing Director`} position={`top`}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia, facere blanditiis asperiores necessitatibus ipsum. Corporis, dolor dolore. Ad, autem.
                            </OurTeamBlock>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <OurTeamBlock img="/assets/imagewebp/about/team_4.webp" name={`Patrica Statham`} job={`Portfolio Manager`} position={`bottom`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem nulla, quod explicabo reiciendis corrupti quam doloribus nemo.
                            </OurTeamBlock>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurTeamSection
import {React,Component} from "react";
import SliderPartners from "./../../Components/Sliders/SliderPartners";

class PartnerCard extends Component{
    render(props){
        let styled1= null;
        if(this.props.color){
            styled1={color:`${this.props.color}`};
        }
        return(
            <section id="our-partners">
                <div className=" mt-5 pt-5">
                    <div className="section-title pt-5 mt-5">
                        <h2 className="fs-86 mt-5" style={styled1}>{this.props.head}</h2>
                        <p> <span style={styled1}> <b>{this.props.footline1}</b> </span> {this.props.footline2}</p>
                        <SliderPartners/>
                        <SliderPartners/>
                    </div>
                </div>
            </section>
        )
    }
}

export default PartnerCard;
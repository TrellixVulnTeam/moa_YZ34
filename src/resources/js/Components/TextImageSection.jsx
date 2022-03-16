import {React,Component} from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import '../assets/css/text-image-section.css';
import ActionButton from "./Resources/ActionButton";

class TextImageSection extends Component{
    render(props){

        const bg={background:`${this.props.bgcolor}`};
        let imagebg={background:`${this.props.imgbgcolor}`};
        const imgClass = (this.props.image).replace('.png','');
        if(this.props.imgbgheight){
            imagebg = {background:`${this.props.imgbgcolor}`, height: `${this.props.imgbgheight}`};
        }
        console.log(imagebg);
        return(
            <Container className="r-height mb-5 pb-5" style={bg}>
                    <Row className="text-image-section">
                        <Col md="6" className="mx-auto ps-5 p-c">
                            <div className="lh-1">
                                <h2 className="text-light">
                                    {this.props.head1} <br/> 
                                    {this.props.head2} <br/>
                                    {this.props.head3}</h2>
                            </div>
                            <small className="text-light mt-2" style={{ fontSize:'2.4vmin',fontWeight:'600'}}>{this.props.footline}</small>
                            <p className="pt-4 text-light mt-4 f18" style={{ width:'85%'}}>{this.props.text1}
                            <br/><br/>
                            {this.props.text2}
                            </p>
                           {
                               this.props.readmore ?  <ActionButton
                               text="Read More"
                               variant="transparent"
                               href="#"
                               className={"m-l-2 text-prple slideRightAnimate"}
                               iconClass="bi bi-chevron-right ps-2"
                           />
                           : ''
                           }
                        </Col>
                        <Col md="6" className="mx-auto pe-5 d-flex justify-content-center">
                            <div className={'imgbg d-flex align-items-center m-'+imgClass} style={imagebg}>
                                <img src={process.env.MIX_PUBLIC_URL+this.props.image} className={'img-fluid '+imgClass}/>
                            </div>
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default TextImageSection;

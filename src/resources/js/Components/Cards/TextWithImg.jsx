import {React,Component} from "react";
import { Row,Col } from 'react-bootstrap';
import ActionButton from "../Resources/ActionButton";
import '../../assets/css/text-with-img.css';

class TextWithImg extends Component{
    render(props){
        let btnClass = '';
        if(this.props.btnHide=="true")
        {
            btnClass = 'd-none'
        }
        console.log(this.props.link);
        return(
            <Row className="text-with-image">
                <Col md='1'></Col>
                <Col md='5' className={"p-4 "+this.props.bg1}>
                    <h2>{this.props.head}</h2>
                    <h4>{this.props.subhead}</h4>
                    <p className="mt-3">{this.props.text}</p>
                    {this.props.btnTitle ? <ActionButton text={this.props.btnTitle} variant="dark" href={this.props.link} className={"px-5 mt-5 "+btnClass} iconClass="bi bi-chevron-right ps-2"/>  : '' }  
                </Col>
                <Col md='5' className={"justify-content-center d-flex "+this.props.bg2}>
                    <img src={this.props.img} style={{ maxWidth:'100%'}}/>
                </Col>
            </Row>
        )
    }
}

export default TextWithImg;
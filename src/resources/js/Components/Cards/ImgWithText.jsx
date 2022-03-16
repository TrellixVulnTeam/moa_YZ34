import {React,Component} from "react";
import { Row,Col } from 'react-bootstrap';
import ActionButton from "../Resources/ActionButton";
import '../../assets/css/img-with-text.css';

class TextWithImg extends Component{
    render(props){
        let btnClass = '';
        if(this.props.btnHide=="true")
        {
            btnClass = 'd-none'
        }
        let bg = 'bg-gery';
        if(this.props.bg=="light")
        {
            bg = '';
        }
        return(
            <Row className={"img-with-text py-5 "+bg}>
                <Col md='1'></Col>
                <Col md='5' className={"justify-content-center d-flex "+this.props.bg1}>
                    <img src={this.props.img} style={{ maxWidth:'100%'}}/>
                </Col>
                <Col md='5' className={"p-4 "+this.props.bg2}>
                    <h2>{this.props.head}</h2>
                    <h4>{this.props.subhead}</h4>
                    <p className="mt-3">{this.props.text}</p>
                    <ul>
                        {this.props.li1 ? <li>{this.props.li1}</li> : ''}
                        {this.props.li2 ? <li>{this.props.li2}</li> : ''}
                        {this.props.li2 ? <li>{this.props.li2}</li> : ''}
                        {this.props.li4 ? <li>{this.props.li4}</li> : ''}
                        {this.props.li5 ? <li>{this.props.li5}</li> : ''}
                        {this.props.li6 ? <li>{this.props.li6}</li> : ''}
                        {this.props.li7 ? <li>{this.props.li7}</li> : ''}
                        {this.props.li8 ? <li>{this.props.li8}</li> : ''}
                        {this.props.li9 ? <li>{this.props.li9}</li> : ''}
                        {this.props.li10 ? <li>{this.props.li10}</li> : ''}
                        {this.props.li11? <li>{this.props.li11}</li> : ''}
                        {this.props.li12? <li>{this.props.li12}</li> : ''}
                        {this.props.li13? <li>{this.props.li13}</li> : ''}
                        {this.props.li14? <li>{this.props.li14}</li> : ''}
                        {this.props.li15? <li>{this.props.li15}</li> : ''}
                    </ul>
                    {this.props.btnTitle ? <ActionButton  text={this.props.btnTitle} variant="dark" href={this.props.link} className={"px-5 mt-5 "+btnClass} iconClass="bi bi-chevron-right ps-2"/>  : '' }  
                </Col>
                
            </Row>
        )
    }
}

export default TextWithImg;
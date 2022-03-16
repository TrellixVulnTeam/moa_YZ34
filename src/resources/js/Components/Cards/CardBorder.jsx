import {React,Component} from 'react';
import { Col, Row } from 'react-bootstrap';

class CardBorder extends Component{
    render(props){
        let styled1={};
        if(this.props.headcolor){
            styled1={color:`${this.props.headcolor}`};
        }
        let colclass = '';
        if(this.props.colclass){
            colclass = this.props.colclass;
        }
        styled1.fontWeight='700';
        return(
            <Col md={4} className={'p-5 m-0 '+colclass} style={{border:"1px solid #E9E9EA"}}>
                <img src={this.props.img} className='mx-80' />
                <h5 style={styled1}>{this.props.head}</h5>
                <p className='text-dark'>{this.props.text}</p>
            </Col>
        )
    }
}
export default CardBorder;
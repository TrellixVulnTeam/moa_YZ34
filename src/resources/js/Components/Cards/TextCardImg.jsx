import {React,Component} from 'react';
import { Col, Row } from 'react-bootstrap';

class TextCardImg extends Component{
    render(props){
        let styled1=null;
        if(this.props.headcolor){
            styled1={color:`${this.props.headcolor}`};
        }
        let align = '';
        if(this.props.align){
            align = this.props.align;
        }
        styled1.fontWeight='700';
        return(
            <Row className={this.props.start=='true'? 'justify-content-center pt-5' : 'justify-content-center mt-1' }>
                    <Col md={3} className='p-4 text-left bg-light'>
                        <img src={this.props.img} className='mx-40' />
                        <h3 className={this.props.align !='' ? 'text-start' : ''} style={styled1} >{this.props.head}</h3>
                    </Col>

                    <Col md={7} className='p-4 bg-light m-0 d-table'>
                        <p style={{color:'#2A324B'}}>{this.props.text}</p>
                    </Col>
            </Row>
        )
    }
}
export default TextCardImg;
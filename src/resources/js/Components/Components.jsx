import { React, Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import '../assets/css/components.css';

class RetailComponents extends Component{
    render(props){
        let styled= null;
        let colSize = 3;

        let text1 = this.props.text1;
        let text2 = this.props.text2;
        let text3 = this.props.text3;
        let text4 = this.props.text4 ? this.props.text4 : '';
        
        text3 = text3.split('\n').map(str => <span>{str}<br/></span>);
        text1 = text1.split('\n').map(str => <span>{str}<br/></span>);
        text2 = text2.split('\n').map(str => <span>{str}<br/></span>);
        text4 = text4.split('\n').map(str => <span>{str}<br/></span>);

        if(this.props.color){
            styled={color:`${this.props.color}`};
        }
        if(this.props.head4){
            colSize=3
        }
        return(
            <section className="d-flex align-top justify-content-center mb-5 pb-5">
                <div className="mx-auto components container-fluid">
                    <Row className="text-xs-center d-flex justify-content-center ps-5">
                        <Col md={colSize} className='position-relative p-0 pt-5 pb-5'>
                            <Image src={process.env.MIX_PUBLIC_URL+this.props.image1} fluid='true'/>
                            <h3 style={styled} className="position-absolute tk-1">{this.props.head1}</h3>
                            <p className={this.props.text1class}>{text1}</p>
                        </Col>
                        <Col md={colSize} className='position-relative p-0 pt-5 pb-5'>
                            <Image src={process.env.MIX_PUBLIC_URL+this.props.image2} fluid='true'/>
                            <h3 style={styled} className="tk-2 position-absolute">{this.props.head2}</h3>
                            <p className={this.props.text2class}>{text2}</p>
                        </Col>
                        <Col md={colSize} className='position-relative p-0 pt-5 pb-5'>
                            <Image src={process.env.MIX_PUBLIC_URL+this.props.image3} fluid='true'/>
                            <h3 style={styled} className="tk-3 position-absolute">{this.props.head3}</h3>
                            <p className={this.props.text3class}>{text3}</p>
                        </Col>
                        {this.props.head4?
                        <Col md={colSize} className='position-relative p-0 pt-5 pb-5'>
                            <Image src={process.env.MIX_PUBLIC_URL+this.props.image4} fluid='true'/>
                            <h3 style={styled} className="tk-4 position-absolute">{this.props.head4}</h3>
                            <p className={this.props.text4class}>{text4}</p>
                        </Col>:''}
                    </Row>
                </div>
            </section>
        )
    }
}

export default RetailComponents;

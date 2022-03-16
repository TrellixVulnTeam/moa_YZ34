import { Row, Col } from 'react-bootstrap';
import '../../assets/css/features.css';

const Features = (props) =>{
    return (
        <Row className='features mx-0 pt-4'>
            <section className="d-flex align-top justify-content-center ">
             <div className="container position-relative mt-5 text-center">
                <h1 className="mt-5 f12">Features</h1>
                <p className="mb-5 f18">A broad range of convenient features designed for comprehensive business management.</p>
             </div>
            </section>            
            <Row className=''>
                    <Col className='right-hr top-hr-g'>
                        <Row className='py-5 ps-5 pe-2'>
                        <figure className="text-left">
                            <h3 className='pt-0'>{props.head1} <br/> {props.head1_1}</h3>
                            <figcaption style={{ width: '75%' }} className="pb-2">
                                {props.caption1}
                            </figcaption>
                        </figure>
                        </Row>
                        <Row className='py-5 ps-5 pe-2 top-hr-g'>
                        <figure className="text-left">
                            <h3 className='pt-0'>{props.head2} <br/> {props.head2_1}</h3>
                            <figcaption style={{ width: '75%' }} className="pb-2">
                            {props.caption2}
                            </figcaption>
                        </figure>
                        </Row>
                    </Col>
                    <Col className='right-hr top-hr'>
                        <Row className='py-5 ps-5 pe-2 h-50 d-flex align-items-center'>
                        <figure className="text-left align-middle">
                            <h3 className='pt-0'>{props.head3} <br/> {props.head3_1}</h3>
                            <figcaption style={{ width: '75%' }} className="pb-2">
                            {props.caption3}
                            </figcaption>
                        </figure>
                        </Row>
                        <Row className='py-5 ps-5 pe-2 top-hr'>
                        <figure className="text-left">
                            <h3 className='pt-0'>{props.head4} <br/> {props.head4_1}</h3>
                            <figcaption style={{ width: '75%' }} className="pb-2">
                                {props.caption4}
                            </figcaption>
                        </figure>
                        </Row>
                    </Col>
                    <Col>
                        <Row className='py-5 ps-5 pe-2 top-hr-right-g'>
                        <figure className="text-left pb-5">
                            <h3 className='pt-0'>{props.head5} <br/> {props.head5_1}</h3>
                            <figcaption style={{ width: '75%' }}>
                                {props.caption5}
                            </figcaption>
                        </figure>
                        </Row>
                        <Row className='py-5 ps-5 pe-2 top-hr-right-g'>
                        <figure className="text-left pb-5">
                            <h3 className='pt-0'>{props.head6} <br/> {props.head6_1}</h3>
                            <figcaption style={{ width: '75%' }}>
                                {props.caption6}
                            </figcaption>
                        </figure>
                        </Row>
                    </Col>
             </Row>
        </Row>
        
    )
}
export default Features;
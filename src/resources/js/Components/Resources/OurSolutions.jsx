import { Col, Image, Row } from "react-bootstrap";
import doors from '../../assets/img/door.svg';
import door from '../../assets/img/doorws.svg';
import v1 from '../../assets/img/v1.svg';
import v2 from '../../assets/img/v2.svg';
import gear1 from '../../assets/img/gear1.svg';
import gear2 from '../../assets/img/gear2.svg';
import retailIcon from '../../assets/img/retail-icon.svg';
import '../../assets/css/our-solutions.css';

const OurSolutions = (props)=>{ 
    const onClick = (url) => {
        window.location.href = url;
      }
    return(
        <Row>
                            <Col md={3} className="cursor-pointer" onClick={()=>onClick('turnkey-solution')}>
                                    <div className="door-effect text-blue ps-0">
                                        <div className="overlay overlay-blue"></div>
                                        <Image src={doors} className="door-img"/>
                                        <div className='door-handle'></div>
                                        <div className='door-handle door-handle-shadow'></div>
                                        <Image src={v2} className="icon-v icon-common"/>
                                        <h3>Turnkey</h3>
                                        <br />
                                    </div>
                                </Col>
                                <Col md={3} className="cursor-pointer" onClick={()=>onClick('white-label-solution')}>
                                    <div className="door-effect text-pink ps-0">
                                        <div className="overlay overlay-pink"></div>
                                        <Image src={door} className="door-img"/>
                                        <div className='door-handle'></div>
                                        <Image src={v1} className="icon-v icon-common"/>
                                        <h3>White Label</h3>
                                    </div>
                                </Col>
                                <Col md={3} className="cursor-pointer" onClick={()=>onClick('api-solution')}>
                                    <div className="door-effect text-yellow ps-0">
                                        <div className="overlay overlay-yellow"></div>
                                        <Image src={door} className="door-img"/>
                                        <div className='door-handle'></div>
                                        <Image src={gear1} className="icon-gear1 icon-common"/>
                                        <Image src={gear2} className="icon-gear2 icon-common"/>
                                        <h3>API</h3>
                                    </div>
                                </Col>
                                <Col md={3} className="cursor-pointer" onClick={()=>onClick('retail-betting-solution')}>
                                    <div className="door-effect text-green ps-0">
                                        <div className="overlay overlay-green"></div>
                                        <Image src={door} className="door-img"/>
                                        <div className='door-handle'></div>
                                        <Image src={retailIcon} className="icon-v icon-common"/>
                                        <h3>RETAIL</h3>
                                    </div>
                                </Col>
        </Row>
    )
}
export default OurSolutions;
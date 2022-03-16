import "bootstrap-icons/font/bootstrap-icons.css";
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const ScoreCard = (props)=>{
    return (
        <Row className="pt-5 justify-content-center mt-3">
        <Col md="3" className="rounded pt-4 pb-3 m-2" style={{ background:'#1F2332' }}>
          <h4 className='liener-gredient'>70000+</h4>
          <p className='text-light'>Live Match Events</p>
        </Col>
        <Col md="3" className="rounded pt-4 pb-3 m-2" style={{ background:'#1F2332' }}>
          <h4 className='liener-gredient'>140000+</h4>
          <p className='text-light'>Pre-match Events</p>
        </Col>
        <Col md="3" className="rounded pt-4 pb-3 m-2" style={{ background:'#1F2332' }}>
          <h4 className='liener-gredient'>120</h4>
          <p className='text-light'>Sport Types</p>
        </Col>
      </Row>
    )
}
export default ScoreCard;
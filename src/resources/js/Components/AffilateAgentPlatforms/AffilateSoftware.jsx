import { Container,Col,Row } from 'react-bootstrap';

const AffilateSoftware = () =>{
    return (
        <Container className='padding-affiliate pb-5'>
                <div className="row d-none d-lg-flex pt-5 mt-5">
                    <div className="col-6 text-center pe-0 me-0">
                            <p className='text-light fw-bold fw-28vmin'>Affiliate Software</p>
                    </div>
                    <div className="col-6 text-center pe-0 me-0">
                            <p className='text-grey fw-bold fw-28vmin'>Agent Management System</p>
                    </div>
                </div>
            <Row className='px-sm-3 pt-0 px-md-5 h-25'>
            <Col md={6}>
                <Col md={12} className="rounded darkbg px-5 pt-4 pb-3 text-center h-100">
                    <h2 className='cyan'>Monitoring</h2>
                    <p>Monitor and calculate your revenues easier than ever.</p>
                </Col>
            </Col>
            <Col md={6}>
            <Col md={12} className="rounded darkbg px-5 pt-4 pb-3 text-center h-100">
                    <h2 className='cyan'>Access</h2>
                    <p>Allow your agents to access all the necessary information about their players.</p>
            </Col>
            </Col>
            </Row>
            
            <Row className='px-sm-3 px-md-5 h-25'>
            <Col md={6}>
                <Col md={12} className="rounded darkbg px-5 pt-4 pb-3 text-center h-100">
                    <h2 className='purple'>Development</h2>
                    <p>Develop your business thanks to our cutting-edge technological enhancements.</p>
                </Col>
            </Col>
            <Col md={6}>
            <Col md={12} className="rounded darkbg px-5 pt-4 text-center h-100">
                    <h2 className='purple'>Opportunity</h2>
                    <p>Thanks to a technologically advanced agent management system, give your players the opportunity to measure all the risks involved.</p>
            </Col>
            </Col>
            </Row>

            <Row className='px-sm-3 px-md-5 h-25'>
            <Col md={6}>
                <Col md={12} className="rounded darkbg px-5 pt-4 pb-3 text-center h-100">
                    <h2 className='pink'>Marketing</h2>
                    <p>Utilize our innovative marketing tools to attract new players.</p>
                </Col>
            </Col>
            <Col md={6}>
            <Col md={12} className="rounded darkbg px-5 pt-4 text-center h-100">
                    <h2 className='pink'>Reward</h2>
                    <p>Reward your agents based on each player’s generated income manually or via an automated payment system.</p>
            </Col>
            </Col>
            </Row>

            <Row className='px-sm-3 px-md-5 h-25'>
            <Col md={6}>
                <Col md={12} className="rounded darkbg px-5 pt-4 pb-3 text-center h-100">
                    <h2 className='orange'>Platform</h2>
                    <p>Launch your affiliate platform with guaranteed traffic and engagement.</p>
                </Col>
            </Col>
            <Col md={6}>
            <Col md={12} className="rounded darkbg px-5 pt-4 pb-3 text-center h-100">
                    <h2 className='orange'>Complete</h2>
                    <p>Get complete global and multi-currency management over all your agents.</p>
            </Col>
            </Col>
            </Row>

            <Row className='px-sm-3 px-md-5 pb-5 h-25'>
            <Col md={6}>
                <Col md={12} className="rounded darkbg px-5 pt-4 pb-3 text-center h-100">
                    <h2 className='yellow'>Launch</h2>
                    <p>Launch your affiliate platform with guaranteed traffic and engagement.</p>
                </Col>
            </Col>
            <Col md={6}>
            <Col md={12} className="rounded darkbg px-5 pt-4 pb-3 text-center h-100">
                    <h2 className='yellow'>Complete</h2>
                    <p>Regulate your incoming cash streams, including real and credit transactions, comprehensively.</p>
            </Col>
            </Col>
            </Row>
        </Container>
    )
}

export default AffilateSoftware;
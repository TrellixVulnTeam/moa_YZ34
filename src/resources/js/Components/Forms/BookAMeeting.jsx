import {React,Component} from 'react';
import { Form,Row,Col } from 'react-bootstrap';
import ActionButton from "../Resources/ActionButton";

class BookAMeeting extends Component{  
    resetForm = () => { 
        document.getElementById("meeting-form").reset();
      }
    render(props){
        return(
          <Row className="text-center justify-content-center">
            <Col md="8" className='p-5 card-turkey rel-card c-one' style={{background:"rgba(245, 245, 247, 0.8)"}}>
                <Form id="meeting-form" className='text-start'> 
                    <div>
                        <ActionButton text=' Back' iconClass='bi bi-arrow-left-circle' href="./events" left='true' variant='' className=''/>
                        <h4 className='fs-2 fw-bolder my-4'>Book a meeting</h4>
                    </div>
                    <Row>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label> Date </Form.Label>
                            <Form.Control type="text" className='text-dark' style={{backgroundColor: '#ffffff !important'}}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label> Phone </Form.Label>
                            <Form.Control type="text" className='text-dark' style={{backgroundColor: '#ffffff !important'}}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label> Full Name </Form.Label>
                            <Form.Control type="text" className='text-dark' style={{backgroundColor: '#ffffff !important'}}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label> Company </Form.Label>
                            <Form.Control type="text" className='text-dark' style={{backgroundColor: '#ffffff !important'}}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label> Email </Form.Label>
                            <Form.Control type="text" className='text-dark' style={{backgroundColor: '#ffffff !important'}}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label> Country </Form.Label>
                            <Form.Control type="text" className='text-dark' style={{backgroundColor: '#ffffff !important'}}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-12">
                            <Form.Label> Your Message </Form.Label>
                                <Form.Control  as="textarea" rows={7} />
                        </Form.Group>
                    </Row>
                    <div class="d-grid gap-2 justify-content-end">
                        <ActionButton onClick={this.resetForm} text='Book a meeting' className={"mt-2 btn-black"} iconClass="bi bi-chevron-right ps-2"/>
                    </div>
                </Form>        
            </Col>
      </Row>
        )
    }
}

export default BookAMeeting;
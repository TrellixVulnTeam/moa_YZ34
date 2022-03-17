import './UpcomingEvent.style.css';
import { Row, Container } from 'react-bootstrap';
import Header from './../../Components/Headers/Header';
import BookAMeeting from "../../Components/Forms/BookAMeeting";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import { Form } from 'react-bootstrap';
import ActionButton from '../../Components/Resources/ActionButton';
import back from './ue-back.svg'
import right from "../../assets/img/right.svg"

const UpcomingEvent = () => {
    const resetForm = () => {
        document.getElementById("meeting-form").reset();
    }
    return (
        <div className='bm-wrapper'>
            <div className='bm-header'>
                <div className='bm-header-text'>
                    <h3>Upcoming</h3>
                    <h1>Event</h1>
                    <div><h6>UK, London</h6> <h6>16 Mar- 17 Mar 2022</h6></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, fames et arcu, eget nibh bibendum adipiscing et
                        Vitae, fames et arcu, eget nibh bibendum adipiscing et.
                    </p>
                </div>
            </div>

            <div className='form-wrapper'>
                <Form id="meeting-form" className='text-start ue-meeting-form'>
                    <div className='back-btn-wrapper'>
                        <img src={back} /> <span>BACK</span>
                    </div>
                    <h1>Book A meeting</h1>
                    <Row>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label className='ue-label'> Date </Form.Label>
                            <Form.Control type="text" className='text-dark ue-field' style={{ backgroundColor: '#ffffff !important' }} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label className='ue-label'> Phone </Form.Label>
                            <Form.Control type="text" className='text-dark  ue-field' style={{ backgroundColor: '#ffffff !important' }} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label className='ue-label'> Full Name </Form.Label>
                            <Form.Control type="text" className='text-dark  ue-field' style={{ backgroundColor: '#ffffff !important' }} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label className='ue-label'> Company </Form.Label>
                            <Form.Control type="text" className='text-dark  ue-field' style={{ backgroundColor: '#ffffff !important' }} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label className='ue-label'> Email </Form.Label>
                            <Form.Control type="text" className='text-dark  ue-field' style={{ backgroundColor: '#ffffff !important' }} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-6">
                            <Form.Label className='ue-label'> Country </Form.Label>
                            <Form.Control type="text" className='text-dark  ue-field' style={{ backgroundColor: '#ffffff !important' }} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-md-12">
                            <Form.Label className='ue-label'> Your Message </Form.Label>
                            <Form.Control as="textarea" className='ue-field-ta' rows={7} />
                        </Form.Group>
                    </Row>
                    <div class="d-grid gap-2 justify-content-end">
                        <button className='ue-btn' onClick={resetForm} >
                            <span>Contact Us</span>
                            <img src={right} />
                        </button>
                    </div>
                </Form>
            </div>
        </div>

    )
}
export default UpcomingEvent;

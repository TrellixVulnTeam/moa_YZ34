import './InovationExpo.style.css';
import { Row, Container } from 'react-bootstrap';
import Header from './../../Components/Headers/Header';
import BookAMeeting from "../../Components/Forms/BookAMeeting";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

const InovationExpo=()=>{
    return (
        <Container fluid>
            <NavBar/>
            <Row>
                <Header 
                    head='Inovation' 
                    head1="Expo"
                    subhead="UK, London &nbsp; &nbsp; &nbsp;  16 Mar - 17 Mar 2022"
                    subheadClass="text-light"
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, fames et arcu, eget nibh bibendum adipiscing et Vitae, fames et arcu, eget nibh bibendum adipiscing et.'
                    h2Class="h2-md-head" 
                    btnLessPedding="true" 
                    heading="top" 
                    textWidthClass="w-md-75" 
                    buttonBG="#000" 
                    bgimg='expo.png'
                    height="80vh"
                    btnClass="d-none"
                />
                <div className="text-center">
                    <div>
                        <BookAMeeting />
                        <div className='mt-5'></div>
                    </div>
                </div>
                <Footer/>
            </Row>
        </Container>

    )
}
export default InovationExpo;

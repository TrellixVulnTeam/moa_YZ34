import {React,Component} from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../Components/Headers/Header";
import TextImageSection from "../../Components/TextImageSection";
import APIComponents from "../../Components/APIComponents";
import TextHeader from "../../Components/Headers/TextHeader";
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";

class APISolution extends Component{
    render(){
        return(
            <Container fluid>
                <NavBar
                logo="moa-logo-black.svg"
                textClass="text-dark"
                bg="rgba(255, 255, 255, 0.1)"
                borderBottom="1px solid rgba(0, 0, 0, 0.2)"
                 />
                <Row>
                    <Header buttonBG='#ED6930' height='calc(92vh - 50px)' heading="top" h2Class="h2-lg-head" textWidthClass="w-md-68"  btnTitle="Contact us" hideWatchBtn="true" head='API' head1="Solution" text='Integrate various top-notch products into your already existing betting and gaming business to see tremendous progress in your revenue streams.' bgcolor='#CE9B90' href="/contact-us" />
                    <TextImageSection image='gear2.png' bgcolor='#CE9B90' imgbgcolor='rgba(146, 64, 29, 0.25)' head1='About' head2='API' head3='Solution' footline='A Comprehensive and Simple Approach' text1='Do you have an online betting and gaming business and need a powerful element to make it complete? MOA Gaming’s API solution gives you an exceptional opportunity to seamlessly integrate Sportsbook, Gaming Suite, Live Casino, Skill Games, and Poker into your existing betting and gaming business to enhance your revenue streams. Moreover, the operators who want to integrate MOA Gaming’s original products into their platform can do it without making any changes to their existing website. Our API integration is your perfect choice to make!'/>
                    <TextHeader fontClass="font-48" height='300px' color='#ED6930' head='API Solution Components' text=''/>
                    <APIComponents image1='1O.png' image2='2O.png' image3='3O.png' color='#ED6930' head1='Perfect for Existing Operators' head2='Large Variety of Products' head3='Fast and Easy' text1={'API is a perfect solution for already\nexisting operators.'} text2={'You can get a wide range of essential\nproducts within one integration.'} text3={'MOA Gaming’s API integration is\nguaranteed to be rapid and easy.'} text3class="p-4 text-start f18 position-absolute" text2class="p-4 text-center position-absolute f18" text1class="p-4 text-center f18 position-absolute" />
                    <Row className='justify-content-center pt-5 mt-5 pb-5 mb-5'>
                        <Col sm={8}  md={10} className='p-5 col-12  pb-4  ms-4' style={{ backgroundColor:'#ed6930',borderRadius:'15px' }}>
                            <h1 style={{color:'#fff',fontSize:'8.2vmin'}} className='fw-bold px-4 pt-2'>Why choose moa <br/> API Integration?</h1>
                            <p style={{fontSize:'2.4vmin !important'}} className='py-4 px-4 offwhiteText'>With our powerful and seamless API solution, you will be able to add popular games from various providers (Evolution, Netent, Pragmatic Play, Playtech, Habanero, Wazdan, Playson, etc.) and use a bunch of other useful products and features to accelerate your business and generate profit. MOA Gaming API integration will help you save time and resources and concentrate on the growth of your online gambling business. </p>
                        </Col>
                    </Row>
                    <div className="mb-5 pb-5"></div>
                    <Footer/>
                </Row>
            </Container>
        )
    }
}

export default APISolution;
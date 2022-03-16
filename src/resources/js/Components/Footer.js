import { Component } from 'react';
import logo from './../assets/img/Logo-footer.png';
import facebook_icon from './../assets/img/facebook.png';
import instagram_icon from './../assets/img/instagram.png';
import linkedin_icon from './../assets/img/linkedin.png';
import twitter_icon from './../assets/img/twitter.png';
import youtube_icon from './../assets/img/youtube.png';
import telegram_icon from './../assets/img/telegram.png';
import { Col, Form, Image, Row } from 'react-bootstrap';
import ActionButton from './Resources/ActionButton';
import '../assets/css/footer.css';

class Footer extends Component{  
    resetForm = () => { 
        document.getElementById("ready-to-kick-form").reset();
      }
    render(props){
    return (
    <footer id="footer" className="pt-5">

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 col-md-6 footer-contact">
              <div className='form-card p-4 pt-3 border-0 bg-white' id="formkickoff">
                        <h3 className='mb-5'>Ready To Kick Off?</h3>
                        <Form id="ready-to-kick-form">
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Name" className='text-dark' style={{backgroundColor: '#ffffff !important'}}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" placeholder="E-mail" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                as="textarea"
                                placeholder="Message"
                                rows={7}
                                />
                            </Form.Group>
                            <div className="d-grid gap-2">
                              <ActionButton text='Send' variant="dark" onClick={this.resetForm} className={"mt-2"}/>
                            </div>
                        </Form>
                    </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-links"></div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Sitemap</h4>
                <ul className="list-group">
                  <li> <a href="/" className='footer-link'> Home </a> </li>
                  <li> <a href="/about-us" className='footer-link'> About Us </a> </li>
                  <li> <a href="/world-class-solutions" className='footer-link'> Our Solutions  </a> </li>
                  <li> <a href="/sportsBettingSoftware" className='footer-link'> Sportsbook </a> </li>
                  <li> <a href="/gaming-services" className='footer-link'> Services </a> </li>
                  <li> <a href="/search-result" className='footer-link'> Blog </a> </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Address</h4>
                <ul className="list-group">
                  <li>Lorem Ipsum Dolor Sit Amet</li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Contact</h4>
                <ul className="list-group">
                  <li>
                      <a href="mailto:Moa@Moagaming.Com" target="_blank" className="footer-link"> Moa@Moagaming.Com </a>
                  </li>
                  <li>
                      <a href="tel:+3358189165" className="footer-link" target="_blank"> +3358189165 </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div className="container py-4">
          <Row>
            <Col md={10}>
            <div className="me-md-auto text-center pt-3 lh-lg">
            <Image src={logo}  style={{ height: '25px' }}  alt="logo" />
              <div className="copyright" style={{ color: '#06060A'}}>
                © 2021 MoaGaming. All rights reserved
              </div>
              <div className="credits">
              </div>
            </div>
            </Col>  
            <Col md={2}>
              <div className="social-links text-left text-md-start pt-3 pt-md-0">
                FOLLOW US<br/>
                <a href="https://www.facebook.com/moagaming.official/?ref=pages_you_manage" target="_blank" className="facebook"><img src={facebook_icon}/></a>
                <a href="https://www.instagram.com/moa.gaming/?hl=en" target="_blank" className="instagram"><img src={instagram_icon}/></a>
                <a href="https://www.linkedin.com/company/53481081/admin/" target="_blank" className="linkedin"><img src={linkedin_icon}/></a>
                <a href="https://twitter.com/MOA_Gaming" target="_blank" className="twitter"><img src={twitter_icon}/></a>
                <a href="https://www.youtube.com/channel/UClYLsXYDp7083HtJ4srmR0g" target="_blank" className="youtube"><img src={youtube_icon}/></a>
                <a href="https://t.me/moagamingofficial" target="_blank" className="telegram"><img src={telegram_icon}/></a>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
  );
  }
}

export default Footer;

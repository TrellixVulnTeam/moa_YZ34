import { Col, Form, Image, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer id='footer' className='pt-5'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 footer-contact'>
              <div
                className='form-card p-4 pt-3 border-0 bg-white'
                id='formkickoff'
              >
                <h3 className='mb-5'>Ready To Kick Off?</h3>
                <Form>
                  <Form.Group className='mb-3'>
                    <Form.Control
                      type='text'
                      placeholder='Name'
                      className='text-dark'
                      style={{ backgroundColor: '#ffffff !important' }}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control type='email' placeholder='E-mail' />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Control
                      as='textarea'
                      placeholder='Message'
                      rows={7}
                    />
                  </Form.Group>
                  <div className='d-grid gap-2'></div>
                </Form>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 footer-links'></div>
            <div className='col-lg-2 col-md-6 footer-links'>
              <h4>Sitemap</h4>
              <ul className='list-group'>
                <li>Home</li>
                <li>About us</li>
                <li>Our Solutions </li>
                <li>Sportsbook</li>
                <li>Services</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className='col-lg-2 col-md-6 footer-links'>
              <h4>Address</h4>
              <ul className='list-group'>
                <li>Lorem Ipsum Dolor Sit Amet</li>
              </ul>
            </div>

            <div className='col-lg-2 col-md-6 footer-links'>
              <h4>Contact</h4>
              <ul className='list-group'>
                <li>moa@moagaming.com</li>
                <li>+3358189165</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='container py-4'>
        <Row>
          <Col md={10}>
            <div className='me-md-auto text-center pt-3 lh-lg'>
              <Image src={null} style={{ height: '25px' }} alt='logo' />
              <div className='copyright' style={{ color: '#06060A' }}>
                © 2021 MoaGaming. All rights reserved
              </div>
              <div className='credits'></div>
            </div>
          </Col>
          <Col md={2}>
            <div className='social-links text-left text-md-start pt-3 pt-md-0'>
              FOLLOW US
              <br />
              <a
                href='https://www.facebook.com/moagaming.official/?ref=pages_you_manage'
                target='_blank'
                className='facebook'
              >
                <img src={null} />
              </a>
              <a
                href='https://www.instagram.com/moa.gaming/?hl=en'
                target='_blank'
                className='instagram'
              >
                <img src={null} />
              </a>
              <a
                href='https://www.linkedin.com/company/53481081/admin/'
                target='_blank'
                className='linkedin'
              >
                <img src={null} />
              </a>
              <a
                href='https://twitter.com/MOA_Gaming'
                target='_blank'
                className='twitter'
              >
                <img src={null} />
              </a>
              <a
                href='https://www.youtube.com/channel/UClYLsXYDp7083HtJ4srmR0g'
                target='_blank'
                className='youtube'
              >
                <img src={null} />
              </a>
              <a
                href='https://t.me/moagamingofficial'
                target='_blank'
                className='telegram'
              >
                <img src={null} />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;

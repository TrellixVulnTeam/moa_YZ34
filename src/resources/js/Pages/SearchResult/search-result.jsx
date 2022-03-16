import { Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import ArticleCard from '../../Components/Cards/ArticleCard';
import ActionButton from '../../Components/Resources/ActionButton';
import './search-result.style.css';
import React, { Component } from 'react'
import axios from 'axios';
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import WhyChooseMoa from "./../../Components/WhyChooseMoa";

class SearchResult extends Component{
    
    state = {
        filter: "",
        blogs:[],
        count: 0
      };
    
      handleChange = event => {
        axios.get(process.env.MIX_APP_URL+`/api/blog/search?search=`+event.target.value)
        .then(res => {
          const response = res.data;
          this.setState({ blogs: response.blogs });
          this.setState({ count: response.count });
        })
        this.setState({ filter: event.target.value });
      };
    
    
      componentDidMount() {
        axios.get(process.env.MIX_APP_URL+`/api/blog/search?search=`)
          .then(res => {
            const response = res.data;
            this.setState({ blogs: response.blogs });
            this.setState({ count: response.count });
          });
        
          document.body.classList.add('body-bg');
      }
    
        render(props){
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = this.state.blogs;
        const count = this.state.count;

        const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
        return(
            <Container fluid>
                <NavBar/>
                <Row>
                    <section className="search-result d-flex align-top">
                        <Container className='position-relative mt-5 justify-content-between'>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5 pb-2 mb-3">
                            <div className="row">
                                <Col md={12} className='pt-3'>
                                    <span className='search-result-text'>Search  Result for: </span><span className='search-words'>{filter}</span><br/>
                                    <span className='search-result-count'>{count} Articles</span>
                                </Col>
                            </div>
                            <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <Form className='search-keyword-form form-floating'>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        value={filter} onChange={this.handleChange}
                                        placeholder="Search here..."
                                        aria-label="Search here..."
                                        className='form-control-lg bg-transparent'
                                        aria-describedby="basic-addon2"/>
                                        <InputGroup.Text className='bg-transparent'>
                                            <i className="bi bi-search"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form>
                            </div>
                            </div>
                        </div>
                        </Container>
                    </section>
                    <section>
                    <Container className='position-relative mt-5 justify-content-center'>
                        <Row>
                            {
                            filteredData
                                .map(blog =>
                                    <Col md={4}>
                                        <ArticleCard id={blog[0].id} image={process.env.MIX_APP_URL+"/"+blog[0].image} title={blog[0].title} description={renderHTML(blog[0].body)} readingTime='Reading Time' date='Date'/>
                                        { blog[1] ? <ArticleCard id={blog[1].id} image={process.env.MIX_APP_URL+"/"+blog[1].image} title={blog[1].title} description={renderHTML(blog[1].body)} readingTime='Reading Time' date='Date'/> : '' }
                                    </Col>
                                )
                            } 
                        </Row>
                    </Container>
                    </section>
                    <section>
                    <Container>
                        <div className="section-title py-5 my-5">
                           <h2>Do You Want To Get Fresh <br/>
                           Content Each Week?
                           </h2>
                           <p className='fs-4'> Subscribe To Our Blog Now </p>
                           <Row className="justify-content-center">
                               <Col md="8" className="subscribe-border p-5">
                               <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="Write your Email"
                                        aria-label="Write your Email"
                                        className='form-control-lg bg-transparent mt-2'
                                        aria-describedby="basic-addon2"/>
                                        <ActionButton
                                            text='Subscribe'
                                            href='#'
                                            variant="dark"
                                            className="px-5 border-0 ms-3 mt-2"
                                            iconClass="bi bi-chevron-right ps-2"
                                            />
                                    </InputGroup>
                                </Col>
                           </Row>

                        </div>
                    </Container>
                </section>
                    <section>
                    <Container>
                        <div className="section-title">
                            <WhyChooseMoa/>
                        </div>
                    </Container>
                </section>
                    <Footer/>
            </Row>
        </Container>
        )
    }
}

export default SearchResult;
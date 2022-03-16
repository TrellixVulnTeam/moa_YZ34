import React, { Component } from 'react'
import { Card, Col, Container, Row } from "react-bootstrap";
import ActionButton from "../../Components/Resources/ActionButton";
import './article-style.css';
import Footer from "./../../Components/Footer";
import NavBar from "./../../Components/NavBar";
import axios from 'axios';
import { useParams } from "react-router-dom";
import WhyChooseMoa from './../../Components/WhyChooseMoa';
export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }

class Article extends Component{
    state = {
        blogs: [],
        blog: [],
      }
    
      componentDidMount() {
        axios.get(process.env.MIX_APP_URL+`/api/blog?id=`+this.props.match.params.slug)
        .then(res => {
            const blog = res.data;
            this.setState({ blog });
            axios.get(process.env.MIX_APP_URL+`/api/blogs/similar?keyword=`+blog.keywords)
            .then(res => {
              const blogs = res.data;
              this.setState({ blogs });
            })            
        })
       
      }

    render(){
     

        const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
        return(
            <Container fluid>
                <NavBar/>
                <Row>
                <section className="justify-content-center article-header"></section>
                <section className="mt-n10 ps-md-10 pe-md-10 mb-md-10 minHeightArticle">
                    <Row>
                    <Col md={8} className="p-5 article-content rounded-3">
                        <ActionButton text=' BACK' href="../search-result" iconClass='bi bi-arrow-left-circle' left='true' variant='' className='back-btn'/>
                        <h2 className="pt-4">{this.state.blog.title}</h2>
                        {renderHTML(this.state.blog.body)}<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Vitae Tincidunt Risus.Ut Vitae<br/>
                    </Col>
                    <Col md={3} className='pt-md-26 ps-md-4 sublinks'>
                        <h6 className='ps-2'>What is White Label?</h6>
                        <h6 className='ps-2 pt-4'>How Working with That!</h6>
                        <h6 className='ps-2 pt-4'>Developing Our Relationship</h6>
                        <ActionButton className='outline-blue mt-4' text='How Working with That!'/>
                    </Col>
                    </Row>
                </section>
                <section className="justify-content-center mb-md-10">
                    
                    <Row className="mx-auto justify-content-center text-center">
                        <h5 className="ps-2">Similar Articles</h5>

                        {
                            this.state.blogs
                                .map(blog =>
                                    <Card style={{ width: '28rem',cursor:'pointer'}} className='me-2 p-0 mt-2'>
                                    <Card.Img variant="top" src={process.env.MIX_APP_URL+"/"+blog.image} />
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>
                                        {renderHTML(blog.body)}
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                )
                        } 
                        
                        
                    </Row>
                </section>
                <Row className='d-flex justify-content-center mx-auto'>
                        <Col md={10} sm={10}>
                            <WhyChooseMoa className="radius-8"/>
                        </Col>
                    </Row>

                <Footer/>
            </Row>
        </Container>
        )
    }
}

export default withRouter(Article);
import React, { Component } from 'react'
import BlogItem from './BlogItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';

class Blog extends Component{

  state = {
    blogs: []
  }

  componentDidMount() {
    axios.get(process.env.MIX_APP_URL+`/api/blogs`)
      .then(res => {
        const blogs = res.data;
        this.setState({ blogs });
      })
  }

    render(props){
      const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
        return (
          <section id="blog">
            <div className="container">
              <div className="section-title">
                <h2>Blog </h2>
                <p>Get to know us and the iGaming industry from a fresh perspective</p>
                <Row className='mt-5'>
                  {
                  this.state.blogs
                      .map(blog =>
                        <Col lg="4">
                          <BlogItem id={blog[0].id} title1={blog[0].title} text={renderHTML(blog[0].body)} img={process.env.MIX_APP_URL+"/"+blog[0].image} />
                          <BlogItem id={blog[1].id} title1={blog[1].title} text={renderHTML(blog[1].body)} img={process.env.MIX_APP_URL+"/"+blog[1].image} />
                        </Col>
                      )
                  }       
                </Row>
              </div>
            </div>
          </section>
    );
  }
}

export default Blog;

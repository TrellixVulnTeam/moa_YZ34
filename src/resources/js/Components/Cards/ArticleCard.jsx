import {React,Component} from 'react';
import { Image,Row } from 'react-bootstrap';
import '../../assets/css/article-card.css';

  const ArticleCard = (props) => {
    const onClick = () => {
      window.location.href = "/blog/"+props.id;
    }
    return(
      <div className="card card-cover overflow-hidden text-white holder-img mt-3" style={{cursor:'pointer'}}  onClick={onClick}>
          <div className="overflow-hidden row"><Image src={props.image}/></div>
        <h2 className="pt-4 ps-2 mt-1 position-absolute lh-1 fw-bold blog-title">{props.title}</h2>
        <div className="d-flex flex-column card-footer">
          <Row><p className='text-dark'>{props.description}</p></Row>
          <div className="justify-content-between footer-reading">
            <span className='float-start'>{props.readingTime}</span>
            <span className='float-end'>{props.date}</span>
          </div>
        </div>
      </div>
    )

     
} 

export default ArticleCard;
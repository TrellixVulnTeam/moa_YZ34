import { Carousel } from 'react-bootstrap';
import { Component } from 'react';
import axios from 'axios';

class SliderSportsBook extends Component{

  state = {
    images: []
  }

  componentDidMount() {
    axios.get(`http://159.89.168.17/get-slider-images?type=sportsbook`,{
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
      }
    })
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
  }

    render(props){
        return (
          <div>
              <Carousel>
                {
              this.state.images
                .map(image =>
                  <Carousel.Item interval="2000">
                  <img className="d-block w-100" src={image}/>
                </Carousel.Item>
                )
            }
            </Carousel>
          </div>
        )
    }
}
export default SliderSportsBook;

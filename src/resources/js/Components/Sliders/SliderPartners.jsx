import { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/css/multi-carousel.css';

class SliderPartners extends Component{

  state = {
    images: []
  }

  componentDidMount() {
    axios.get(process.env.MIX_APP_URL+`/hello.php?type=partner`)
      .then(res => {
        const images = res.data;
        console.log(images);
        this.setState({ images });
      })
  }

    render(props){
        return (
            <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={10}
            centerMode={false}
            className="z"
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass="y"
            draggable
            focusOnSelect={false}
            infinite
            itemClass="x"
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 8,
                partialVisibilityGutter: 20
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            transitionDuration={2000}
          >
            {
            this.state.images
                .map(image =>
                    <img src={image} style={{width:'100%'}} alt="" />
                )
            }


          </Carousel>
        )
    }
}
export default SliderPartners;

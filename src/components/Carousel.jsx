import { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Movie from './Movie'
import CarouselButton from './CarouselButton'

class BimalCarousel extends Component {


  render() {
    return (
      <Carousel interval={null} className="carousel-fixed">
          <Carousel.Item>
            <div className="row">
              <Movie movie={this.props.moviesArray[0]}/>
              <Movie movie={this.props.moviesArray[1]}/>
              <Movie movie={this.props.moviesArray[2]}/>
              <Movie movie={this.props.moviesArray[3]}/>
              <Movie movie={this.props.moviesArray[4]}/>
              <Movie movie={this.props.moviesArray[5]}/>
            </div>
          </Carousel.Item>
          
          <Carousel.Item>
            <div className="row">
              <Movie movie={this.props.moviesArray[6]}/>
              <Movie movie={this.props.moviesArray[7]}/>
              <Movie movie={this.props.moviesArray[8]}/>
              <Movie movie={this.props.moviesArray[9]}/>
              <Movie movie={this.props.moviesArray[1]}/>
              <Movie movie={this.props.moviesArray[0]}/>
            </div>
          </Carousel.Item>
      </Carousel>
    )
  }
}

export default BimalCarousel
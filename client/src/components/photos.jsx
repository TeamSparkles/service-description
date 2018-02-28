import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class Photos extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    var imgUrl = this.props.photos[1];
    const imgStyle ={
      width: "600px",
      height: "337.5px",
      backgroundSize: 'cover',
      backgroundImage: "url('" + imgUrl + "')",
    };

    return (
        <div className="photos-container">
          <Carousel showStatus={false}>
            <div className="photosCarousel" style={imgStyle}></div>
            <div className="photosCarousel" style={imgStyle}></div>
            <div className="photosCarousel" style={imgStyle}></div>
          </Carousel>
        </div>
    );

  }
}

export default Photos;

    // return (
    //   <div className= "photosContainer" style={imgStyle}></div>
    // )
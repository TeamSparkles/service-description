import React from 'react';
import { Carousel } from 'react-responsive-carousel';

class Photos extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    var output = [];

    for (var i =0; i < this.props.photos.length; i++) {
      var imgUrl = this.props.photos[i];
      const imgStyle ={
        width: "600px",
        height: "337.5px",
        backgroundSize: 'cover',
        backgroundImage: "url('" + imgUrl + "')",
      };
      output.push(<div key={i} className="photosCarousel" style={imgStyle}></div>)
    }

    return (
        <div className="photos-container">
          <Carousel showStatus={false} showThumbs={false} showIndicators={this.props.photos.length > 1}>
            {output}
          </Carousel>
        </div>
    );

  }
}

export default Photos;

    // return (
    //   <div className= "photosContainer" style={imgStyle}></div>
    // )
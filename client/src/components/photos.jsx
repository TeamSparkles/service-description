import React from 'react';

class Photos extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    var imgUrl = "https://secure.meetupstatic.com/photos/event/a/b/6/c/highres_468643884.jpeg"
    const imgStyle ={
      width: "600px",
      height: "337.5px",
      backgroundSize: 'cover',
      backgroundImage: "url('" + imgUrl + "')"
    };

    return (
      <div className= "photosContainer" style={imgStyle}></div>
    )
  }
}

export default Photos;
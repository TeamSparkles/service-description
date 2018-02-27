import React from 'react';

class Photos extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    var imgUrl = this.props.photos[0];
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
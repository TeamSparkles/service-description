import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

const Photos = ({ photos }) => {
  const output = [];

  for (let i = 0; i < photos.length; i += 1) {
    const imgUrl = photos[i];
    const imgStyle = {
      width: '600px',
      height: '337.5px',
      backgroundSize: 'cover',
      backgroundImage: `url(${imgUrl})`,
    };
    output.push(<div key={i} className="photosCarousel" style={imgStyle} />);
  }

  return (
    <div className="photosContainer">
      <Carousel showStatus={false} showThumbs={false} showIndicators={photos.length > 1}>
        {output}
      </Carousel>
    </div>
  );
};

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Photos;

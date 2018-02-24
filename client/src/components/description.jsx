import React from 'react';
import Parser from 'html-react-parser';

class Description extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div>
        {Parser(this.props.details)}
      </div>
    )
  }
}

export default Description;
import React from 'react';
import Parser from 'html-react-parser';

class Description extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var output = <p>this will disappear if rendering correctly</p>;
    if (this.props.details) {
      output = Parser(this.props.details)
    }

    return (
      <div className="runningText">
        {output}
      </div>
    )
  }
}

export default Description;
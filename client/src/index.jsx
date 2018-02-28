import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Description from './components/description.jsx';
import Photos from './components/photos.jsx';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      details: '',
      photos: ['https://tinyurl.com/yc2jgbyq']
    }
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    var that = this;
    axios.get('/details')
      .then(function(res) {
        that.setState({details: res.data[2].details});
        that.setState({photos: res.data[2].photos});
      })
      .catch(function(err) {
        console.log(err);
      })
  }


  render() {

    return (
      <div>
        <div className="event-details-container">
          <Photos photos={this.state.photos}/>
          <div className="sectionTitle"><h3>Details</h3></div>
          <Description details={this.state.details}/>
        </div>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));
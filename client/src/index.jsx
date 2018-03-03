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
      photos: ['https://cdn.makeawebsitehub.com/wp-content/uploads/2016/03/error-with-wordpress.png']
    }
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    var that = this;
    const url = window.location.href;
    const urlEnd = url.split('/event/')[1];
    const eventId = urlEnd.split('/')[0];

    axios.get('/api/event/' + eventId)
      .then(function(res) {
        that.setState({details: res.data.details});
        that.setState({photos: res.data.photos});
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
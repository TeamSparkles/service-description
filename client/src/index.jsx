import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Description from './components/description';
import Photos from './components/photos';
import styles from './styles/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: '',
      photos: ['https://cdn.makeawebsitehub.com/wp-content/uploads/2016/03/error-with-wordpress.png'],
    };
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    const url = window.location.href;
    const urlEnd = url.split('/event/')[1];
    const eventId = urlEnd.split('/')[0];

    axios.get(`http://localhost:4000/api/event/${eventId}`)
      .then((res) => {
        this.setState({ details: res.data.details });
        this.setState({ photos: res.data.photos });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    return (
      <div>
        <div className="eventDetailsContainer">
          <Photos photos={this.state.photos} />
          <div className="sectionTitle"><h3>Details</h3></div>
          <Description details={this.state.details} />
        </div>
      </div>
    );
  }
}

window.Details = App;
window.ReactDOM = ReactDOM;

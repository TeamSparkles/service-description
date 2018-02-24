import React from 'react';
import ReactDOM from 'react-dom';
import Description from './components/description.jsx';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      details: ''
    }
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    var that = this;
    axios.get('/details')
      .then(function(res) {
        that.setState({details: res.data[0].details});
      })
  }


  render() {

    return (
      <div>
        <div>
          <h1>Hello World!</h1>
        </div>
        <div>
          <Description details={this.state.details}/>
        </div>

      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));
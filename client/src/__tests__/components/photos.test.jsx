import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Photos from './../../components/Photos';

Enzyme.configure({ adapter: new Adapter() });

var url1 = 'https://images.pexels.com/photos/245239/pexels-photo-245239.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb';
var url2 = 'https://images.pexels.com/photos/789818/pexels-photo-789818.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb'
var photos = [url1, url2];

describe ('Photos', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Photos photos={photos}/>, div);
  })
})
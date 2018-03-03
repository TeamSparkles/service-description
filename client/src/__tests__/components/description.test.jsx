import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Description from './../../components/Description';

Enzyme.configure({ adapter: new Adapter() });

describe ('Description', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Description />, div);
  })
})
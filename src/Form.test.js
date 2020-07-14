import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import Form from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
});

it('shallow renders without crashing', () => {
  shallow(<Form />);
});

describe('Color Selection', () => {
    const onSearchMock = jest.fn();
    const wrapper = shallow(<Form onChange={onSearchMock}/>)

    it('Initial value should be correct',() =>{
        expect(wrapper.find('select').at(0).prop("value")).toBe("");
    })

    it('Selecting value should work', () => {
        wrapper.find('select').at(0).simulate('change', {target: {name: 'color', value: 'red'}})
      
        // value should change to red
        expect(wrapper.find('select').at(0).prop("value")).toBe("red");
    })
});

describe('Sun Roof Selection', () => {
    const onSearchMock = jest.fn();
    const wrapper = shallow(<Form onChange={onSearchMock}/>)

    it('Initial value should be correct',() =>{
        expect(wrapper.find('select').at(1).prop("value")).toBe("");
    })

    it('Selecting value should work', () => {
        wrapper.find('select').at(1).simulate('change', {target: {name: 'sunRoof', value: 'true'}})
      
        // value should change to true
        expect(wrapper.find('select').at(1).prop("value")).toBe("true");
    })
});
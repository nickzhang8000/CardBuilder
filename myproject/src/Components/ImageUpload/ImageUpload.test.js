import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import ImageUpload from './ImageUpload';
configure({adapter: new Adapter()});


describe('<ImageUpload />', () => {
  it('should render div tag', () => {
    const renderedComponent = shallow(<ImageUpload />);
    expect(renderedComponent.type()).toEqual('div');
  });

});

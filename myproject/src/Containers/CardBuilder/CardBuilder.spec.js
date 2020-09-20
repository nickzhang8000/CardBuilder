import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import CardBuilder from './CardBuilder';
configure({adapter: new Adapter()});

const props = {
  detailVars: [],
  addressVars: [],
};

describe('<CardBuilder />', () => {
  it('should render div tag', () => {
    const renderedComponent = shallow(<CardBuilder {...props} />);
    expect(renderedComponent.type()).toEqual('div');
  });

});

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import CardPreview from './CardPreview';
configure({adapter: new Adapter()});

const props = {
  file: {},
  info: {},
};  

describe('<CardPreview />', () => {
  it('should render div tag', () => {
    const renderedComponent = shallow(<CardPreview {...props} />);
    expect(renderedComponent.type()).toEqual('div');
  });

});

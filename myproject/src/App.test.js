import renderer from 'react-test-renderer';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('App component', () => {
  it('should render div tag', () => {
      const renderedComponent = shallow(<App />);
      expect(renderedComponent.type()).toEqual('div');
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

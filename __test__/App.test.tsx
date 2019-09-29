import React from 'react';
import renderer from 'react-test-renderer';

// @ts-ignore
import App from '../App.tsx';

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const React = require('react');
const Renderer = require('react-test-renderer/shallow');
const Component = require('../src/TitlePage');

let props = {
  title: 'title',
};

describe('Title Component', () => {
  const renderer = new Renderer();

  it('should render component', () => {
    const component = renderer.render(<Component {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render component with subtitle', () => {
    props = {
      ...props,
      subtitle: 'subtitle',
    };
    const component = renderer.render(<Component {...props} />);
    expect(component).toMatchSnapshot();
  });
});

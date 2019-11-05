
const React = require('react');
const PropTypes = require('prop-types');

const TitlePage = (props) => {
  const { title, subtitle, author } = props;
  return (
    <div className="title-content">
      <h2 className="title-content__main">{title}</h2>
      {subtitle && <span className="title-content__subtitle">{subtitle}</span>}
      {author !== '' && <strong>{author}</strong>}
    </div>
  );
};

const isEmail = (props, propName, componentName) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (!regex.test(props[propName])) {
    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a valid email address.`);
  }
}

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  author: isEmail
};

TitlePage.defaultProps = {
  subtitle: '',
  author: ''
};

export default TitlePage;

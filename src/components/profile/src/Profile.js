
const React = require('react');
const PropTypes = require('prop-types');

const Profile = (props) => {
  const { user } = props;
  return (
    <div className="profile">
      <h2 className="title-content__main">{user.name}</h2>
      <a href={`mailto:${user.email}`}>
        {user.email}
      </a>
    </div>
  );
};


Profile.propTypes = {
  //user: PropTypes.object.isRequired
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};


export default Profile;

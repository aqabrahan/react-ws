
const React = require('react');
const PropTypes = require('prop-types');

const Profile = (props) => {
  const { user } = props;
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={user.avatar} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Biografia user asd ask dkaslñd ñalsdas ñdasñla sñdlas a</p>
        <a href="#" className="btn btn-primary">{user.email}</a>
      </div>
    </div>
  );
};


Profile.propTypes = {
  //user: PropTypes.object.isRequired
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string
  }).isRequired
};


export default Profile;

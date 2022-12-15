import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="stat-list">
        {friends.map(friend => (
          <li key={friend.id} className="item">
            <span className="status"></span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{ friend.name }</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired
}
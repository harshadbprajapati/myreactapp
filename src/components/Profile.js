import React from 'react'

const Profile = () => {
  const avatar = "https://i.imgur.com/MK3eW3Am.jpg";
  const description = 'Katherine Johnson';
  return (
    <div className="profile-card">
      <img
        src={avatar}
        alt={description}
        className="profile-photo"
      />
      <div className="profile-name">{description}</div>
    </div>
  );
}

export default Profile



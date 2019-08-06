import React from 'react';

const UserCard = props => {

    const {avatarURL, name, username, email, bio, followers, following, profileurl } = props

    return (
        <div>
            <img src={avatarURL} atl='User Profile Picture'/>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>Contact: {email}</p>
            <p>GitHub: {profileurl}</p>
            <p>Bio: {bio}</p>
            <p>Followers: {followers} Following: {following}</p>
        </div>
    )
}



export default UserCard;
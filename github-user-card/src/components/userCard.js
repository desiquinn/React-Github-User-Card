import React from 'react';

const UserCard = props => {
    console.log(props.user)
    // const {avatar_url, name, login, email, bio, followers, following, html_url } = props.user

    return (
        <div>
            <img src={props.user.avatar_url} atl='User Profile Picture'/>
            <h2>{props.user.name}</h2>
            <p>{props.user.login}</p>
            <p>Contact: {props.user.email}</p>
            <p>GitHub: {props.user.html_url}</p>
            <p>Bio: {props.user.bio}</p>
            <p>Followers: {props.user.followers} Following: {props.user.following}</p>
        </div>
    )
}



export default UserCard;
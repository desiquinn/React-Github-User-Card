import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

const UserCard = props => {
    // console.log(props.user)
    // const {avatar_url, name, login, email, bio, followers, following, html_url } = props.user

    return (
        <Card centered>
            <Image src={props.user.avatar_url} atl='User Profile Picture' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.user.name}</Card.Header>
            <Card.Meta>
                <span className='userName'>{props.user.login}</span>
                <p>email: {props.user.email}</p>
            </Card.Meta>
            <Card.Description>
                <p>Bio: {props.user.bio}</p>
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
                <a href={props.user.html_url}> 
                    <Icon name='user' />
                    GitHub
                </a>
            </Card.Content>
         </Card>
    )
}



export default UserCard;
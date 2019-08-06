import React from 'react';
import {Grid} from 'semantic-ui-react';

import UserCard from './components/userCard.js';

import './App.css';

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      user: {},
      followers: [], 
      follower: {},
    };

  };

  componentDidMount() {
    this.requestUser();
    // this.requestFollowers(this.state.user.login);
    // this.requestFollower(this.state.followers.login)
    console.log(this.state.user)
    // this.stat.use.login is underfined here because it's undefined when it first mounts.. how do i fixt this?
  };

  componentDidUpdate() {
    // this.requestFollowers(this.state.user.login);
    // this.requestFollower(this.state.followers.login)
    console.log(this.state.user.login)
    // this.state.user.login is not underfined here, however, if i invoke the functions here it causes an infinite loop, and still doesn't generate my users.
  }


  requestUser = () => {
    fetch('https://api.github.com/users/desiquinn')
      .then(response => {
        return response.json()
      })
      .then(user => {
        this.setState({user})
      })
      .catch(error => {
        console.log(error)
      })
  }

  requestFollowers = (user) => {
    fetch(`https://api.github.com/users/${user}/followers`)
      .then(response => {
        return response.json()
      })
      .then(followers => {
        this.setState({followers})
      })
      .catch(error => {
        console.log(error)
      })
  }

  //will need to map over followers to get this.
  requestFollower = (follower) => {
    fetch(`https://api.github.com/users/${follower}`)
      .then(response => {
        return response.json()
      })
      .then(follower => {
        this.setState({follower})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Me and My GitHub Followers</h1>
        <UserCard user={this.state.user} />
        <h2>My Followers</h2>
        <Grid columns={4} centered>
        {this.state.followers.map((follower) => {
         return <UserCard key={follower} user={this.state.follower} />
        })}
        </Grid>
      </div>
    );
  }
}

export default App;

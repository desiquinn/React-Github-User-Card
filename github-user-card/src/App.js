import React from 'react';

import UserCard from './components/userCard.js'

import './App.css';

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      user: null,
      followers: null, 
      folower: null,
    };

  };

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

  requestFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.user.login}/followers`)
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
  requestFollower = () => {
    fetch(`https://api.github.com/users/${this.state.followers.login}`)
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
        <UserCard user={this.state.user} follower={this.state.follower}/>
      </div>
    );
  }
}

export default App;

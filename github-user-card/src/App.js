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
      followerData: [],
    };

  };

  componentDidMount() {
    this.requestUser();
  };

  componentDidUpdate(prevProps, prevState) {

    // console.log("prevState", prevState)
    // console.log("prevProps", prevProps)
    // console.log("this.state.user", this.state.user)
    // console.log("this.props.user", this.props.user)
    // console.log("this.state.followers", this.state.followers)
    // console.log("this.props.followers", this.props.followers)
    // console.log("followerData", this.state.followerData)
    if(this.state.user !== prevState.user) {
      // console.log("state inside 1st condition", this.state.user)
      // console.log("props inside 1st condition", this.props.user)
      this.requestFollowers(this.state.user.login)
    }

    if(this.state.followers !== prevState.followers) {
      // console.log("state inside 2nd condition", this.state.followers)
      // console.log("props inside 2nd condition", this.props.followers)
      this.state.followers.map((follower) => {
        // console.log("I mapped and found", follower.login)
        this.requestFollowerData(follower.login)
        // console.log(this.state.followerData)
      })
    }
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
        this.setState({followers: followers})
      })
      .catch(error => {
        console.log(error)
      })
  }

  //will need to map over followers to get this.
  requestFollowerData = (follower) => {
    fetch(`https://api.github.com/users/${follower}`)
      .then(response => {
        return response.json()
      })
      .then(follower => {
        this.setState({followerData: [...this.state.followerData, follower]})
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
          {this.state.followerData.map((follower) => {
            return <UserCard key={follower.id} user={follower} />
          })}
        </Grid>
      </div>
    );
  }
}

export default App;

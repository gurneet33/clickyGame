import React, { Component } from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import StaticBack from './components/StaticBack';
import Wrapper from './components/Wrapper';
import friends from "./friends.json"
import CardHolder from './components/CardHolder';

class App extends Component {
  state = {
    friends,
    friend: []
  }
  // componentDidMount() {

  // }



  handleShuffle = id => {
    let friendArray = friends
    this.shuffleArray(friendArray)
    friendArray.forEach(function (item) {
      if (item.id === id) {
        item.clicked = true
      }
      console.log(item.clicked)
    })
    this.setState({ friends: friendArray })
    console.log(friendArray);

  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  guessCard = id => {

  }

  render() {
    return (
      <div>
        <Wrapper>
          <Navbar />
          <StaticBack />
          {this.state.friends.map(friend =>
            <CardHolder
              id={friend.id}
              key={friend.id}
              image={friend.image}
              shuffle={this.handleShuffle}
              clicked={friend.clicked}
            />)}


        </Wrapper>
      </div>
    );
  }
}

export default App;

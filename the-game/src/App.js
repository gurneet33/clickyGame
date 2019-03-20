import React, { Component } from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import StaticBack from './components/StaticBack';
import Wrapper from './components/Wrapper';
import friends from "./friends.json"
import CardHolder from './components/CardHolder';
import Parent from './components/parent'
import { Col, Row, Container } from "./components/Grid";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends,
      friend: {},
      count: 0,
      high: 0,
      guess: "",
      clickArray: []
    }
  }

  topScore = () => {

    this.setState((state, props) => {
      if (state.high <= state.count)
        return { high: state.count }
    })



  }


  handleShuffle = id => {
    this.shuffleArray(friends)
    console.log(id)
    console.log(this.state.high)
    let newArr = this.state.clickArray;
    console.log(newArr)
    friends.map(item => {
      let key = item.id
      if (item.id === id) {
        console.log(item)
        newArr.push(item)
        this.setState({ friend: item })
        if (item.clicked === "false") {
          item.clicked = "true"
          this.setState({ guess: "You Answered Correctly!!!", count: this.state.count + 1 })
          this.topScore();
        }
        else {
          this.setState({ guess: "Wrong, You Lose!", count: 0 })
          friends.map(item => {
            item.clicked = "false"
          })
        }
      }


    })

    console.log(this.state.friend)

  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Parent friends={this.state.friends}
            shuffle={this.handleShuffle}
            count={this.state.count}
            guess={this.state.guess}
            high={this.state.high}
          >
            <Navbar />
            <CardHolder />
          </Parent>
        </Wrapper>
      </div>
    );
  }
}

export default App;

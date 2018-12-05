import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      names: [],
      // isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=1')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.results.map((pic) => {
          return (
            <div key={pic.results}>
              <img src={pic.picture.large} />
            </div>
          )
        })
        let names = data.results.map((n) => {
          return (
            <div key={n.results}>
              <h2>{n.name.title}. {n.name.first} {n.name.last} </h2>
            </div>
          )
        })
        this.setState({ pictures: pictures });
        this.setState({ names: names });
        console.log("state", this.state.pictures);
        console.log("state", this.state.names);
      });
  }

  refresh(event) {
    this.setState({ pictures: [] });
    this.setState({ names: [] });
    fetch('https://randomuser.me/api/?results=1')
    .then(results => {
      return results.json();
    })
    .then(data => {
      let pictures = data.results.map((pic) => {
        return (
          <div key={pic.results}>
            <img src={pic.picture.large} />
          </div>
        )
      })
      let names = data.results.map((n) => {
        return (
          <div key={n.results}>
            <h2>{n.name.title}. {n.name.first} {n.name.last} </h2>
          </div>
        )
      })
      this.setState({ pictures: pictures });
      this.setState({ names: names });
      console.log("state", this.state.pictures);
      console.log("state", this.state.names);
    });
    
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <h1>Random Person Generator</h1>
          {this.state.pictures}
          {this.state.names}
          <button type="button" onClick={this.refresh.bind(this)}>New Person!</button>
        </div>
      </div>
    );
  }
}
export default App;
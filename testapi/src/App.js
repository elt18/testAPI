import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

const api = 'https://api.nasa.gov/planetary/apod?api_key=bombRtvBBPKUHFpxl9LQQT9oTGmSV0QCFsRHbQ3w'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      nasa: []
    }
  }

  componentDidMount() {
    axios.get(api)
    .then(nasa => {
      console.log(nasa);
      this.setState({
        nasa:nasa.data


      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.nasa.title}</h1>
        <p>{this.state.nasa.date}</p>
        <img src={this.state.nasa.url} className="gambar" alt="kosong"/>
        <p>{this.state.nasa.explanation}</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'

import Main from './components/Main'
import Nav from './components/Nav'

import './styles/App.css';

class App extends Component {

  // state = {
  //   response: ''
  // };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (
      <div>
        <Nav />
        <Main/>
      </div>
    );
  }
}

export default App;

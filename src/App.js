import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";
var socket, client;
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      endpoint: "localhost:1234"
    };
    var net = require('net');

    var client = new net.Socket();

  // socket = socketIOClient(this.state.endpoint);
  // net = require('net');
  // client = new net.Socket();

  }
  handle_React(){

    console.log("This is image")


// client.connect(52275, '127.0.0.1', function() {
// 	console.log('Connected');
// 	client.write('Hello, server! Love, Client.');
// });

  }
  render(){
    client.connect(1234, 'localhost', function() {
      console.log('Connected');
      // client.write('Client connected');
      client.write('Hello, server! Love, Client.');
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} onClick={this.handle_React} className="App-logo" alt="logo" />
          <p >
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownMenu} from 'react-bootstrap';
var socket;
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      endpoint: "localhost:1234",
      counter: [1,2,3,4,5,6,7,8,9,10,11],
      activecounter:1,
      greeting:'HELLO',
      status:"fail"
    };
    this.SelectCounter=this.SelectCounter.bind(this)
    this.handle_Button=this.handle_Button.bind(this)
    socket = socketIOClient(this.state.endpoint);
  }
  componentWillMount(){
    socket.on('connect', () => {
      socket.on('Server-greeting',function(data){
        // <h3>Server connected!</h3>
        console.log(data);

      })
      socket.emit("Client-counter",this.state.activecounter)
    });
  }
  componentDidMount(){
    socket.on("Update",function(data){
      console.log("Sever said: "+data);
    })

  }
  handle_Button(){
    socket.emit("Client-send-data","Client: "+this.state.activecounter+" Rate");
    // socket.on("Update",function(data){
    //   console.log(data);
    // })
  }
  SelectCounter(evt){
    this.setState({activecounter: evt});
    socket.emit("Client-send-data", "New: "+this.state.activecounter)
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">
        <Dropdown onSelect={this.SelectCounter} >
          <Dropdown.Toggle variant="success" id="dropdown-basic" >
            Choose Counter: {this.state.activecounter}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {this.state.counter.map( (id) =>(
              <Dropdown.Item eventKey={id} >
                {id}
              </Dropdown.Item>
              )
            )}
          </Dropdown.Menu>
        </Dropdown>
        <p></p>
          <img src={logo} onClick={this.handle_Button} className="App-logo" alt="logo" />
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

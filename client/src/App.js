import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import ViewArticle from './pages/ViewArticle';

class App extends Component {
  state = {
    title: "",
    body: ""
  }
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }
  saveArticle = event => {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.body);
  }
  postArticle = event => {
    event.preventDefault();
    const { title, body } = this.state;
    axios.post("/api/article", {title, body}).then(res => {
      console.log(res);
      this.setState({ title: "", body: "" });
    })
  }
  render() {
    return (
     <div>
       <form>
         <input name="title" onChange={this.handleInputChange} value={this.state.title}/>
         <textarea name="body" onChange={this.handleInputChange} value={this.state.body}/>
         <button onClick={this.postArticle}>Submit</button>
       </form>
       <ViewArticle />
     </div>
    );
  }
}

export default App;

import React, { Component } from "react"
import axios from ("axios");

class ViewArticle extends Component {
    state = {
        articles: [{
            id: 1,
            title: "This is a test",
            body: "Or is it??"
        }, {
            id: 2,
            title: "This is a test",
            body: "Or is it??"
        }]
    };

    refreshArticles(){
        console.log("this shouold go!");
        axios.get("/api/article", (res) => {
            console.log(res);
        });
    }

    componentDidMount(){
        this.refreshArticles();
    }

render(){
    return (
        <div>
        {/* Map each of our post*/
            this.state.blogs.map( post => (
            <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
        ))
        }
        </div>
    )
  }
}

export default ViewArticle;
import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name = "Pablo"/>
      <About image = "https://via.placeholder.com/215" />
      <ArticleList title = "Morgee" preview = "Ayembeteza morgee"/>
      alt = "blog logo"
      />
      <p>Welcome to Moringa!</p>
    </div>
    
  );
}

export default App;

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
      <Header name = "Overreacted"/>
      <About image = "https://via.placeholder.com/215" />
      <ArticleList title = "The WET Codebase" preview = "July 13,2020"/>
      alt = "blog logo"
         <ArticleList title = "Goodbye,Clean Code" preview = "January 11,2020"/>
      alt = "blog logo"
      
         <ArticleList title = "My Decade in Review" preview = "January 1,2020"/>
      alt = "blog logo"
      
      
      <p>Welcome to Moringa!</p>
    </div>
    
  );
}

export default App;

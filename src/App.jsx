import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPosts(data);
        return;
      });
    console.log("I am inside useEffect");
  },[])
  console.log("I am outside useEffect");
  
  return (
    <div>
      <p>The value of the counter is {count}</p>
      <button onClick={() => { setCount(count + 1) }}>Increase by 1</button>
      <div className="posts">
        <h2>All Posts</h2>
        <ul>
          {posts?.map((post) => (<li key={post.id}>{post.title}</li>))}
        </ul>
      </div>
    </div>
  );
}
/*
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setPosts(data);
    });
*/
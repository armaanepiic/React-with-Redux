import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  console.log("I am running");
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((res) => res.json())
    .then((data) => setPosts(data));
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

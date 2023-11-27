import { useState } from "react"
import usefetchHooks from "./utils/usefetchHooks"
import PostsData from "./Components/PostsData";
import './App.css'

function App() {
  const postsData = usefetchHooks("https://jsonplaceholder.typicode.com/posts")
  // console.log(postsData);

  // const todosData = usefetchHooks("https://jsonplaceholder.typicode.com/todos")
  // console.log(todosData);
  return (
    
    <>
     <h1 className="heading">Task: 8___Fetch Data Using Custom Hooks</h1>
     <h2 className="heading2">Post Data from JSON_Placeholder</h2>
     <div className="postMap">
      {
        postsData.map((data,index ) => (
          <PostsData key={index} post = {data} />
        ))
      }
     </div>
    </>
  )
}

export default App


// Consolas, 'Courier New', monospace
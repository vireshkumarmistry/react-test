import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Posts from "./pages/post";
import PostDetails from "./pages/postDetails";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
              <h1>POSTS</h1>
              <p>Welcome to the React App</p>
            </div>
          }
        />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

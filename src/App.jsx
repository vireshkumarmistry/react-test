import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";

import "./App.css";

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
        {/* ADD ROUTES HERE */}
      </Routes>
    </Router>
  );
}

export default App;

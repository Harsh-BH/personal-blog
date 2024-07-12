import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shops from "./pages/Shops";
import Profile from "./pages/Profile";
import BlogPage from "./pages/BlogPage"; // Import BlogPage component
import { blogPosts } from "./constants"; // Import blogPosts
import "./styles/globals.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/profile" element={<Profile />} />
      {blogPosts.map((post) => (
        <Route
          key={post.id}
          path={`/blog/${post.id}`}
          element={<BlogPage blog={post} />}
        />
      ))}
    </Routes>
  );
}

export default App;

import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} exact />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/articles-list" element={<ArticlesList/>} />
          <Route path="/article" element={<ArticlePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

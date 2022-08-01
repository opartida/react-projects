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
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article" component={ArticlePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

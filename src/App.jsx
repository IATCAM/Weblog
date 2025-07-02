import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Articles from "./pages/articles/Articles";
import ArticlePage from "./components/articlePage/ArticlePage";
import About from "./pages/about/About";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}


export default App;
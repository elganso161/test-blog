import "./App.css";
import BlogContent from "./components/BlogContent/BlogContent";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <BlogContent /> */}
      <Routes>
        <Route path="/" element={<BlogContent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;

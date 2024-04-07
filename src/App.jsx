import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from './pages';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ThreeJS-portfolio/about" element={<About />} />
          <Route path="/ThreeJS-portfolio/projects" element={<Projects />} />
          <Route path="/ThreeJS-portfolio/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;

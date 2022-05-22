import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./pages/Landing/About";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import Pricing from "./pages/Landing/Pricing";
import Resources from "./pages/Landing/Resources";
import Services from "./pages/Landing/Services";
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route path="/" element={<About />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Services" element={<Services />} />
            <Route />
          </Route>
        </Routes>
      </Router>
      <UnderConstruction />
    </div>
  );
}

export default App;

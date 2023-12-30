import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/home" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/feedback" element={<div>Feedback</div>} />
          <Route path="/*" element={<div>Page Not Found</div>} />
        </Routes>      
    </div>
  );
}

export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/home" element={<div>Home</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



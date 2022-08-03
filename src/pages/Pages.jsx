import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;

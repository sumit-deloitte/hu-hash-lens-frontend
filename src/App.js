import "./App.css";
import Navigation from "./Component/NavBar/NavBar";
import Catalogue from "./Component/Catalogue/Catalogue";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="catalogue" element={<Catalogue/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Invoice from "./Invoice";
import Expenses from "./Expenses";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Test/>}/>
          <Route path="/Invoice" element={<Invoice />} />
          <Route path="/Expenses" element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

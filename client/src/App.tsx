import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewPeople from "./pages/admin";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/addNewPeople" element={<AddNewPeople />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewPeople from "./pages/admin";
import HomePage from "./pages/home";
import MartyerDetails from "./pages/martyerDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/addNewPeople" element={<AddNewPeople />} />
          <Route path="/martyer/:id" element={<MartyerDetails />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

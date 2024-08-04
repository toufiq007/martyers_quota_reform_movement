import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewPeople from "./pages/admin/addNewMartyers";
import HomePage from "./pages/home";
import MartyerDetails from "./pages/martyerDetails";
import UpdateMartyer from "./pages/admin/updateNewMartyer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/martyer/:id" element={<MartyerDetails />} />

          {/* admin page */}
          <Route path="/admin/addNewPeople" element={<AddNewPeople />} />
          <Route path="/admin/updateMartyer/:id" element={<UpdateMartyer />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

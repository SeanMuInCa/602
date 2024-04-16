import { NavBar } from "../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { AlbumList,AlbumCreate, AlbumUpdate, Register, Login } from "../views";

const App = () => {
  return (
      <div>
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/music/list" element={<AlbumList />}></Route>
                <Route path="/music/create" element={<AlbumCreate />}></Route>
                <Route path="/music/update/:id" element={<AlbumUpdate />}></Route>
            </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;

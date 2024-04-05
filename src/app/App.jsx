import { NavBar } from "../components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { AlbumList,AlbumCreate } from "../views";

const App = () => {
  return (
      <div>
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/"></Route>
                <Route path="/music/list" element={<AlbumList />}></Route>
                <Route path="/music/create" element={<AlbumCreate />}></Route>
            </Routes>
          </BrowserRouter>
      </div>
  );
};

export default App;

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Diagramma from "./Pages/Diagramma";
import Statistika from "./Pages/Statistika";
import Qoshish from "./Pages/Qo'shish";
import Users from "./Pages/Users";

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/products" element={<Products/>}/>
        <Route path="/dashboard/diagramma" element={<Diagramma/>}/>
        <Route path="/dashboard/statistika" element={<Statistika/>}/>
        <Route path="/dashboard/qoshish" element={<Qoshish/>}/>
        <Route path="/dashboard/users" element={<Users/>}/>

       </Routes>
    </Router>
  );
}

export default App;

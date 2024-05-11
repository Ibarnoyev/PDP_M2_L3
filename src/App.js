import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Diagramma from "./Pages/Diagramma";
import Statistika from "./Pages/Statistika";
import Qoshish from "./Pages/Qo'shish";
import Users from "./Pages/Users";
import Page404 from "./Pages/404page";
import Login from "./Pages/Loginpage";
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import store from "./Components/redux/store";

const LoginContext = createContext({ isLogin: false, setLogin: () => {} });

function App() {
  const [isLogin, setLogin] = useState(false);
  console.log(isLogin);

  return (
    <Provider store={store}>
      <Router>
        <LoginContext.Provider value={{ isLogin, setLogin }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />}></Route>
            {!isLogin ? (
              <></>
            ) : (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/products" element={<Products />} />
                <Route path="/dashboard/diagramma" element={<Diagramma />} />
                <Route path="/dashboard/statistika" element={<Statistika />} />
                <Route path="/dashboard/qoshish" element={<Qoshish />} />
                <Route path="/dashboard/users" element={<Users />} />
              </>
            )}

            <Route path="*" element={<Page404 />}></Route>
          </Routes>
        </LoginContext.Provider>
      </Router>
    </Provider>
  );
}
export { LoginContext };
export default App;

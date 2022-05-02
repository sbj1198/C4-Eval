import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import {Link, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/" style={{margin: "5px"}}>
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout" style={{margin: "5px"}}>
          Logout
        </Link>
        <Link className="nav-login" to="/login" style={{margin: "5px"}}>
          Login
        </Link>
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/orders" element={<Login/>}/>
        <Route path="/neworder" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

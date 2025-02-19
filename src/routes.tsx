import {Routes, Route} from "react-router-dom"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/About Us";
import Register from "./pages/Register";

function MainRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/About_Us" element={<AboutUs/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
    )
}

export default MainRoutes;
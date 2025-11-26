import { Routes, Route } from "react-router-dom";
import Home from "../Containers/Home";
import Login from "../Containers/Login";
import Products from "../Containers/Products";
import Categories from "../Containers/Categories";
import LowStock from "../Containers/LowStock";

function Router() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Home />}/>
            <Route path="/" element={<Login />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/LowStock" element={<LowStock />} />
        </Routes>
    )
}

export default Router
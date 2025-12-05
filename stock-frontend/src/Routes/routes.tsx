import { Routes, Route } from "react-router-dom";
import Home from "../Containers/Home";
import Login from "../Containers/Login";
import SignUp from "../Containers/signUp";

function Router() {
    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    )
}

export default Router
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Containers/Home";
import Login from "../Containers/Login";
import SignUp from "../Containers/signUp";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in" replace />} />
            <Route path="/dashboard" element={<Home />}/>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    )
}

export default Router
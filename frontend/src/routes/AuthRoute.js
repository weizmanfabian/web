import { Route, Routes } from 'react-router-dom'
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
//si no se loguea el usuario
const AuthRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<ResetPassword />} />
            </Routes>
        </div>
    );
}

export default AuthRoute;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AplicationRoute from "./AplicationRoute";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const isLogged = false

//router principal
const PrincipalRoute = () => {


    return (
        <BrowserRouter>
            <Routes>

                {/* página principal */}
                <Route path="/" element={<Home />} />

                {/* rutas públicas */}
                <Route
                    path="/auth/*"
                    element={
                        <PublicRoute isLogged={isLogged}>
                            <AuthRoute />
                        </PublicRoute>
                    }
                />

                {/* rutas privadas */}
                <Route
                    path="/app/*"
                    element={
                        <PrivateRoute isLogged={isLogged}>
                            <AplicationRoute />
                        </PrivateRoute>
                    }
                />
            </Routes>

        </BrowserRouter>
    );
}

export default PrincipalRoute;
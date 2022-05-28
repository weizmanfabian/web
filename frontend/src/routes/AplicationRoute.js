import { Route, Routes } from "react-router-dom";
import HomeApp from "../pages/HomeApp";

const AplicationRoute = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomeApp />} />
        </Routes>
    );
}

export default AplicationRoute;
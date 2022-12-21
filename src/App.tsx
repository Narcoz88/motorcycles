import React from "react";
import MainLayout from "./layouts/MainLayout";
import {Route, Routes, Navigate} from "react-router-dom";
import Page404 from "./pages/page404";
import MotorcyclesPage from "./pages/motorcyclesPage";
import MotorcyclesPageItem from "./pages/motorcyclesPageItem";
import About from "./pages/about";
import MainPage from "./pages/main";
import Login from "./pages/login";
import Add from "./pages/add";
import RequireAuth from "./hoc/RequireAuth";
import Register from "./pages/register";

const App: React.FC = () => {
    //event.target.value
    //ref.current.value
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<MainPage />}/>
                <Route path="motorcycles" element={<MotorcyclesPage />}/>
                <Route path="motorcycles/:id" element={<MotorcyclesPageItem />}/>
                <Route path="about" element={<About />}/>
                <Route path="about-us" element={<Navigate to="about" replace />}/>
                <Route path="add" element={<RequireAuth>
                    <Add />
                </RequireAuth>}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="*" element={<Page404/>} />
            </Route>
        </Routes>
    );
};

export default App;

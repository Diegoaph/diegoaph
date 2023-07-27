import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import RouterLayout from "./components/RouterLayout";

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<RouterLayout />}>
                <Route
                    path="/"
                    element={<Landing />}
                />
                <Route
                    path="/projects"
                    element={<Projects />}
                />
            </Route>
            <Route
                path="/q"
                element={<div>Q</div>}
            />
        </Routes>
    );
};

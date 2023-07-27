import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

const RouterLayout: React.FC<{}> = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default RouterLayout;

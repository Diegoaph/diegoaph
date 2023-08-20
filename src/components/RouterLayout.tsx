import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

interface RouterLayoutProps {
    lang: boolean;
    setLang: React.Dispatch<React.SetStateAction<boolean>>;
}

const RouterLayout: React.FC<RouterLayoutProps> = ({ lang, setLang }) => {
    return (
        <>
            <NavBar
                lang={lang}
                setLang={setLang}
            />
            <Outlet />
        </>
    );
};

export default RouterLayout;

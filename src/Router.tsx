import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import RouterLayout from "./components/RouterLayout";

interface LangProp {
    lang: boolean;
}

const AppRouter: React.FC = () => {
    const [lang, setLang] = useState<boolean>(true);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RouterLayout
                        lang={lang}
                        setLang={setLang}
                    />
                }>
                <Route
                    path="/"
                    element={<Landing lang={lang} />}
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

export default AppRouter;

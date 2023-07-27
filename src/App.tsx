import "./App.css";
import { Container, Button } from "@mui/material";
import { NavBar } from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;

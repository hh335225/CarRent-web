import React from "react";
import './App.scss';
import Header from "./components/organisms/header/header.tsx";
import Footer from "./components/organisms/footer/footer.tsx";
import Home from "./pages/home/home.tsx";

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App;
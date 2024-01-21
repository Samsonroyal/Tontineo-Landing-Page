
import React from "react";
import "./styles/main.css";
import "./styles/style.css";

import Navbar from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Hero from "./components/HeroSection/index.jsx";
import DownloadApp from "./components/DownloadApp/index.jsx";
import Newsletter from "./components/Newsletter/index.jsx";
import Benefits from "./components/Benefits/index.jsx";
import Brands from "./components/Brands/index.jsx";
import ValueProposition from "./components/ValueProposition/index.jsx";


function App({ }) {
    return (
        <div className={`main-container1`}>
            <Navbar />
            <Hero />
            <Brands />
            <Benefits />
            <ValueProposition />            
            <DownloadApp />
            <Newsletter />            
            <Footer />
        </div>
    );
}

export default App;

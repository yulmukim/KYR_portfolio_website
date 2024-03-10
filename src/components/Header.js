import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const NavigateToHome = () => {
        navigate("/");
    }

    const NavigateToSkills = () => {
        navigate("/skills");
    }

    const NavigateToPortfolio = () => {
        navigate("/portfolio");
    }

    return(
        <header className="header">
            <button className="home" onClick={NavigateToHome}>Home</button>
            <button className="skills" onClick={NavigateToSkills}>Skills</button>
            <button className="portfolio" onClick={NavigateToPortfolio}>Portfolio</button>
        </header>
    );
}
export default Header;
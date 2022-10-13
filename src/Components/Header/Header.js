import "./Header.css";
import {Link} from "react-router-dom";

const Header = () =>{
    const navToggle =() =>{
        const primaryNav = document.querySelector(".primary-navigation");
        const navToggle = document.querySelector(".mobile-nav-toggle");
    
        const visibility = primaryNav.getAttribute("data-visible");

        if (visibility === "false"){
            primaryNav.setAttribute("data-visible", true)
            navToggle.setAttribute("aria-expanded", true)
        } else if (visibility === "true"){
            primaryNav.setAttribute("data-visible", false)
            navToggle.setAttribute("aria-expanded", false)
        }
    }
    
    return(
       
        <div className="font-sizing">
            <header>
                <a target="_blank" href="https://github.com/krihs0">
                <img src="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png" className="logo" alt="github logo"/>
                </a>
                <button onClick={navToggle} className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                    <span className="sr-only">Menu</span>
                </button>

                <nav className="primary-nav">
                    <ul data-visible="false" id="primary-navigation" className="primary-navigation">
                        <li>
                            <Link to="/">
                                <span aria-hidden="true">00</span>Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <span aria-hidden="true">01</span>About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <span aria-hidden="true">02</span>Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <span aria-hidden="true">03</span>Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
    return(
        <div className="navbar-container">
            <div className="brand"><NavLink className="navlink" to="/">XYZ Corp.</NavLink></div>
            <nav>
                <ul>
                    <li><NavLink className="navlink" to="/parking-allocation-system">Parking Slot</NavLink></li>
                    <li><NavLink className="navlink" to="/manage">Manage</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
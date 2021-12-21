import React from 'react';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className="container">
            <header>
                <nav>
                    <NavLink className="li" to="/planets">Planets</NavLink>
                    <NavLink className="li" to="/starships">Starships</NavLink>
                    <NavLink className="li" to="/transport">Transport</NavLink>
                    <NavLink className="li" to="/wars">Wars</NavLink>
                    <NavLink className="li" to="/films">Films</NavLink>
                </nav>
            </header>
        </div>
    );
};
export default Header;
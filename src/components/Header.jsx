import React from "react";
import {NavLink} from "react-router-dom";
import Burger from "./Burger.jsx";

function Header() {
    return (
        <header>
            <nav>
                <Burger />
                <ul className="wideNav">
                    <NavLink to="/fabianlarries" className="menu1" activeClassName="sel" exact><li>HOME</li></NavLink>
                    <NavLink to="/about" className="menu1" activeClassName="sel"><li>ABOUT</li></NavLink>
                    <NavLink to="/nextevents" className="menu1" activeClassName="sel"><li>NEXT EVENTS</li></NavLink>
                    <NavLink to="/songs" className="menu1" activeClassName="sel"><li>SONGS</li></NavLink>
                    <NavLink to="/news" className="menu1" activeClassName="sel"><li>NEWSLETTER</li></NavLink>
                    <NavLink to="/contacts" className="menu1" activeClassName="sel"><li>CONTACTS</li></NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
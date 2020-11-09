import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function Burger() {
    const [showMenu, setShowMenu] = useState(false);
    function close() {
        setShowMenu(!showMenu);
    };

    let menuItems =
        <div>
            <ul className="hiddenNav openMenu" id="hiddenNav">
                <NavLink to="/fabianlarries" className=" menu1 menu2" activeClassName="sel" onClick={close} exact><li>HOME</li></NavLink>
                <NavLink to="/about" className="menu1 menu2" activeClassName="sel" onClick={close}><li>ABOUT</li></NavLink>
                <NavLink to="/nextevents" className="menu1 menu2" activeClassName="sel" onClose={close}><li>NEXT EVENTS</li></NavLink>
                <NavLink to="/songs" className="menu1 menu2" activeClassName="sel" onClick={close}><li>SONGS</li></NavLink>
                <NavLink to="/news" className="menu1 menu2" activeClassName="sel" onClick={close}><li>NEWSLETTER</li></NavLink>
                <NavLink to="/contacts" className="menu1 menu2" activeClassName="sel" onClick={close}><li>CONTACTS</li></NavLink>
            </ul>
        </div>
    
    let hiddenMenu;

    if (showMenu) {
        hiddenMenu = menuItems;
    } else {
        hiddenMenu = null;
    }

    let burgerDyn = showMenu
        ? ("openBurger")
        : {};

    return (
        <div>
            <div id="burgerIcon" onClick={() => setShowMenu (!showMenu)} className={burgerDyn}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="hidden_menu">
                {hiddenMenu}
            </div>
        </div>
    );
};

export default Burger;
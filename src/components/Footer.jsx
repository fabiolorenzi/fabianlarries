import React from "react";
import {Link} from "react-router-dom";

import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import spotify from "../img/spotify.png";
import youtube from "../img/youtube.png";
import soundcloud from "../img/soundcloud.png";

function Footer() {
    return (
        <footer>
            <p>&copy; Fabian Larries 2020 - All rights reserved | <Link to="#">Privacy</Link> | <Link to="#">Cookies</Link></p>
            <a href="https://www.facebook.com/fabianlarries/" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="facebook logo" />
            </a>
            <a href="https://www.instagram.com/fabianlarries/" target="_blank" rel="noreferrer">
                <img src={instagram} alt="instagram logo" />
            </a>
            <a href="https://open.spotify.com/artist/6V6U9qzG3pf2KTkjxQmVR4" target="_blank" rel="noreferrer">
                <img src={spotify} alt="spotify logo" />
            </a>
            <a href="https://www.youtube.com/channel/UCZG9_lj5dCszOWgXMGg4FKQ" target="_blank" rel="noreferrer">
                <img src={youtube} alt="youtube logo" />
            </a>
            <a href="https://soundcloud.com/user-454507343" target="_blank" rel="noreferrer">
                <img src={soundcloud} alt="soundcloud logo" />
            </a>
        </footer>
    );
};

export default Footer;
import React from "react";

function Contacts() {
    return (
        <div className="contacts">
            <main className="contactMain container">
                <div>
                    <h1>Contacts</h1>
                    <div>
                        <a href="https://www.facebook.com/fabianlarries/" target="_blank" rel="noreferrer"><h2 id="fbB">Facebook</h2></a>
                        <a href="https://www.instagram.com/fabianlarries/" target="_blank" rel="noreferrer"><h2 id="instaB">Instagram</h2></a>
                        <a href="https://open.spotify.com/artist/6V6U9qzG3pf2KTkjxQmVR4" target="_blank" rel="noreferrer"><h2 id="spoB">Spotify</h2></a>
                        <a href="https://www.youtube.com/channel/UCZG9_lj5dCszOWgXMGg4FKQ" target="_blank" rel="noreferrer"><h2 id="youB">Youtube</h2></a>
                        <a href="https://www.beatport.com/artist/fabian-larries/684886" target="_blank" rel="noreferrer"><h2 id="beatB">Beatport</h2></a>
                        <a href="https://soundcloud.com/user-454507343" target="_blank" rel="noreferrer"><h2 id="soundB">Soundcloud</h2></a>
                        <a href="mailto:fabianlarries@gmail.com" target="_blank" rel="noreferrer"><h2 id="mailB">Email</h2></a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contacts;
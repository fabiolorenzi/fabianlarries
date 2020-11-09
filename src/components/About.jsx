import React from "react";
import logo1 from "../img/logo.jpg";

function About() {
    return (
        <div className="about">
            <main className="aboutMain container">
                <div>
                    <aside>
                        <img src={logo1} alt="fabian larries logo" />
                    </aside>
                </div>
                <div>
                    <section>
                        <h1>About</h1> 
                        <p>
                            Fabian Larries was born on the 31st May 1997 in Asola, near Mantua. He started his career in 2016, 
                            when he bought the necessary to begin his homestudio, where he has produced his EDM singles and EPs released by 
                            labels from all over Europe as OTB, Mf Records and Traum Techno Germany.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default About;
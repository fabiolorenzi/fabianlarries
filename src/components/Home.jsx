import React from "react";

import banner1 from "../img/banner1.jpg";
import banner2 from "../img/banner2.jpg";
import banner3 from "../img/banner3.jpg";

function Home() {
    return (
        <div className="home">
            <main className="main_banners container">
                <img src={banner1} alt="banner 1" />
                <img src={banner2} alt="banner 2" />
                <img src={banner3} alt="banner 3" />
            </main>
        </div>
    );
};

export default Home;
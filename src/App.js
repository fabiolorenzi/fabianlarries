import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import NextEvents from "./components/NextEvents.jsx";
import Songs from "./components/Songs.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Contacts from "./components/Contacts.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/fabianlarries" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/nextevents" component={NextEvents} />
                <Route path="/songs" component={Songs} />
                <Route path="/news" component={Newsletter} />
                <Route path="/contacts" component={Contacts} />
                <Route component={ErrorPage} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
import React from "react";
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <div className="error">
            <h1>Oops, seems that the page you are looking for doesn't exist!</h1>
            <Link to="/fabianlarries" id="linkEr"><h2>Return to the Homepage</h2></Link>
            <br />
        </div>
    );
};

export default ErrorPage;
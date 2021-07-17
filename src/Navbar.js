import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="blue-grey darken-2">
                    <div class="nav-wrapper">
                    <a href="/" class="brand-logo">My Closet</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Contact</a></li>
                        <li><a href="badges.html">Email</a></li>
                        <li><a href="collapsible.html">Help</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    } 
}

export default Navbar
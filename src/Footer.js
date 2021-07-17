import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <footer class="blue-grey">
                    <div class="container">
                        <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">My Closet</h5>
                            <p class="grey-text text-lighten-4">An app for people with small spaces who need to see everything they own in one spot.</p>
                        </div>
                        <div class="col l4 offset-l2 s12">
                            <h5 class="white-text">Links</h5>
                            <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                        © 2021 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="/">More Links</a>
                        </div>
                    </div>
                </footer>
            </div>
        )
    } 
}

export default Navbar
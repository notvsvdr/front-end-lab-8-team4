import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <nav className="header__nav">
                    <Link to="/JobListPage" >
                        JobListPage
                    </Link>
                    <Link to="/Registration">
                        Registration
                    </Link>
                    <Link to="/UserPage">
                        UserPage
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;

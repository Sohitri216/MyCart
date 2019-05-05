import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header-main"><div>My Cart</div>
                <span className="routing-link">
                    <Link to="/list">Home</Link>|
                <Link to="/about-us">About Us</Link>
                </span>
            </header>
        )
    }
}

export default Header;  
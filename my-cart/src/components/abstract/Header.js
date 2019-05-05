import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header-main"><div>My Cart</div>
            <span className="routing-link"> 
                <Link to="/">Home</Link>|
                <Link to="/details">Details</Link>
            </span>
            </header>
        )
    }
}

export default Header;  
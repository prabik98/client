import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="header">
            <div className='logo'>Bikash Pradhan</div>
            <div className='menu'>
                <div className='web-menu'>Web</div>
                <div className='mobile-menu'>Mobile</div>
            </div>
        </div>
    );
}

export default Header;

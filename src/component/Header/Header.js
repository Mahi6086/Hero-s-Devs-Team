import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <h1>HERO'S DEV'S TEAM</h1>
           <small>A design agency for the digital age.</small>
           <h2>Total Budget: <span style={{fontWeight:'900', color:'orange'}}>$10 Million</span></h2> 
        </div>
    );
};

export default Header;
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <h1>Project Team Management</h1>
           <h2>Total Budget: <span style={{fontWeight:'900', color:'orange'}}>100 Million</span></h2> 
        </div>
    );
};

export default Header;
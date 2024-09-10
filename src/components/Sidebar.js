import React from 'react';

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>Categories</h2>
            <ul>
                <li><a href="#">Engine Parts</a></li>
                <li><a href="#">Suspension</a></li>
                <li><a href="#">Brakes</a></li>
                <li><a href="#">Exhaust</a></li>
                <li><a href="#">Lighting</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;

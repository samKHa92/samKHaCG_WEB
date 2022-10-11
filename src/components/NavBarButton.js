import React from 'react';
import '../styles/NavBarButton.css';
import { Link } from 'react-router-dom';

export function NavBarButton() {
    return (
        <Link to='sign-up'>
            <button className='btn_nav'>Sign Up</button>
        </Link>
    );
}
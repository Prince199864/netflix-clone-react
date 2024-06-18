import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='nav nav_black'>
            <div className="nav_contents">
                <img onClick={() => { navigate("/") }} className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />

                <img onClick={() => { navigate("/profile") }} className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import './ProfileScreen.css'
import logoImg from '../images/logo.png'
import avatar from '../images/avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
const ProfileScreen = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    return (
        <div className='profileScreen'>
            <div className='nav_profile'>
                <div onClick={() => { navigate("/") }} className="nav_profile_contents">
                    <img className='nav_profile_logo' src={logoImg} alt="logo" />
                </div>
            </div>
            <div className="profile_main">
                <div className="profile_main_body">
                    <h1>Edit Profile</h1>
                    <div className="profile_body">
                        <div className="profile_avatar"><img src={avatar} alt="avatar" /></div>
                        <div className="profile_plan_details">
                            <h2>{user.email}</h2>
                            <div className="profile_plans">
                                <h3>Plans</h3>
                                <div className="plans">
                                    <div className='plan_detail'>
                                        <span className='plan_name'>Netflix Standard</span>
                                        <span className='plan_resolution'>1080p</span>
                                    </div>
                                    <button className='plan_button'>Subscribe</button>
                                </div>
                                <div className="plans">
                                    <div className='plan_detail'>
                                        <span className='plan_name'>Netflix Basic</span>
                                        <span className='plan_resolution'>480p</span>
                                    </div>
                                    <button className='plan_button'>Subscribe</button>
                                </div>
                                <div className="plans">
                                    <div className='plan_detail'>
                                        <span className='plan_name'>Netflix Premium</span>
                                        <span className='plan_resolution'>4K+HDR</span>
                                    </div>
                                    <button className='plan_button'>Subscribe</button>
                                </div>
                                <button onClick={() => {
                                    auth.signOut();
                                }} className='profile_signout'>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen

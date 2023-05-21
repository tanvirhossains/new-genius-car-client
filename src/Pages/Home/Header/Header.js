import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../../../Context/AuthProvider';
import { AiOutlineShopping } from 'react-icons/ai';
import person from '../../../assets/images/userIcon.png'

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
const navigate = useNavigate()
    console.log(user);
    const handleLogOut = () => {
        logOut()
        navigate('/')
        
    }
    const navMenu = < >
        <nav className='link'>

            <NavLink to='/home' className='no-underline'>Home</NavLink>
            {
                user ? <>
                    {/* <button class="btn btn-sm" onClick={handleLogOut}>LogOut</button> */}
                    <NavLink to='/allorders'>All Orders</NavLink>
                </>

                    :
                    <NavLink to='/login' className='no-underline'>Login</NavLink>
            }

            <NavLink to='serviceNew'>Service New</NavLink>
        </nav>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}

                        {navMenu}

                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* 
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li> */}
                    {navMenu}
                    <span className='text-red-600'> {user?.email}
                    </span>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={`orders/${user?.email}`}>

                    {
                        user && <span className='text-3xl '>

                            <AiOutlineShopping />
                        </span>
                    }
                </Link>
                {/* <a className="btn">Get started</a> */}
                {
                    user &&
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={`${user?.photoURL === null ? person : user?.photoURL}`} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-2 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogOut}>Logout</a></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Shared/Header.css";
import { AuthContext } from '../Context/UserContext';

const Test = () => {

    // ---> UseContext
    const { user, LogOut } = useContext(AuthContext);

    // --> Log out function ********************************
    const handleLogOut = () => {
        LogOut().then(() => {
        }).catch((error) => {
        });
    }

    // --> Dropdown menu function ********************************
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const dropdownClick = () => {
        setIsHovered(!isHovered);
        console.log(isHovered);
    }



    // Header shrinking **************************************************************
    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isTop = scrollTop === 0;

            setShrunk(!isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div className='sticky relative top-0 z-30 '>

            <header className={`h-32 w-full flex items-center  justify-between px-4 lg:px-16 ${isShrunk ? 'h-16' : 'h-32'}`} style={{ backgroundColor: "#18332F" }}>

                <div className='text-white brand-name'>
                    <h1 className='website-name' >Serene</h1>
                </div>

                {/* For Large screen  */}
                <div className='hidden lg:block' style={{ paddingTop: "6px" }}>
                    <ul className="flex p-4 mt-4  md:space-x-8 md:mt-0">

                        <li>
                            <Link to="/" className="header-links block py-2 pl-3 pr-4 text-gray-300  rounded md:p-0" >Home</Link>
                        </li>

                        <li>
                            <div className="relative inline-block text-left group">
                                <button className="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto" type="button"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    Dropdown hover{' '}
                                    <svg
                                        className={`w-2.5 h-2.5 ml-2.5 transition-transform ${isHovered ? '-translate-y-0.5 rotate-180' : 'translate-y-0 rotate-0'
                                            }`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6">
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4" />
                                    </svg>
                                    <div
                                        className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block"
                                        onMouseEnter={() => this.setState({ isHovered: true })}
                                        onMouseLeave={() => this.setState({ isHovered: false })}
                                    >
                                        {/* Dropdown content */}
                                    </div>
                                </button>

                                <div style={{ zIndex: 100 }} className="absolute  hidden  divide-y divide-gray-100 rounded-lg shadow w-36 bg-gray-700 group-hover:block">
                                    <ul className="py-2 text-sm text-gray-200 dark:text-gray-200" role="menu">
                                        <li role="menuitem">
                                            <Link to="/courses"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Courses
                                            </Link>
                                        </li>
                                        <li role="menuitem">
                                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Settings
                                            </a>
                                        </li>
                                        <li role="menuitem">
                                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Earnings
                                            </a>
                                        </li>
                                        <li role="menuitem">
                                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </li>
                        <li>
                            <Link to="/shoppingPage" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Menu</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Blog</Link>
                        </li>

                    </ul>
                </div>


                {/* Studen info */}
                <div className="flex flex-shrink-0 items-center space-x-4 text-white user-header-info">
                    {
                        user && user.email &&
                        <div className="flex flex-col items-end ">
                            <div className="text-md font-medium ">{user.displayName}</div>
                            <div className="text-sm font-regular">User</div>
                        </div>
                    }

                    <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"><img className=' rounded-full'
                        src="https://w7.pngwing.com/pngs/409/621/png-transparent-computer-icons-avatar-male-user-profile-others-logo-monochrome-silhouette.png" alt="" /></div>
                    {
                        user && user.email ?
                            <Link onClick={handleLogOut} >
                                <button className="bg-transparent hover:bg-white  text-white hover:text-gray-800  py-2 px-4 border border-white-500 hover:border-transparent rounded">
                                    Sign out
                                </button>
                            </Link>
                            :
                            <Link to="/login">
                                <button className="bg-transparent hover:bg-white  text-white hover:text-gray-800  py-2 px-4 border border-white-500 hover:border-transparent rounded">
                                    Sign in
                                </button>
                            </Link>
                    }

                    {/* Register button */}
                    {/* <Link to="/register">
            <button className="bg-white hover:bg-transparent  py-2 px-4 border text-gray-800 hover:text-white rounded shadow">
              Sign up
            </button>
          </Link> */}

                </div>
            </header>

            {/* Responsive Header */}
            <div className='block lg:hidden '>
                <ul className="flex pb-2 justify-center" style={{ backgroundColor: "#18332F" }}>
                    <li>
                        <Link to="/" className="header-links block py-2 pl-3 pr-4 text-gray-300  rounded md:p-0" >Home</Link>
                    </li>
                    <li>
                        <button className="text-gray-300 header-links pl-3 pr-4 py-2  md:p-0  flex items-center justify-between w-full md:w-auto" type="button"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={dropdownClick}
                        >
                            Services{' '}
                            <svg
                                className={`w-2.5 h-2.5 ml-2.5 transition-transform ${isHovered ? '-translate-y-0.5 rotate-180' : 'translate-y-0 rotate-0'
                                    }`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                            <div
                                className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block"
                                onMouseEnter={() => this.setState({ isHovered: true })}
                                onMouseLeave={() => this.setState({ isHovered: false })}
                            >
                                {/* Dropdown content */}
                            </div>
                        </button>

                        <div style={{ zIndex: 100 }} className={` ${isHovered ? '' : 'hidden'} absolute  divide-y divide-gray-100 rounded-lg shadow w-36 bg-gray-700 group-hover:block`}>
                            <ul className="py-2 text-sm text-gray-200 dark:text-gray-200" role="menu">
                                <li role="menuitem">
                                    <Link to="/courses"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Courses
                                    </Link>
                                </li>
                                <li role="menuitem">
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Settings
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Earnings
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li>
                        <Link to="" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Menu</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="header-links block py-2 pl-3 pr-4 text-gray-300 rounded  md:p-0 ">Blog</Link>
                    </li>
                </ul>
            </div>
            {/* Header Ends */}
        </div>
    );
};

export default Test;
import { NavbarProps } from '@/interfaces';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar: React.FC<NavbarProps> = ({ className }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <header className="bg-navbarBg relative w-full z-50 px-10 md:px-24 sticky top-0 h-[72px] shadow-lg">
            <div className="mx-auto flex items-center justify-between py-4">
                <h1 className={`text-white text-xl font-bold cursor-pointer ${className}`}>
                    <Link href='/models'>AI Marketplace</Link>
                </h1>
                {
                    isMenuOpen && (
                        <div className="absolute top-[72px] left-0 w-full bg-navbarBg z-50">
                            <nav className="flex flex-col items-center gap-y-5 py-5">
                                <li className={`flex text-white text-sm font-medium cursor-pointer list-none`}>
                                    <Link href='/models' className={router.asPath == '/models' ? 'text-blueLight' : 'text-white'}>Home</Link>
                                </li>
                                <li className={`text-white text-sm font-medium cursor-pointer list-none ${className}`}>Explore AI Tools</li>
                                <button
                                    onClick={
                                        () => {
                                            router.push('/addmodel');
                                        }
                                    }
                                    className={`flex text-white bg-blueLight font-medium px-5 py-2.5 rounded-lg w-auto ${className}`}>
                                    Add model
                                </button>
                            </nav>
                        </div>
                    )
                }
                <nav className="hidden md:flex items-center gap-x-11">
                    <li className={`flex text-white text-sm font-medium cursor-pointer list-none`}>
                        <Link href='/models' className={router.asPath == '/models' ? 'text-blueLight' : 'text-white'}>Home</Link>
                    </li>
                    <li className={`text-white text-sm font-medium cursor-pointer list-none`}>
                        <Link href='/mockdata' className={router.asPath == '/mockdata' ? 'text-blueLight' : 'text-white'}>Mock Data</Link>
                    </li>
                </nav>
                <button
                    className="md:hidden text-white cursor-pointer focus:outline-none"
                    onClick={
                        () => {
                            setIsMenuOpen(!isMenuOpen);
                        }
                    }
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
                <button
                    onClick={
                        () => {
                            router.push('/addmodel');
                        }
                    }
                    className={`hidden md:flex gap-x-2 text-white bg-blueLight font-medium px-5 py-2.5 rounded-lg w-auto ${className}`}>
                    Add model
                </button>
            </div>
        </header>
    );
};

export default Navbar;
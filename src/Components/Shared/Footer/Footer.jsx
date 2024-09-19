import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLocationOutline, IoLogoLinkedin } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdMarkEmailRead } from 'react-icons/md';

const Footer = () => {
    return (
        <div >
            <footer className="footer bg-[#021736] text-gray-100 p-12 mt-10">
                <nav className='lg:ml-10 gap-6'>

                    <h6 className="footer-title text-xl">Company</h6>
                    <a className="link link-hover text-xl">About us</a>
                    <a className="link link-hover text-xl">Blogs</a>
                    <a className="link link-hover text-xl">Returns</a>
                    <a className="link link-hover text-xl">Oder Status</a>
                </nav>
                <nav className='gap-6'>
                    <h6 className="footer-title text-xl">Info</h6>
                    <a className="link link-hover text-xl">How it works?</a>
                    <a className="link link-hover text-xl">Our promises</a>
                    <a className="link link-hover text-xl">FAQ</a>
                    <a className="link link-hover text-xl">Advertisement</a>

                </nav>
                <nav className='gap-6'>
                    <h6 className="footer-title text-xl">Contact Us</h6>
                    <a className="link link-hover flex items-center gap-2">
                        <IoLocationOutline className='w-8 h-8' /><span className='text-xl'>123 Main Street, Anytown,USA</span>
                    </a>
                    <a className="link mt-1 link-hover flex items-center gap-2">
                        <LuPhoneCall className='w-6 h-6' /><span className='text-xl'>+1 (555) 123-4567</span>
                    </a>
                    <a className="link mt-1 link-hover flex items-center gap-2">
                        <MdMarkEmailRead className='w-6 h-6' /><span className='text-xl'>fashionHouseSupport@gmail.com</span>
                    </a>


                </nav>

                <form className='text-white'>
                    <h6 className="footer-title text-xl">Newsletter</h6>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-6 w-6 text-black  opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="E-mail Address" />
                    </label>
                    <div className='mt-4 flex items-center gap-4'>
                        <FaFacebookSquare className='h-8 w-8' />
                        <FaTwitter className='h-8 w-8' />
                        <FaInstagram className='h-8 w-8' />
                        <IoLogoLinkedin className='h-8 w-8' />
                    </div>
                </form>

            </footer>
            <footer className="footer text-gray-100 bg-[#021736]  border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col text-xl text-gray-400 items-center">

                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Fashion House Industries Ltd</p>

                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid text-gray-300 text-xl grid-flow-col gap-8">
                        <p>cookie settings</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions </p>
                        <p>Imprint</p>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
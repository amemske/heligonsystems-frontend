'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";
import { useState } from 'react';

interface HeaderProps {

}


export default  function Header(props : HeaderProps) {

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive); 
      };
   
    const pathname = usePathname();

    return (
        <>
        
        <header className= {`tg-header__style-five ${isActive ? 'mobile-menu-visible' : ''}`}>
            




        <div className="tg-header__top">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="tg-header__top-info left-side list-wrap">
                            <li><i className="fa-solid fa-mobile-screen-button"></i>+254 727 781 090</li>

                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul className="tg-header__top-right list-wrap">
                            <li><i className="fa-solid fa-envelope"></i><a href="mailto:info@heligonsystems.com">info@heligonsystems.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        

     
        
      
        
        <div id="sticky-header" className="tg-header__area tg-header__area-five">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                    <div className="tgmenu__wrap">
                    <div className="tgmenu__nav">
                    <ul className="logo"><a href='/'><img src="assets/img/logo/logo.png" alt="Logo"/></a></ul>
        <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
      
                                    <ul className="navigation">
                                        <li className={pathname  == "/" ? "active" : ""}><Link href="/">Home</Link></li>
                                       <li className="menu-item-has-children">
                                            <a href="#">Web Development &nbsp; <i className="fa-solid fa-angle-down"></i></a>
                                            <ul className="sub-menu">
                                                <li><a href='/web-design'>Web Design Services</a></li>
                                                <li ><a href='/web-development'>Web App Development</a></li>
                                            </ul>
                                        </li>
                                        <li className={pathname  == "/portfolio" ? "active" : ""}><Link href="/portfolio">Portfolio</Link></li>
                                        <li className={pathname  == "/pricing" ? "active" : ""}><Link href="/pricing">Pricing</Link></li>
                                        
                                        <li className={pathname  == "/mobile-development" ? "active" : ""}><Link href="/mobile-development">Mobile Development </Link>

                                        </li>

                                       
                                        
                                        

                                    </ul>
                                </div>
   
                               
                                <div className="tgmenu__action tgmenu__action-five d-none d-md-block">
                                    <ul className="list-wrap">
                                        <li className="header-btn"><span className='btn'>Tel: 0727 781 090</span></li>
                                    </ul>
                                </div>
                                <button  className="mobile-nav-toggler mobile-nav-toggler-two" onClick={handleClick}>
                                     
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
                                    <path d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z" fill="currentcolor" />
                                    <path d="M0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9Z" fill="currentcolor" />
                                    <path d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z" fill="currentcolor" />
                                    <path d="M7 2C7 0.895431 7.89543 0 9 0C10.1046 0 11 0.895431 11 2C11 3.10457 10.1046 4 9 4C7.89543 4 7 3.10457 7 2Z" fill="currentcolor" />
                                    <path d="M7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9Z" fill="currentcolor" />
                                    <path d="M7 16C7 14.8954 7.89543 14 9 14C10.1046 14 11 14.8954 11 16C11 17.1046 10.1046 18 9 18C7.89543 18 7 17.1046 7 16Z" fill="currentcolor" />
                                    <path d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z" fill="currentcolor" />
                                    <path d="M14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9Z" fill="currentcolor" />
                                    <path d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z" fill="currentcolor" />
                                </svg>
                                </button>
                    </div>
 
                    
                    </div>

                    <div className="tgmobile__menu">
                            <nav className="tgmobile__menu-box">
                                <div className="close-btn" onClick={handleClick}>
                                    <i className="fas fa-times"></i>
                                </div>
                                <div className="nav-logo">
                                    <a href='/'><img src="assets/img/logo/logo.png" alt="Logo"/></a>
                                </div>
                               
                                <div className="tgmobile__menu-outer">
                                <ul className="navigation">
                                    <li className="active"><a href="/">Home</a></li>
                                        
                                    <li className=""><a href="/web-design">Web Design </a></li>
                                    <li className=""><a href="/web-development">Web App Development</a></li>
                                        
                                    
                    
                                    <li className=""><a href="/mobile-development">Mobile Development </a>
                                        
                                    </li>
                                    
                                    <li className=""><a href="/our-approach">Our Approach</a>
                                        
                                    </li>
                                    <li className=""><a href="/about">About Us</a>
                                        
                                    </li>
                                   
                                </ul>
                                     </div>
                                <div className="tgmobile__menu-bottom">
                                    <div className="contact-info">
                                        <ul className="list-wrap">
                                            <li><a href="mailto:info@apexa.com">info@heligonsystems.com</a></li>
                                            <li><a href="tel:0123456789">+254 727 781090</a></li>
                                        </ul>
                                    </div>
                                    <div className="social-links">
                                        <ul className="list-wrap">
                                            <li><a href="javascript:void(0)"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="javascript:void(0)"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        
                        <div className="tgmobile__menu-backdrop" onClick={handleClick}></div>
                     
                    </div>
                </div>
            </div>
        </div>
    </header>
   
        </>
    );
}



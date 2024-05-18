import React from 'react';

interface FooterProps {

}


export default  async function Header(props : FooterProps) {
   
   

    return (
        <>
        
        <footer>
        <div className="footer__area-four">
            <div className="container">
                <div className="footer__top-three footer__top-four">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <div className="footer-widget">
                                <div className="fw-logo mb-25">
                                    <a href='/'><img src="/assets/img/logo/w_logo.png" alt=""/></a>
                                </div>
                                <div className="footer-info-list mb-25">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <i className="fa-solid fa-mobile-screen-button"></i>
                                            </div>
                                            <div className="content">
                                                <a href="tel:0123456789">+254 727 781090</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <a href="mailto:info@apexa.com">info@heligonsystems.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa-solid fa-location-pin"></i>
                                            </div>
                                            <div className="content text-grey">
                                                Chieko Plaza, <br/> 1st floor, RM B1-11,<br/> Kikuyu Town.
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">Solutions</h4>
                                <div className="footer-link-list">
                                    <ul className="list-wrap">
                                        <li><a href='/web-development'>Web App Development</a></li>
                                        <li><a href='/mobile-development'>Mobile Development</a></li>
                                        <li><a href='/web-design'>Drupal Development</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="fw-title">About</h4>
                                <div className="footer-link-list">
                                    <ul className="list-wrap">
                                        <li><a href='/about-us'>About</a></li>
                                        <li><a href='/our-approach'>Our Approach</a></li>
                                        <li><a href='#'>Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="footer-shape-two">
                <img src="/assets/img/images/h4_footer_shape.png" alt="" data-aos="fade-right" data-aos-delay="400"/>
            </div>
        </div>
    </footer>
   
        </>
    );
}



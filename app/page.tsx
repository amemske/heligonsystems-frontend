import Image from "next/image";
import styles from "./page.module.css";


import HomeCarousel from "./HomeCarousel";



export default function Home() {
   
  return (
    

<main className="fix">

       
        <section className="banner-area banner-bg" >
            <div className="container text-center d-sm-block">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1 className="title text-white">Achieve Success with Expert Web & Mobile Solution</h1>
                            <p className="text-white">Explore our comprehensive services for digital transformation. From strategic consultation to cutting-edge software development, web design, and mobile app development, we're here to help you progress.</p>

                        </div>

                    </div>
                </div>

            </div>
        </section>
       

       
        <section id="about" className="about-area pt-60 pb-40">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img-wrap">
                            <img className="rounded-4" src="/assets/img/home-intro.webp" alt="Trusted Software Solutions Partner - Web Design and Development"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title mb-35 tg-heading-subheading ">
                                <h2 className="title tg-element-title">Trusted Software Solutions Partner</h2>
                            </div>
                            <p>Unlock the full potential of your business with our tailored software solutions, spanning web, mobile, and cloud platforms. Our agile methodology ensures swift and effective outcomes, suitable for projects of all scopes. Propel
                                your growth trajectory with our specialized expertise.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-left-shape">
                <img src="/assets/img/images/about_shape02.webp" alt=""/>
            </div>
        </section>

        <section className="project-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title text-center mb-50 tg-heading-subheading ">
                            <span className="sub-title">OUR SERVICES</span>
                            <h2 className="title tg-element-title">Technology Solutions</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-item-wrap">
                <div className="container custom-container-two">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="project-item">
                                <div className="project-thumb">
                                    <a href='/web-development'><img src="/assets/img/home-web.webp" alt="Web App Development - Best Website Builders "/></a>
                                </div>
                                <div className="project-content">
                                    <div className="left-side-content">
                                        <h4 className="title"><a href='/web-development'>Web App Development</a></h4>
                                        <span>Web Apps with React, Laravel and Spring</span>
                                    </div>
                                    <div className="link-arrow">
                                        <a href='/web-development'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6293 3.27957C17.7117 2.80341 17.4427 2.34763 17.0096 2.17812C16.9477 2.15385 16.8824 2.13552 16.8144 2.12376L6.96081 0.419152C6.41654 0.325049 5.89911 0.689856 5.80491 1.23411C5.71079 1.77829 6.07564 2.29578 6.61982 2.38993L14.0946 3.68295L1.36574 12.6573C0.914365 12.9756 0.806424 13.5995 1.12467 14.0509C1.44292 14.5022 2.06682 14.6102 2.51819 14.2919L15.247 5.31753L13.954 12.7923C13.8598 13.3365 14.2247 13.854 14.7689 13.9482C15.3131 14.0422 15.8305 13.6774 15.9248 13.1332L17.6293 3.27957Z" fill="currentcolor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6293 3.27957C17.7117 2.80341 17.4427 2.34763 17.0096 2.17812C16.9477 2.15385 16.8824 2.13552 16.8144 2.12376L6.96081 0.419152C6.41654 0.325049 5.89911 0.689856 5.80491 1.23411C5.71079 1.77829 6.07564 2.29578 6.61982 2.38993L14.0946 3.68295L1.36574 12.6573C0.914365 12.9756 0.806424 13.5995 1.12467 14.0509C1.44292 14.5022 2.06682 14.6102 2.51819 14.2919L15.247 5.31753L13.954 12.7923C13.8598 13.3365 14.2247 13.854 14.7689 13.9482C15.3131 14.0422 15.8305 13.6774 15.9248 13.1332L17.6293 3.27957Z" fill="currentcolor" />
                                    </svg>
                                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="project-item">
                                <div className="project-thumb">
                                    <a href='/mobile-development'><img src="/assets/img/home-mobile.webp" alt="mobile app developers"/></a>
                                </div>
                                <div className="project-content">
                                    <div className="left-side-content">
                                        <h4 className="title"><a href='/mobile-development'>Mobile Development</a></h4>
                                        <span>Unified Code Base for iOS and Android</span>
                                    </div>
                                    <div className="link-arrow">
                                        <a href='/mobile-development'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6293 3.27957C17.7117 2.80341 17.4427 2.34763 17.0096 2.17812C16.9477 2.15385 16.8824 2.13552 16.8144 2.12376L6.96081 0.419152C6.41654 0.325049 5.89911 0.689856 5.80491 1.23411C5.71079 1.77829 6.07564 2.29578 6.61982 2.38993L14.0946 3.68295L1.36574 12.6573C0.914365 12.9756 0.806424 13.5995 1.12467 14.0509C1.44292 14.5022 2.06682 14.6102 2.51819 14.2919L15.247 5.31753L13.954 12.7923C13.8598 13.3365 14.2247 13.854 14.7689 13.9482C15.3131 14.0422 15.8305 13.6774 15.9248 13.1332L17.6293 3.27957Z" fill="currentcolor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6293 3.27957C17.7117 2.80341 17.4427 2.34763 17.0096 2.17812C16.9477 2.15385 16.8824 2.13552 16.8144 2.12376L6.96081 0.419152C6.41654 0.325049 5.89911 0.689856 5.80491 1.23411C5.71079 1.77829 6.07564 2.29578 6.61982 2.38993L14.0946 3.68295L1.36574 12.6573C0.914365 12.9756 0.806424 13.5995 1.12467 14.0509C1.44292 14.5022 2.06682 14.6102 2.51819 14.2919L15.247 5.31753L13.954 12.7923C13.8598 13.3365 14.2247 13.854 14.7689 13.9482C15.3131 14.0422 15.8305 13.6774 15.9248 13.1332L17.6293 3.27957Z" fill="currentcolor" />
                                    </svg>
                                </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="project-item">
                                <div className="project-thumb">
                                    <a href='/web-design'><img src="/assets/img/home-data.webp" alt="Wordpress Responsive Web Design"/></a>
                                </div>
                                <div className="project-content">
                                    <div className="left-side-content">
                                        <h4 className="title"><a href='/web-design'>Responsive Web Design</a></h4>
                                        <span>Powered by Wordpress & Drupal</span>
                                    </div>
                                    <div className="link-arrow">
                                        <a href='/web-design'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6293 3.27957C17.7117 2.80341 17.4427 2.34763 17.0096 2.17812C16.9477 2.15385 16.8824 2.13552 16.8144 2.12376L6.96081 0.419152C6.41654 0.325049 5.89911 0.689856 5.80491 1.23411C5.71079 1.77829 6.07564 2.29578 6.61982 2.38993L14.0946 3.68295L1.36574 12.6573C0.914365 12.9756 0.806424 13.5995 1.12467 14.0509C1.44292 14.5022 2.06682 14.6102 2.51819 14.2919L15.247 5.31753L13.954 12.7923C13.8598 13.3365 14.2247 13.854 14.7689 13.9482C15.3131 14.0422 15.8305 13.6774 15.9248 13.1332L17.6293 3.27957Z" fill="currentcolor" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.6293 3.27957C17.7117 2.80341 17.4427 2.34763 17.0096 2.17812C16.9477 2.15385 16.8824 2.13552 16.8144 2.12376L6.96081 0.419152C6.41654 0.325049 5.89911 0.689856 5.80491 1.23411C5.71079 1.77829 6.07564 2.29578 6.61982 2.38993L14.0946 3.68295L1.36574 12.6573C0.914365 12.9756 0.806424 13.5995 1.12467 14.0509C1.44292 14.5022 2.06682 14.6102 2.51819 14.2919L15.247 5.31753L13.954 12.7923C13.8598 13.3365 14.2247 13.854 14.7689 13.9482C15.3131 14.0422 15.8305 13.6774 15.9248 13.1332L17.6293 3.27957Z" fill="currentcolor" />
                                    </svg>
                                </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>


        <section className=" light-bg">

<div className="container">
    <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center mb-50 tg-heading-subheading ">
                <span className="sub-title">OUR SOLUTIONS</span>
                <h2 className="title tg-element-title">Enterprise Solutions</h2>
            </div>
        </div>
    </div>
</div>
<div className="container">
    <div className="row align-items-center">
        <div className="col-lg-6 order-0 order-lg-2">
            <div className="choose-list">
                <ul className="list-wrap">

                    <li>
                        <div className="icon">
                            <img src="/assets/img/hexagon.webp" alt="hexagon" className=""/>
                        </div>
                        <div className="content">
                            <h4 className="title">Seamless Supply Chain and Logistics</h4>
                            <p>Optimize your supply chain and logistics processes with our specialized solutions, ensuring seamless operations and cost-effective management.</p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="/assets/img/hexagon.webp" alt="hexagon" className=""/>
                        </div>
                        <div className="content">
                            <h4 className="title">Insightful Data Analytics and Business Intelligence</h4>
                            <p>Harness the potential of data-driven decision-making with our advanced analytics tools, providing invaluable insights for strategic growth.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="choose-content">

                <div className="choose-list">
                    <ul className="list-wrap">
                        <li>
                            <div className="icon">
                                <img src="/assets/img/hexagon.webp" alt="hexagon" className=""/>
                            </div>
                            <div className="content">
                                <h4 className="title">Streamlined Enterprise Resource Planning (ERP)s</h4>
                                <p>Navigate complex business operations seamlessly with our ERP solutions, enhancing efficiency and accuracy across your organization.</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <img src="/assets/img/hexagon.webp" alt="hexagon" className=""/>
                            </div>
                            <div className="content">
                                <h4 className="title">Enhanced Customer Relationship Management (CRM)</h4>
                                <p>Forge lasting connections with your clientele using our CRM systems, designed to elevate customer interactions and satisfaction.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

</section>

<section className="brand-area">
            <div className="container">

<HomeCarousel/>
           
            </div>
            </section>

   
   
</main>
      
  );
}

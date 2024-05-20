import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Web Development",
  };

export default  async function Page() {
   
   

    return (
        <>
        
        <main className="fix">
        <section className="breadcrumb__area breadcrumb_bg py-5" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="breadcrumb__content">
                            <h2 className="title text-white">Web App Development</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href='/' className="text-white">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Web App development</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
        <section className="about__area-seven">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                        <div className="about__img-wrap-seven">
                            <img src="/assets/img/heligon-web-development.jpg" alt="fullstack developers"/>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content-seven">
                            <div className="section-title mb-25">
                                <span className="sub-title">Web App Development </span>
                                <h2 className="title"> Elevate Your Business with Responsive Excellence</h2>
                            </div>
                            <p>At Heligon Systems, we specialize in crafting custom web solutions that redefine online excellence. Our dedicated focus revolves around leveraging the power of industry-leading technologies such as Spring, Laravel, and Next.js
                                to propel your business to unparalleled heights. These custom web applications are:-</p>
                            <div className="about__content-inner-five">

                                <div className="about__list-box">
                                    <ul className="list-wrap">
                                        <li><i className="fa-solid fa-check"></i>Adaptable</li>
                                        <li><i className="fa-solid fa-check"></i>Optimized for Performance</li>
                                        <li><i className="fa-solid fa-check"></i>Secure</li>
                                        <li><i className="fa-solid fa-check"></i>and have Responsive Design</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="about__shape-wrap-four">
                <img src="/assets/img/images/h4_about_shape01.png" alt=""/>
            </div>
        </section>
       
        <section className="services__area-four services__bg-four light-blue-bg" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-50">
                            <h2 className="title">How it works</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gutter-24">
                    <div className="col-lg-6 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    1
                                </div>
                                <div className="services__item-top-title">
                                    <h2 className="title"><a href='#'>Strategic Planning & Discovery</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three">
                                <p>Our adept business analysts delve into understanding the specific needs of your target audience. Acting as the liaison between business stakeholders and our tech team, they meticulously plan the project to ensure alignment
                                    and clarity in objectives.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    2
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a href='#'>Front-end Design and Development with Next.js</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three">
                                <p>Our web designers conduct a thorough analysis of your user audience, translating insights into a captivating UI design. With Next.js, we bring the envisioned web application to life through cutting-edge front-end coding,
                                    ensuring an optimal and responsive user experience.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    3
                                </div>
                                <div className="services__item-top-title">
                                    <h2 className="title"><a href='#'>Back-end Mastery with Laravel and Spring</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three">
                                <p>The core of your web application is crafted through meticulous implementation of business logic on the back end. Leveraging the power of Laravel and Spring, our developers ensure swift, secure, and high-quality coding,
                                    establishing the foundation for a robust and scalable web solution.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    4
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a href='#'>Support & Iterative Enhancements</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three">
                                <p>Beyond the launch, our commitment continues with continuous support and iteration. We establish APIs to seamlessly integrate your web application with corporate or third-party systems and services, ensuring immediate data
                                    synchronization across platforms. This dynamic approach allows us to adapt and enhance your web solution as your business evolves.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="services__shape-wrap-two">
                <img src="/assets/img/services/inner_services_shape01.png" alt="" data-aos="fade-right" data-aos-delay="400"/>
                <img src="/assets/img/services/inner_services_shape02.png" alt="" data-aos="fade-left" data-aos-delay="400"/>
            </div>
        </section>

        <section className="services__area-six services__bg-six breadcrumb-bg" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <h1 className="title tg-element-title mb-20 text-center text-white">Frameworks we use</h1>
                    </div>

                </div>


                <div className="row justify-content-center gutter-24">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services__item-two">
                            <div className="services__icon-two portfolio-casestudies frameworks-we-use">
                                <img src="/assets/img/spring.webp" alt="Spring Framework - backend web development"/>
                            </div>
                            <div className="services__content-two">
                                <h2 className="title"><a href='#'>Spring</a></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services__item-two">
                            <div className="services__icon-two portfolio-casestudies frameworks-we-use">
                                <img src="/assets/img/next-js.svg" alt="Next.js Framework - single page apps"/>
                            </div>
                            <div className="services__content-two">
                                <h2 className="title"><a href='#'>next-js</a></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="services__item-two">
                            <div className="services__icon-two portfolio-casestudies frameworks-we-use">
                                <img src="/assets/img/laravel.webp" alt="Laravel Framework - ecommerce websites with laravel"/>
                            </div>
                            <div className="services__content-two">
                                <h2 className="title"><a href='#'>Laravel</a></h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section className="faqs__area-six">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-12 mb-30">
                        <div className="box-faq-right">
                            <h1 className="title tg-element-title mb-20 text-center">Frequently asked questions</h1>
                            <div className="block-faqs">
                                <div className="accordion wow fadeInUp" id="accordionFAQ">

                                    <div className="accordion-item">
                                        <h5 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button text-heading-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"/>
                                        
What sets our custom web development services apart?
                                </h5>
                                <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                                    <div className="accordion-body">Our proficiency in Laravel, Spring, and Next.js extends beyond the ordinary. We offer a diverse range of services, encompassing tailored web application development, innovative UI/UX design, seamless migration solutions, dynamic e-commerce development, and round-the-clock support. This comprehensive approach guarantees the success of your custom web development project at every phase.</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    </main>

 </>
    );
}



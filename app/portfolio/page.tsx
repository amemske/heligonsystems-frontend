import { Metadata } from 'next';
import React from 'react';
import { FaGlobe } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Web Design Portfolio",
  };

export default  async function Page() {
   
   

    return (
        <>
<main className="fix">
<section className="breadcrumb__area breadcrumb_bg py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="breadcrumb__content">
                            <h2 className="title text-white"></h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href='/' className="text-white">Home</a></li>&nbsp;
                                    <li><i className="fa-solid fa-angle-right"></i></li> &nbsp;
                                    <li className="breadcrumb-item active" aria-current="page">Our Portfolio</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </section>

<section className="team__details-area py-5  my-0">
            <div className="container">
                <div className="team__details-inner">
                    <div className="row align-items-center">
                        <div className="col-36">
                            <div className="team__details-img">
                                <a href='https://sanitarybins.co.ke/' target='_blank'>
                                <img src="/assets/img/sanitary-bins-screenshot.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-64">
                            <div className="team__details-content">
                                <h2 className="title">Sanitary Bins Kenya</h2>
                                <span className="position">Description</span>
                                <p>Sanitary Bins Kenya is a trusted provider of washroom hygiene solutions, dedicated to promoting period dignity and enhancing sanitary standards across businesses and institutions. With over 13 years of experience, the company partners with organizations of all sizes to deliver tailored hygiene services, from menstrual care to hand hygiene and odor control. Their commitment to sustainability and social responsibility ensures a cleaner, more comfortable experience for employees, customers, and visitors.</p>
                                <div className="team__details-info"> 
                                    <ul className="list-wrap">
                                         <li>
                                         <FaGlobe />
                                            <a href='https://sanitarybins.co.ke/' target='_blank'>View site</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="team__details-area py-5  my-0 light-blue-bg">
            <div className="container">
                <div className="team__details-inner">
                    <div className="row align-items-center">
                        <div className="col-36">
                            <div className="team__details-img">
                            <a href='https://aacc-ceta.org' target='_blank'>
                                <img src="/assets/img/aacc.webp" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-64">
                            <div className="team__details-content">
                                <h2 className="title">All Africa Conference of Churches</h2>
                                <span className="position">Description</span>
                                <p>
                                The All Africa Conference of Churches is a corporate website created using Drupal,
                                     featuring content types such as publications, galleries, and interactive forms. 
                                     It boasts a custom, user-friendly theme that aligns with the organization’s branding and ensures
                                      easy updates. The site is fully responsive and  has advanced SEO features that enhance 
                                      user experience and visibility, while Drupal’s security and performance optimization ensure a fast and secure browsing experience. This project exemplifies the creation of a versatile, 
                                    high-performance web solution tailored to the needs of a large, influential organization.
                                   </p>
                                <div className="team__details-info">
                                    <ul className="list-wrap">
                                        <li>
                                        <FaGlobe />
                                            <a href='https://aacc-ceta.org' target='_blank'>View site</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="team__details-area py-5  my-0 ">
            <div className="container">
                <div className="team__details-inner">
                    <div className="row align-items-center">
                        <div className="col-36">
                            <div className="team__details-img">
                            <a href='https://aacc-ceta.org' target='_blank'>
                                <img src="/assets/img/maseno.webp" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-64">
                            <div className="team__details-content">
                                <h2 className="title">Maseno University</h2>
                                <span className="position">Description</span>
                                <p>
                                Maseno University’s website is a comprehensive Drupal platform designed to serve a user base of over 10,000 students daily. The site features custom content types for downloads, events, and publications, facilitating seamless access to vital resources. It includes robust event management tools, an extensive document repository, and a news portal to keep the university community informed.</p>
                                <div className="team__details-info">
                                    <ul className="list-wrap">
                                        <li>
                                        <FaGlobe />
                                            <a href='https://maseno.ac.ke/' target='_blank'>View site</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="team__details-area py-5  my-0 light-blue-bg">
            <div className="container">
                <div className="team__details-inner">
                    <div className="row align-items-center">
                        <div className="col-36">
                            <div className="team__details-img">
                            <a href='http://www.centreforurbaninnovations.org/' target='_blank'>
                                <img src="/assets/img/center-for-urban-research.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-64">
                            <div className="team__details-content">
                                <h2 className="title">Centre for Urban Research</h2>
                                <span className="position">Description</span>
                                <p>
                                The Centre for Urban Research is a corporate WordPress site featuring custom content types for events, galleries, and news. The site includes an integrated calendar, interactive galleries, and a comprehensive news section, all designed to support the center's research activities. It is fully responsive for seamless access across devices and optimized for search engines and social media integration to increase visibility. Secure forms facilitate user engagement and data collection, making the site a valuable tool for connecting with the research community and the public.</p>
                                <div className="team__details-info">
                                    <ul className="list-wrap">
                                        <li>
                                        <FaGlobe />
                                            <a href='http://www.centreforurbaninnovations.org/' target='_blank'>View site</a>
                                        </li>
                                        
                                    </ul>
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
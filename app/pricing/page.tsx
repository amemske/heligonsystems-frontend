import { Metadata } from 'next';
import React from 'react';
import { FaCheck } from "react-icons/fa6";

export const metadata: Metadata = {
    title: "Web Design Pricing",
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
                                    <li className="breadcrumb-item active" aria-current="page">Our Prices</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
</section>
            <section className="pricing__area pricing__bg pt-5 light-blue-bg" data-background="assets/img/bg/pricing_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="section-title text-center mb-30">
                            <span className="sub-title">Standard Plans</span>
                            <h2 className="title">Web Essentials</h2>
                        </div>
                    </div>
                </div>
                <div className="pricing__item-wrap">
                   
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="pricing__box">
                                <div className="pricing__head">
                                    <h5 className="title">Starter Site</h5>
                                </div>
                                <div className="pricing__price">
                                    <h2 className="price monthly_price"><strong>KES</strong> 20,000 <span></span></h2>
                                </div>
                                <div className="pricing__list">
                                    <ul className="list-wrap">
                                        <li>
                                        <FaCheck />  Up to 3 pages
                                        </li>
                                        <li>
                                        <FaCheck />  Mobile responsive
                                        </li>
                                        <li>
                                        <FaCheck /> CMS
                                        </li>
                                        <li>
                                        <FaCheck /> Contact form
                                        </li>
                                        <li>
                                        <FaCheck /> Blog integration
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__btn">
                                    <a href="https://api.whatsapp.com/send?phone=+254727781090&text=Hello%21%20How%20can%20we%20assist%20you%20today%3F%20We%27re%20here%20to%20help%20with%20any%20questions%20you%20have%20about%20our%20web%20design%20services." className="btn">Get this plan Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="pricing__box">
                                <div className="pricing__head">
                                    <h5 className="title">Essential Site</h5>
                                </div>
                                <div className="pricing__price">
                                <h2 className="price monthly_price"><strong>KES</strong> 34,000 <span></span></h2>
                                </div>
                                <div className="pricing__list">
                                    <ul className="list-wrap">
                                        <li>
                                        <FaCheck /> Up to 6 pages
                                        </li>
                                        <li>
                                        <FaCheck /> Mobile responsive
                                        </li>
                                        <li>
                                        <FaCheck /> Standard SEO
                                        </li>
                                        <li>
                                        <FaCheck /> Contact form
                                        </li>
                                        <li>
                                        <FaCheck /> Social media integration
                                        </li>
                                        <li>
                                        <FaCheck /> Blog integration
                                        </li>
                                        <li>
                                        <FaCheck /> Analytics
                                        </li>
                                        <li>
                                        <FaCheck /> 2 days of training
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__btn">
                                    <a href="https://api.whatsapp.com/send?phone=+254727781090&text=Hello%21%20How%20can%20we%20assist%20you%20today%3F%20We%27re%20here%20to%20help%20with%20any%20questions%20you%20have%20about%20our%20web%20design%20services." className="btn">Get this plan Now</a>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
            
        </section>

  <section className="pricing__area pricing__bg pt-5" data-background="assets/img/bg/pricing_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="section-title text-center mb-30">
                            <span className="sub-title">Corporate Plans</span>
                            <h2 className="title">Corporate Websites</h2>
                        </div>
                    </div>
                </div>
                <div className="pricing__item-wrap">
                   
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="pricing__box">
                                <div className="pricing__head">
                                    <h5 className="title">Corporate Essential</h5>
                                </div>
                                <div className="pricing__price">
                                    <h2 className="price monthly_price"><strong>KES</strong> 84,000 <span></span></h2>
                                </div>
                                <div className="pricing__list">
                                    <ul className="list-wrap">
                                        <li>
                                        <FaCheck />  Up to 20 pages
                                        </li>
                                        <li>
                                        <FaCheck />  Custom Graphics and Icons
                                        </li>
                                        <li>
                                        <FaCheck />  Mobile responsive
                                        </li>
                                        <li>
                                        <FaCheck /> Contact forms
                                        </li>
                                        <li>
                                        <FaCheck /> Social media integration
                                        </li>
                                        <li>
                                        <FaCheck /> Blog integration
                                        </li>
                                        <li>
                                        <FaCheck /> Advanced analytics
                                        </li>
                                        <li>
                                        <FaCheck /> Photogalleries
                                        </li>
                                        <li>
                                        <FaCheck /> Video galleries
                                        </li>
                                        <li>
                                        <FaCheck /> API intergration
                                        </li>
                                        <li>
                                        <FaCheck /> Advanced Search Engine Optimization
                                        </li>
                                        <li>
                                        <FaCheck /> Keyword Research
                                        </li>
                                        <li>
                                        <FaCheck /> Newsletter subscription 
                                        </li>
                                        <li>
                                        <FaCheck />  5 days Training and Support
                                        </li>
                                        <li>
                                        <FaCheck />  1 month free support
                                        </li>
                                        <li>
                                        <FaCheck />  Custom content types such as events, publications
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__btn">
                                    <a href="https://api.whatsapp.com/send?phone=+254727781090&text=Hello%21%20How%20can%20we%20assist%20you%20today%3F%20We%27re%20here%20to%20help%20with%20any%20questions%20you%20have%20about%20our%20web%20design%20services." className="btn">Get this plan Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="pricing__box">
                                <div className="pricing__head">
                                    <h5 className="title">Corporate Elite</h5>
                                </div>
                                <div className="pricing__price">
                                <h2 className="price monthly_price"><strong>KES</strong> 150,000 <span></span></h2>
                                </div>
                                <div className="pricing__list">
                                <ul className="list-wrap">
                                        <li>
                                        <FaCheck />  Up To 50 Pages
                                        </li>
                                        <li>
                                        <FaCheck />  Custom Graphics and Icons
                                        </li>
                                        <li>
                                        <FaCheck />  Multi-language Support
                                        </li>
                                        <li>
                                        <FaCheck /> Custom Email Templates
                                        </li>
                                        <li>
                                        <FaCheck /> Backup and Recovery Options
                                        </li>
                                        <li>
                                        <FaCheck /> Advanced Security Features
                                        </li>
                                        <li>
                                        <FaCheck /> Live Chat Integration
                                        </li>
                                        <li>
                                        <FaCheck /> Customer Portal
                                        </li>
                                        <li>
                                        <FaCheck /> Advanced User Permissions
                                        </li>
                                        <li>
                                        <FaCheck />Custom API Development & intergration
                                        </li>
                                        <li>
                                        <FaCheck /> Advanced Search Engine Optimization, Keyword Research
                                        </li>
                                        <li>
                                        <FaCheck />  Performance Optimization
                                        </li>
                                        <li>
                                        <FaCheck /> Integration with CRM Systems
                                        </li>
                                        <li>
                                        <FaCheck />  10 Days Training And Support
                                        </li>
                                        <li>
                                        <FaCheck />  2 month free support
                                        </li>
                                        <li>
                                        <FaCheck />  Custom content types such as events, publications
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__btn">
                                    <a href="https://api.whatsapp.com/send?phone=+254727781090&text=Hello%21%20How%20can%20we%20assist%20you%20today%3F%20We%27re%20here%20to%20help%20with%20any%20questions%20you%20have%20about%20our%20web%20design%20services." className="btn">Get this plan Now</a>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            
        </section>

        <section className="pricing__area pricing__bg pt-5 light-blue-bg" data-background="assets/img/bg/pricing_bg.jpg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="section-title text-center mb-30">
                            <span className="sub-title">Ecommerce Plans</span>
                            <h2 className="title">Ecommerce Websites</h2>
                        </div>
                    </div>
                </div>
                <div className="pricing__item-wrap">
                   
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="pricing__box">
                                <div className="pricing__head">
                                    <h5 className="title"> E-Commerce Starter</h5>
                                </div>
                                <div className="pricing__price">
                                    <h2 className="price monthly_price"><strong>KES</strong> 90,000 <span></span></h2>
                                </div>
                                <div className="pricing__list">
                                    <ul className="list-wrap">
                                        <li>
                                        <FaCheck />  Internal Site Search
                                        </li>
                                        <li>
                                        <FaCheck />   Product Filters
                                        </li>
                                        <li>
                                        <FaCheck /> Product Videos
                                        </li>
                                        <li>
                                        <FaCheck /> Product Comparisons
                                        </li>
                                        <li>
                                        <FaCheck /> Product Reviews
                                        </li>
                                        <li>
                                        <FaCheck /> FAQ For Products
                                        </li>
                                        <li>
                                        <FaCheck /> Simple Checkout
                                        </li>
                                        <li>
                                        <FaCheck /> Multiple Payment Options
                                        </li>
                                        <li>
                                        <FaCheck /> Email & SMS Opt-In
                                        </li>
                                        <li>
                                        <FaCheck /> Coupon Codes
                                        </li>
                                        <li>
                                        <FaCheck /> Special Offer Programs
                                        </li>
                                        <li>
                                        <FaCheck /> Wishlists
                                        </li>
                                        <li>
                                        <FaCheck /> Carousels
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__btn">
                                    <a href="https://api.whatsapp.com/send?phone=+254727781090&text=Hello%21%20How%20can%20we%20assist%20you%20today%3F%20We%27re%20here%20to%20help%20with%20any%20questions%20you%20have%20about%20our%20web%20design%20services." className="btn">Get this plan Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="pricing__box">
                                <div className="pricing__head">
                                    <h5 className="title">E-Commerce Enterprise</h5>
                                </div>
                                <div className="pricing__price">
                                <h2 className="price monthly_price"><strong>KES</strong> 155,000 <span></span></h2>
                                </div>
                                <div className="pricing__list">
                                    <ul className="list-wrap">
                                        <li>
                                        <FaCheck /> All Features of E-Commerce Starter, plus
                                        </li>
                                        <li>
                                        <FaCheck /> SSO Integration
                                        </li>
                                        <li>
                                        <FaCheck /> Multilingual Support
                                        </li>
                                        <li>
                                        <FaCheck /> Loyalty Program
                                        </li>
                                        <li>
                                        <FaCheck /> An Affiliate Program
                                        </li>
                                        <li>
                                        <FaCheck /> Store Finder
                                        </li>
                                        <li>
                                        <FaCheck /> Newsletter Signup
                                        </li>
                                        <li>
                                        <FaCheck /> Live Chat Integration
                                        </li>
                                        <li>
                                        <FaCheck /> Advanced Consumer Reviews
                                        </li>
                                        <li>
                                        <FaCheck /> Multilevel Security
                                        </li>
                                        <li>
                                        <FaCheck /> Advanced Search Engine Optimization
                                        </li>
                                        <li>
                                        <FaCheck /> Custom API Integration
                                        </li>
                                        <li>
                                        <FaCheck /> Backup and Recovery Options
                                        </li>
                                        <li>
                                        <FaCheck /> Advanced User Permissions
                                        </li>
                                        <li>
                                        <FaCheck /> Backup and Recovery Options
                                        </li>
                                        <li>
                                        <FaCheck /> Automated Email Marketing Campaigns
                                        </li>
                                        <li>
                                        <FaCheck /> Performance Optimization
                                        </li>
                                        <li>
                                        <FaCheck /> Integration with CRM Systems
                                        </li>
                                        <li>
                                        <FaCheck /> A/B Testing for Pages
                                        </li>
                                        <li>
                                        <FaCheck /> Event Management System
                                        </li>
                                    </ul>
                                </div>
                                <div className="pricing__btn">
                                    <a href="https://api.whatsapp.com/send?phone=+254727781090&text=Hello%21%20How%20can%20we%20assist%20you%20today%3F%20We%27re%20here%20to%20help%20with%20any%20questions%20you%20have%20about%20our%20web%20design%20services." className="btn">Get this plan Now</a>
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
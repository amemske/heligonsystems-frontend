import React from 'react';

export default  async function Page() {
   
   

    return (
        <>
        <main className="fix">
      
        <section className="breadcrumb__area breadcrumb_bg py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="breadcrumb__content">
                            <h2 className="title text-white">Our Approach</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href='/' className="text-white">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Our Approach</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </section>
       
        <section className="about__area-three about__bg-two" data-background="/assets/img/bg/h3_about_bg.webp">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="about__img-wrap-seven">
                            <img src="/assets/img/our-approach-min.jpg" alt=""/>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about__content-three">
                            <div className="section-title mb-25">
                                <h2 className="title">We Want Your Business to Succeed</h2>
                                <p>
                                    At Heligon Systems, we are not just developers; we are architects of digital success. Our approach is rooted in a deep understanding of technology and a keen awareness of the ever-evolving business landscape. Here's how we stand out:
                                </p>
                            </div>
                            <div className="about__content-inner about__content-inner-two">

                                <div className="about__list-box ">
                                    <ul className="list-wrap">
                                        <li><i className="fa-solid fa-check"></i>EXPERTISE <br/></li>
                                        <li>
                                            <p>Our team possesses strong expertise in various technologies and business domains.</p>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i>TRANSPARENCY</li>
                                        <li>
                                            <p>Developing and supporting Software-as-a-Service solutions</p>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i>QUALITY</li>
                                        <li>
                                            <p>Creating robust and secure online shopping platforms</p>
                                        </li>
                                        <li><i className="fa-solid fa-check"></i>INNOVATION</li>
                                        <li>
                                            <p>Assisting startups in building Minimum Viable Products</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="services__area-four services__bg-four light-blue-bg" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-50">
                            <h2 className="title">Our Engagement Model</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gutter-24">

                    <div className="col-lg-6 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <i className="fa-solid fa-hammer"></i>
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a href='#'>FIXED PRICING</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three">
                                <p>For clients seeking a predictable budget and well-defined project scope, we also offer fixed-price contracts. With fixed-price contracts, we agree on the project’s scope and requirements upfront, and we provide a total
                                    cost for the entire project. This approach ensures that there are no unexpected costs and provides clients with a clear understanding of their financial commitment from the outset.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="services__item-three">
                            <div className="services__item-top">
                                <div className="services__icon-three">
                                    <i className="fa-solid fa-gear"></i>
                                </div>
                                <div className="services__top-title">
                                    <h2 className="title"><a href='#'>FEATURE-BASED PRICING</a></h2>
                                </div>
                            </div>
                            <div className="services__content-three">
                                <p>For clients who prefer a more dynamic approach and have specific features or changes in mind, we offer feature-based pricing. This model allows clients to request specific functionalities, and we provide detailed estimates
                                    based on the required effort and resources. Feature-based pricing offers the flexibility to accommodate changes and additions to the project scope while maintaining transparency in cost estimation.</p>

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
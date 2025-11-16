import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Service = () => {
    const navigate = useNavigate();
    const handleQuote = () => {
        navigate("/Quote")
    }
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          delay: 12,
        });
      }, []);
    return (
         <div className='body'>
            <div className="backgrounddetail py-5">
                <h1 className='text-center service-heading fw-bold fs-1' id='Services'><b><i class="fa-solid fa-minus"></i></b> Services <b><i class="fa-solid fa-minus"></i></b></h1>
                <div className="container" data-aos="fade-up">
                    <div className="row py-5">

                        <div className="col-lg-6 col-md-8 col-sm-12 text-white p-5 first-section rounded-2 d-flex align-items-end shadow p-3">
                            <div>
                                <h1 className="fw-bold">Build Your Software Product from Concept to Completion.</h1>
                                <button className="boton-4 mt-4 fw-bold text-white border-0 p-2 rounded-3">BUILD YOUR PRODUCT</button>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-8 col-sm-12 bg-white text-dark p-5 rounded-2 shadow p-3">
                            <h3 className="fw-bold twin-section">From ideation to launch and ongoing evolution, we guide your product every step of the way.
                            </h3>
                            <p>
                                Embark on a seamless journey that turns your vision into a market-ready product. Our end-to-end
                                software development services cover every stage of the product lifecycle.
                            </p>
                            <p>
                                From initial ideation and innovation to development, maintenance, scaling, and automation, we’re your
                                dedicated partner at every step. Perfect for visionaries seeking a comprehensive, hassle-free path to product succsuss
                            </p>
                            <p>Explore our software product development services today.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container" data-aos="fade-up">
                <div className="row g-3">
                    {/* Backend Development */}
                    <div className="col-12 col-md-4 mb-4">
                        <div className="service-card shadow p-3 rounded-3 p-4 h-100 d-flex flex-column">
                            <div className="text-center mb-3">
                                <i className="fa-solid fa-code icon-color fs-1 spinner"></i>
                             </div>
                            <h4 className="text-center service-heading mb-2"><b>Backend Development</b></h4>
                            <p className="text-center text-muted">
                                We design robust, scalable, and secure backend systems, leveraging industry-leading technologies to power your applications.
                            </p>
                        </div>
                    </div>

                    {/* Frontend Development */}
                    <div className="col-12 col-md-4 mb-4">
                        <div className="service-card shadow p-3 rounded-3 p-4 h-100 d-flex flex-column">
                            <div className="text-center mb-3">
                                <i className="fa-solid fa-tv icon-color fs-1"></i>
                            </div>
                            <h4 className="text-center service-heading mb-2"><b>Frontend Development</b></h4>
                            <p className="text-center text-muted">
                                We create engaging, responsive user interfaces using cutting-edge front-end frameworks like React, Angular, and more, delivering seamless user experiences.
                            </p>
                        </div>
                    </div>

                      {/* Full Stack Development */}
                    <div className="col-12 col-md-4 mb-4">
                        <div className="service-card shadow p-3 rounded-3 p-4 h-100 d-flex flex-column">
                            <div className="text-center mb-3">
                                <i className="fa-solid fa-desktop icon-color fs-1"></i>
                            </div>
                            <h4 className="text-center service-heading mb-2"><b>Full Stack Development</b></h4>
                            <p className="text-center text-muted">
                                Our skilled developers excel in both front-end and back-end development, delivering visually stunning interfaces and powerful functionalities for a seamless and unified user experience.
                            </p>
                        </div>
                    </div>

                    {/* Quality Assurance */}
                    <div className="col-12 col-md-4 mb-4">
                        <div className="service-card shadow p-3 rounded-3 p-4 h-100 d-flex flex-column">
                            <div className="text-center mb-3">
                                <i className="fa-solid fa-check-circle icon-color fs-1"></i>
                            </div>
                            <h4 className="text-center service-heading mb-2"><b>Quality Assurance</b></h4>
                            <p className="text-center text-muted">
                                Deliver perfection with the expertise of our Quality Assurance specialists. Combining advanced automated testing with precise manual techniques, we ensure your software is flawless and performs seamlessly across all functionalities.
                            </p>
                        </div>
                    </div>

                    {/* DevOps */}
                    <div className="col-12 col-md-4 mb-4">
                        <div className="service-card shadow p-3 rounded-3 p-4 h-100 d-flex flex-column">
                            <div className="text-center mb-3">
                                <i className="fa-solid fa-cogs icon-color fs-1 spinner"></i>
                            </div>
                            <h4 className="text-center service-heading mb-2"><b>DevOps</b></h4>
                            <p className="text-center text-muted">
                                Optimize your development and delivery processes with our skilled DevOps experts. We streamline workflows, implement CI/CD pipelines, and utilize containerization to enable faster deployments and ensure a seamless development lifecycle.
                            </p>
                        </div>
                    </div>

                    {/* Mobile Development */}
                    <div className="col-12 col-md-4 mb-4">
                        <div className="service-card shadow p-3 rounded-3 p-4 h-100 d-flex flex-column">
                            <div className="text-center mb-3">
                                <i className="fa-solid fa-mobile-screen icon-color fs-1"></i>
                            </div>
                            <h4 className="text-center service-heading mb-2"><b>Mobile Development</b></h4>
                            <p className="text-center text-muted">
                                Create outstanding mobile experiences across all platforms. Our team develops high-performance apps for Android, iOS, and Windows, delivering a consistent and seamless user experience on any device.
                            </p>
                        </div>
                    </div>
                    
                    {/* Call-to-Action Button */}
                    <div className="col-12 d-flex justify-content-center">
                        <button onClick={() => { handleQuote() }} className="botonfive p-2 text-white rounded-3 mt-3 fw-bold">Get a Quote</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service
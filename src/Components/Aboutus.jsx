import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      delay: 12,
    });
  }, []);
  return (
    <div className="body">
      
      <div className="xpertbitback py-5 px-4">
        <div className="container" id='Aboutus' data-aos="fade-up">
          <div className="row justify-content-lg-start justify-content-center">
            <div
              className="col-lg-7 col-md-10 col-12 text-white p-4 rounded-3 shadow"  data-aos="fade-up"
              style={{ background: '#2b3e5f' }}
            >
              <h2 className="text-center text-lg-start mb-4 fw-bold">Why Choose XpertBits?</h2>
              <p className="text-justify">
                <b>1.</b>At XpertBits, we are passionate about delivering exceptional software solutions tailored to meet the
                unique needs of businesses. As a trusted technology partner to renowned companies, we have built a
                reputation for excellence, precision, and reliability.
              </p>
              <p className="text-justify">
               <b>2.</b> <b>What Sets Us Apart?</b><br />
                Custom Software Excellence: We specialize in developing high-quality, high-performing
                software solutions that drive results—delivered on time and exceeding expectations.
              </p>
              <p className="text-justify">
               <b>3.</b> Top-Tier Talent Network: Beyond our development services, we offer a flexible platform to
                connect businesses with elite software developers, designers, and quality assurance
                engineers, carefully matched to your time zone and work style for seamless collaboration.
              </p>
              <p className="text-justify">
               <b>4.</b> End-to-End Digital Solutions: From web and app development to software QA, UI/UX design,
                and digital marketing, we provide a comprehensive suite of services to help businesses thrive
                in the digital era.
              </p>
              <p className="text-justify">
               <b>5.</b> Proven Expertise: With a team of accomplished professionals and a portfolio of successful
                projects, XpertBits consistently delivers innovative, customized solutions that empower businesses to achieve your goal.
              </p>
              <p className="text-justify">
               <b>6.</b> Partner with XpertBits to transform your vision into reality and unlock your business’s digital potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

import React from 'react'
import { useNavigate } from 'react-router-dom';
import image6 from '../Images/arrowRight (1).png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Footer = () => {
        const navigate = useNavigate();
        const handleContact = () => {
            navigate("/Contact")
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
            <div className='footerlast' >
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 py-4">
                            <h2 className='headlast text-white'>Wanna talk to an Expert?</h2>
                            <p className='text-white'>Select the professionals wisely so that your company can soar to new heights</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className='d-flex align-items-center justify-content-center'>
                                <img className='img-fluid mt-2' src={image6} alt="" />
                                <button onClick={() => { handleContact() }} className='btn botoneight text-white ps-2 text-nowrap fw-bold'>Let's GO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                {/* footerlast */}

                <footer>
                <div className="text-white py-4 footer mt-5 m-3 rounded-4">
                    <div className="container px-2" data-aos="fade-down">
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <h3 className='mb-4 ulColor'>Need Help</h3>
                                <p className='m-0'>Home</p>
                                <p className='m-0'>Contact Us</p>
                            </div>
                          
                            <div className="col-md-3 mb-3">
                                <h3 className='mb-4 ulColor'>Quick Links</h3>
                                <p className='m-0'>Get A Quote</p>
                                <p className='m-0'>Talk to an Expert</p>
                            </div>
                            <div className="col-md-3 mb-3">
                                <h3 className='mb-4 ulColor'>Get in Touch</h3>
                                <p className='m-0'>info@dynamicbits.tech</p>
                                <p className='m-0'>+92 300 9671271</p>
                                <div className='d-flex gap-3 fs-4'>
                                    <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook text-white"></i></a>
                                    <a href="https://pk.linkedin.com/"><i class="fa-brands fa-linkedin text-white"></i></a>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <h3 className='mb-4 ulColor'>Newsletter</h3>
                               <input className='form-control' type="text" placeholder='example@mail.com' />
                                <br />
                               <input className='form-control' type="text" placeholder='Subscribe' />

                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer

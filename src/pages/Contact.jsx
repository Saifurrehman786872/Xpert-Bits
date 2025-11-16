import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          delay: 12,
        });
      }, []);
    return (
        <div>
            <Navbar />
            <div className="container"  data-aos="fade-up">
                <div className="row py-4">
                    <div className="col-lg-6 col-md-8 col-12 d-flex align-items-center">
                        <div className="rightside">
                            <h1 className='contact-headone fw-bold'>Let's</h1>
                            <h2 className='contact-headtwo fw-bold'>Connect</h2>

                            <p>We’re here to help you! Tell us what you’re looking for and we’ll get you connected to the right people.

                            </p>
                            <div className='contacticon d-flex gap-3'>
                                <span><i class="fa-brands fa-facebook fs-1"></i></span>
                                <span><i class="fa-brands fa-linkedin fs-1"></i></span>

                            </div>
                        </div>
                    </div>


                    <form class="col-lg-6 col-12 mt-lg-0  mt-4 backgroundcontact p-4 rounded-2">
                        <div class="d-flex justify-content-center">
                            <div class="text-primary">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-md-6 mb-3">
                                <label class="form-label text-white" for="name">Name</label>
                                <input class="form-control" id="name" type="text" />
                                <div class="text-danger">

                                </div>
                            </div>
                            <div class="col-12 col-md-6 mb-3">
                                <label class="form-label text-white" for="email">Email</label>
                                <input class="form-control" id="email" type="email" required="" />
                                <div class="text-danger">

                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-white" for="msg">Select a Service</label>
                            <select class="form-select" aria-label="Select a Service" required="">
                                <option value="" selected="">Select a Service</option>
                                <option value="Web Design &amp; Development">Web Design &amp; Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="Desktop App Development">Desktop App Development</option>
                                <option value="Software Quality Assurance">Software Quality Assurance</option>
                                <option value="Graphics Designing">Graphics Designing</option>
                                <option value="Ecommerce Solutions">Ecommerce Solutions</option>

                            </select>
                            <div class="text-danger">

                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-white" for="message">Message</label>
                            <textarea class="form-control" id="message" required="" rows="5"></textarea>
                            <div class="text-danger">

                            </div>
                        </div>
                        <div class="text-end">
                            <button class="btn-fill text-white p-2 rounded-3 fw-bold" type="submit">
                                Submit<i class="fa-solid fa-arrow-right text-white ms-2"></i>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact

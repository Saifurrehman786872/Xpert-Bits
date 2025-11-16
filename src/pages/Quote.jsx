import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import image5 from '../Images/octionimage.jpg'
import Footer from '../Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import QuoteContactForm from '../Components/QuoteContactForm';
import Rendernext from '../Components/Rendernext';
import Lastform from '../Components/Lastform';
import Next from '../Components/Next';
const Quote = () => {
    useEffect(() => {
        window.scroll(0, 0);
    }, [])
    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            delay: 12,
        });
    }, []);
    const forms = [
        
        <QuoteContactForm onNext={() => setCurrentStep(1)} />,
        <Next onNext={() => setCurrentStep(2)}
            onPrevious={() => setCurrentStep(0)} />,
          <Rendernext
            onNext={() => setCurrentStep(3)}
         onPrevious={() => setCurrentStep(1)}
        />,
        <Lastform onPrevious={() => setCurrentStep(2)} />,
    ];   
    return (
        <div className='body'>
            <Navbar />
            <div className="container" data-aos="fade-up">
                <div className="row py-5">
               
                    <div className="col-lg-5 col-12 lh-lg d-block align-content-center">
                        <h4 className='quote-headone fw-bold'>SHARE PROJECT DETAILS</h4>
                        <h1 className='quote-headtwo fw-bold'>Help Us Understand Your Requirement</h1>
                        <p>Share the details of your project – like scope, timeframe, or business challenges. Our team will carefully study them and then we’ll figure out the next move together.</p>
                        </div>
                    <div className='col-lg-7' > <div className='shadow p-3 rounded-4 bg-white' > {forms[currentStep]}</div> </div>;
                </div>
            </div>
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-5 col-12 py-5">
                        <img className='img-fluid rounded-3' src={image5} alt="" />
                    </div>
                    <div className="col-lg-7 col-12 text-center d-flex align-items-center">
                        <div>
                            <h1 className='quote-headthree'><b><i class="fa-solid fa-minus"></i></b>Book a Free Consult<b><i class="fa-solid fa-minus"></i></b></h1>
                            <p>We offer Work From Home and Organisation Solutions for your diversified needs. Our team will contact you for a no-obligation free consult.</p>

                            <input className='form-control' type="text" placeholder='Enter Your Email' />

                            <div className='d-flex gap-1'>
                                <input className='mb-3 ms-1' type="checkbox" />
                                <p className='mt-4'>We will use the information you provide on this form to be in touch with you and to provide updates.</p>
                            </div>
                        
                            <button className='button-quote border-0 text-white p-2 rounded-3 w-50 fw-bold'>Sign Me Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Quote
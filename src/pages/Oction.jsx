import React, { useEffect } from 'react'
import image2 from '../Images/octionimage.jpg'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
const Oction = () => {
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
            <Navbar/>
            <div className="container py-3" data-aos="fade-up">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h3 className='oction-heading fw-bold'>Why Choose Our Staff Augmentation Services?</h3>
                        <div>Elevate your team’s potential with our tailored staff augmentation solutions, designed to enhance your
                            development capacity, address skill gaps, and ensure project success. Here's why we stand out:</div>
                        <div><b>1 :</b> <b> Access Elite Talent </b>  Leverage the expertise of South America’s top 2% of developers. Rigorously
                            vetted and trained, our professionals align perfectly with your project requirements and boast an
                            exceptionally low attrition rate.
                        </div>
                        <div><b>2 :</b> <b> Accelerate Project Timelines </b>Achieve faster time-to-market and meet critical deadlines with
                            our experienced, high-performing developers.</div>
                            <div><b>3 :</b> <b> Cost Efficiency  </b>  Reduce overhead by eliminating the complexities of permanent recruitment,
                            onboarding, and training.</div>
                            <div><b>4 :</b> <b> Effortless Integration </b> Our engineers excel in communication and collaboration, seamlessly
                            integrating into your team to maintain workflow harmony.</div>
                            <div><b>5 :</b ><b > Scalable Solutions </b>  Adjust your team size dynamically to align with project demands, ensuring maximum Efficiency</div>
                            <div><b>6 :</b> <b> Empowering Communities </b>  Partnering with us means contributing to impactful initiatives that
                            uplift young Latin American talent through free training and career opportunities, fostering a brighter future</div>
                            <div>Let us help you drive innovation and deliver excellence. <br /> <b>Choose our staff augmentation services today!</b></div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center">
                    <img className='img-fluid rounded-3 oction-image py-1' src={image2} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Oction
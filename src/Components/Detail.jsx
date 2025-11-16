import React from 'react'
import { useNavigate } from 'react-router-dom';
import image4 from '../Images/downarrow.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Detail = () => {
  const navigate = useNavigate();
  const handleOction = () => {
    navigate("/Oction")
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
      <div className="container" id='Detail' data-aos="fade-up">
        <div className="row py-5">  
          <div className="col-lg-6 col-md-8 col-sm-12 text-dark p-5 bg-light rounded-2 shadow p-3">
            <h3 className="fw-bold twin-section">Your Team, Custom-Built for Success
            </h3>
            <p>
              No problem is too big or small. Select the experts you need from our carefully curated pool of seasoned
              professionals, each with deep expertise in the product development lifecycle and mastery in their
              domain
            </p>
            <p>
              Whether you require a Product Engineer, Developer, QA Specialist, Cloud Engineer, AI Expert, or
              any other specialized role, we have the talent ready to seamlessly integrate into your team.
            </p>
            <p>With the flexibility to assemble your ideal team on your terms, you can ensure your product doesn’t just
              reach the market—it stands out and outperforms the competition.</p>
          </div>
        
          <div className="col-lg-6 col-md-8 col-sm-12 text-white p-5 first-section rounded-2 d-flex align-items-center shadow p-3">
            <div className="w-100">
              <h1 className="fw-bold mt-3">Why Choose Our Staff Augmentation Services?</h1>

              <div className="row py-2">
                <div className="col-8">
                  <p className="mb-0 fw-bold">See our staff augmentation services</p>
                </div>
                <div className="col-4 d-flex justify-content-start">
                  <img className="circleimage mt-2" src={image4} alt="" />
                </div>
              </div>
            
              {/* Row for Button */}
              <div className="row mt-4">
                <div className="col-12 text-end">
                  <button
                    onClick={() => { handleOction() }}
                    className="boton-ten fw-bold border-0 rounded-3 p-2 text-white">
                    Hire Now
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Detail

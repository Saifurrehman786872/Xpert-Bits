import React from 'react'
import image3 from '../Images/Header Main.png';
import image4 from '../Images/Headersecond.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Main = () => {
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
         <header>
        <div className="mainbackcolor py-5" style={{ backgroundColor: '#f3f5fc' }}>
          <div className="container" id='Home'  data-aos="fade-down">
            <div className="row align-items-center justify-content-center justify-content-lg-end">

              <div className="col-lg-4 col-md-8 col-sm-12 f-head-col">
                <h1 className="parahmain" style={{ fontWeight: '700', fontSize: '2.5rem', color: '#2b3e5f' }}>
                  Crafting Digital Excellence,<br /> Empowering Innovation.
                </h1>
                <button
                  className="botontwo mt-3 px-4 py-2 rounded-3 p-2 text-white fw-bold"
                >
                  SCHEDULE YOUR CONSULTATION
                </button>
              </div>

              <div className="col-lg-6 col-md-10 col-sm-12 d-flex justify-content-lg-end mt-1">
                <img
                  className="img-fluid firstimage"
                  src={image3}
                  alt="Team Fun"
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    borderRadius: '50px',
                  }}
                />
              </div>
            
              <div className="col-lg-2 col-md-6 col-sm-12 mt-4">
                <div
                  className="bg-white manimage overflow-hidden topspacing"
        
                >
                  <img
                    className="zoom-image img-fluid"
                    src={image4}
                    alt="Team Fun"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transform: 'scale(2.8)', 
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Main

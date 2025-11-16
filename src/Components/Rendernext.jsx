import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Rendernext = ({onNext,onPrevious}) => {
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
                    <div >
                        <div class="row">
                            <h6><b>Are there any technologies you want to specify?</b></h6>
                            <div class="d-flex flex-wrap gap-2">

                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                    <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                    Android
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                    <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="build an Mvp" />
                                    Dot NET
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    React Native
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    Flutter
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-4">
                                    <input class="me-1 form-check-input mt-0" id="service-4" type="checkbox" value="Cost reduction" />
                                   IOS
                                </label>
                                {/* next line */}

                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                    <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                    React JS
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                    <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="build an Mvp" />
                                    Angular
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    Node JS
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    Java
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-4">
                                    <input class="me-1 form-check-input mt-0" id="service-4" type="checkbox" value="Cost reduction" />
                                   PHP
                                </label>
                                {/* next line */}

                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                    <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                    python
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                    <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="build an Mvp" />
                                    DevOps
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    Javascript
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    Laravel
                                </label>
                                {/* Next line */}
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                    <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                    Wordpress
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                    <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="build an Mvp" />
                                    Square space
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    Go high level
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    Calendly
                                </label>
                                {/* Next line */}
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                    <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                    PostgreSQL
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                    <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="build an Mvp" />
                                    Wix
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    Bubble.IO
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    Dante AI
                                </label>
                                {/* Next Line */}
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                    <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                    Zapier
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                    <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="build an Mvp" />
                                    Tailwind CSS
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    Bootstrap
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    AWS Cloud
                                </label>
                                {/* Next line */}
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                    <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                    One Signal
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                    <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="build an Mvp" />
                                    SignalR
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    Pusher
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    MySQL
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    Material UI
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    MS SQL Server
                                </label>
                            </div>

                        </div>

                        
                        <div className="d-flex justify-content-between py-3 gap-4">
                        <button
                                className="btn-fill text-white p-2 rounded-3"
                                type="button"
                                onClick={() => onPrevious()}
                            >
                                Previous<i className="fa-solid fa-arrow-left text-white ms-2"></i>
                            </button>
                            <button  onClick={() => { onNext() }} class="btn-fill text-white rounded-3" type="submit">
                                Next<i class="fa-solid fa-arrow-right text-white ms-2"></i>
                            </button>
                        </div>
                    </div>
    </div>
  )
}

export default Rendernext
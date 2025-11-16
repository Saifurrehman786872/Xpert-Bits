import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Next = ({onNext,onPrevious}) => {
    useEffect(() => {
        AOS.init({
          duration: 900,
          easing: "ease-in-out",
          once: true,
          delay: 12,
        });
      }, []);
    return (
        <div>
                    <div   data-aos="fade-down">
                        <div class="row">
                            <h6><b>What are the biggest challenges you’re currently facing?</b></h6>
                            <div class="d-flex flex-wrap gap-2">

                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                    <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                    Product idea validations
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                    <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="build an Mvp" />
                                    Build an MvP
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                    <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Scale an existing product" />
                                    Scale an existing product
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                    <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Generate more sales" />
                                    Generate more sales
                                </label>
                                <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-4">
                                    <input class="me-1 form-check-input mt-0" id="service-4" type="checkbox" value="Cost reduction" />
                                    Cost reduction
                                </label>

                            </div>

                        </div>

                        <h6 className='py-3'><b>What can we do for you?</b></h6>

                        <div class="d-flex flex-wrap gap-2">
                            <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-0">
                                <input class="me-1 form-check-input mt-0" id="service-0" type="checkbox" value="product idea validation" />
                                Web Design Development
                            </label>
                            <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-1">
                                <input class="me-1 form-check-input mt-0" id="service-1" type="checkbox" value="Mobile App Development" />
                                Mobile App Development
                            </label>
                            <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-2">
                                <input class="me-1 form-check-input mt-0" id="service-2" type="checkbox" value="Desktop App Development" />
                                Desktop App Development
                            </label>
                            <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-3">
                                <input class="me-1 form-check-input mt-0" id="service-3" type="checkbox" value="Software Quality Assurance" />
                                Software Quality Assurance
                            </label>
                            <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-4">
                                <input class="me-1 form-check-input mt-0" id="service-4" type="checkbox" value="Graphics Designing" />
                                Graphics Designing
                            </label>
                            <label class="p-2 px-3 rounded-3 d-flex align-items-center shadow-sm" for="service-5">
                                <input class="me-1 form-check-input mt-0" id="service-5" type="checkbox" value="Ecommerce Solutions" />
                                Ecommerce Solutions
                            </label>

                        </div>

                        <div className="d-flex justify-content-between py-3 gap-4 text-nowrap">
                            <button
                                className="btn-fill text-white p-2 rounded-3 fw-bold"
                                type="button"
                                onClick={() => onPrevious()}
                            >
                                Previous<i className="fa-solid fa-arrow-left text-white ms-2"></i>
                            </button>
                       
                            <button onClick={() => { onNext() }} class="btn-fill text-white p-1 rounded-3 fw-bold" type="submit">
                                Next<i class="fa-solid fa-arrow-right text-white ms-2"></i>
                            </button>
                            </div>
                    </div>

        </div>
    )
}

export default Next
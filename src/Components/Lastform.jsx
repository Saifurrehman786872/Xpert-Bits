import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Lastform = () => {
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
            <form >
                <div class="mb-3">
                    <label class="form-label text-dark" for="msg"><b>How soon would you like to start?</b></label>
                    <select class="form-select" aria-label="Select a Service" required="">
                        <option value="" selected="">Tommorow</option>
                        <option value="Web Design &amp; Development">Web Design &amp; Tommorow</option>
                        <option value="Mobile App Development">Today</option>
                        <option value="Desktop App Development">After A Week</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label class="form-label text-dark" for="msg"><b>What’s your budget range?</b></label>
                    <select class="form-select" aria-label="Select a Service" required="">
                        <option value="" selected="">100$ - 1000$</option>
                        <option value="Development">100$ - 1000$</option>
                        <option value="Mobile App Development">1000$ - 2000$</option>
                        <option value="Desktop App Development">2000$ - 3000$</option>
                        <option value="Desktop App Development">3000$ - 4000$</option>

                    </select>
                </div>

                <div className="d-flex justify-content-between py-1 gap-4">
                    <button
                        className="btn-fill text-white p-1 rounded-3 fw-bold"
                        type="button"
                        onClick={() => window.history.back()}
                    >
                        Previous<i className="fa-solid fa-arrow-left text-white ms-2"></i>
                    </button>
                    <button className="btn-fill text-white p-2 rounded-3 fw-bold" type="submit">
                        Submit<i className="fa-solid fa-arrow-right text-white ms-2"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Lastform
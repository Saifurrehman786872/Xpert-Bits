
import React from "react";
import image2 from "../Images/logonavbar.png";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRedirectAndScroll = (section) => {
    // if (window.location.pathname !== "/") {
    //   navigate("/");
    //   setTimeout(() => {
    //     document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    //   }, 500);
    // } else {
    navigate("/") 
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 500); 
    // }
  };
  const handleContact = () => {
      navigate("/Contact")
  }
  const navigateToHome=()=>{
    debugger
    navigate("/")
  }
  return (
    <div className="body">
      <div className="hero-section">
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-0">
          <div className="container-fluid">
            <img onClick={()=>navigateToHome()} className="img-fluid navbarlogo" src={image2} alt="Logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 navbar-nav-scroll gap-3 fs-6 m-auto">
                <li className="nav-item">
                  <Link to={"/"}  className="nav-link" style={{ fontWeight: "600" }}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <button 
                    onClick={() => handleRedirectAndScroll("Aboutus")}
                    className="nav-link"
                    style={{ fontWeight: "600" }}
                  >
                    About Us
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => handleRedirectAndScroll("Services")} className="nav-link"
                    style={{ fontWeight: "600" }}
                  >
                    Services
                  </button>
                </li>
                <li className="nav-item">
                  <button
                   onClick={() => handleRedirectAndScroll("Detail")} className="nav-link"
                    style={{ fontWeight: "600" }}
                  >
                    Detail
                  </button>
                </li>
              </ul>
              <button
                onClick={() => { handleContact() }} className="boton1 rounded-3 px-4 text-white p-2 fw-bold"
                type="submit"
              >
                Contact us
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;


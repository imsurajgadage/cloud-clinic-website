import React, { useEffect, useState } from "react";
import CallingPhone from "../../assets/Icons/CallingPhone";
import Modal from "../../Common/Modal";
import { Link, useNavigate } from "react-router-dom";
import ScrollButton from "../ScrollButton/ScrollButton";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleMouseDown = (ev) => {
    let clickOutside = true;
    let el = ev.target;
    while (el.parentElement) {
      if (el.id === "hamburger") clickOutside = false;
      el = el.parentElement;
    }
    if (clickOutside) setIsOpen(false);
  };
  document.addEventListener("mousedown", handleMouseDown);

  return (
    <React.Fragment>
      <div className="bg-cyan-700 text-slate-50 select-text flex p-3 items-center">
        <marquee width="100%" direction="left" height="">
          Laser and Scanner Technology For Making Your treatment As Pleasing as
          Possible. Book Your
          <a href={"/#appointment"} className="underline">
            Appointment Now!
          </a>
        </marquee>
      </div>
      <div>
        <div className="p-2 flex justify-center items-center rounded-2xl mb-5 max-md:flex-col">
          <CallingPhone className="mr-2" />
          <a href="tel:83297 70223"> +91-83297 70223</a>
          <span className="divide-y m-3"></span>
          <b>Mon-Sat:</b> &nbsp; 10:30am to 2:30am - 5:30pm to 9:30pm &nbsp;
          <b>Sunday: &nbsp; </b> on Appointment
        </div>
      </div>
      <div className="w-full flex justify-around">
        <div className="flex items-center relative">
          <img
            src="./logo.jpeg"
            alt="Logo"
            loading="lazy"
            onClick={() => navigate("/")}
            className="w-72 h-24 cursor-pointer object-contain max-md:w-48 max-sm:h-14 max-sm:w-40 before:absolute before:w-96 before:h-96 before:top-0 before:left-0 max-lg:flex-1"
          />
        </div>
        <div className="flex justify-center items-center max-lg:hidden">
          <a href={"/#services"} className="navlink">
            Services
          </a>
          <a href={"/#team"} className="navlink">
            Team
          </a>
          <a href={"/#appointment"} className="navlink">
            Appoinment
          </a>
          {window.location.pathname != "/academics" ? (
            <Link className={"navlink"} to={"/academics"}>
              Academics
            </Link>
          ) : null}
          {window.location.pathname != "/academics" ? (
            <Link className={"navlink"} to={"maps"}>
              Locations
            </Link>
          ) : null}

          {window.location.pathname != "/academics" ? (
            <button
              className="button ml-6 max-md:ml-4"
              onClick={() => toggleModal()}
            >
              Book Now
            </button>
          ) : null}
        </div>
        <div
          className="cursor-pointer relative  hidden max-lg:block"
          id="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`border-b border-black border-2 w-8 mb-2`} />
          <div className={`border-b border-black border-2 w-8 mb-2`} />
          <div className={`border-b border-black border-2 w-8 mb-2`} />
          <div className="absolute right-0 z-40">
            {isOpen && (
              <div
                className={`bg-[#001a33] p-10 duration-500 flex flex-col items-center h-auto rounded animate-scaleup`}
              >
                <a
                  href={"/#services"}
                  className="navlink my-3 w-full text-center text-white"
                >
                  Services
                </a>
                <a
                  href={"/#team"}
                  className="navlink my-3 w-full text-center text-white"
                >
                  Team
                </a>

                <a
                  href={"/#appointment"}
                  className="navlink my-3 w-full text-center text-white"
                >
                  Appoinment
                </a>
                {window.location.pathname != "/academics" ? (
                  <Link
                    to={"/academics"}
                    className="navlink my-3 w-full text-center text-white"
                  >
                    Academics
                  </Link>
                ) : null}

                {window.location.pathname != "/maps" ? (
                  <Link
                    to={"/maps"}
                    className="navlink my-3 w-full text-center text-white"
                  >
                    Locations
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal modal={modal} toggleModal={toggleModal} />
      {showTopBtn && <ScrollButton />}
    </React.Fragment>
  );
};

export default Navbar;

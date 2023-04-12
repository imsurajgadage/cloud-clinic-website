import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import AcademicsCards from "./AcademicsCards";

const Academics = () => {
  const url = `${import.meta.env.VITE_API_ENDPOOINT}/sendAcademicsInfo`;
  const [isPending, setIsPending] = useState(false);
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleClick = async () => {
    setIsPending(true);
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(studentData),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      console.log("res", res);
      if (res?.status == 201) {
        setIsPending(false);
        setStudentData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        });
        notify();
      }
    });
  };
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const notify = () => {
    toast.success(`Hey, ${studentData.firstName} We Will Contact You Soon!`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <React.Fragment>
      <p className="sections_heading" id="academics">
        Academics
      </p>
      <p className="h2 mx-16 max-md:8 text-start leading-10">
        <span className="h2">C</span>loud dental academy is founded to provide
        students and clinicians the opportunity to learn and update their skills
        in the feild of dentistry. <br />
        <b className="h1">AIM:- </b>
        We aim in filling up the hole in the field of dental education by acting
        as a bridge between academic advances and the busy practitioners who do
        not find time or opportunity to update themselves in the field of
        dentistry.
        <br />
        <b className="h1">Goal:- </b>
        Our goal is to provide dental students confidence in day to day general
        dentistry and even help them in updating their knowledge with latest
        changing trends in the feild of dentistry and also provide them with
        helping their own clinical setup.
      </p>
      <AcademicsCards />
      <div className="grid grid-cols-12 gap-8 place-items-center py-10 max-lg:px-2">
        <div className="col-span-6 max-lg:col-span-12 bg-slate-300 p-4 rounded-2xl max-lg:order-1">
          <div className="grid grid-cols-12 gap-2 max-lg:gap-4 mb-4">
            <div className="col-span-6 max-md:col-span-12">
              <input
                name="firstName"
                placeholder="First Name"
                className="input"
                value={studentData.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-6 max-md:col-span-12">
              <input
                name="lastName"
                placeholder="Last Name"
                className="input"
                value={studentData.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 max-md:gap-4 mb-4">
            <div className="col-span-6 max-md:col-span-12">
              <input
                name="email"
                placeholder="Email"
                className="input"
                value={studentData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-6 max-md:col-span-12">
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                className="input"
                value={studentData.phoneNumber}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2 max-md:gap-4">
            <div className="col-span-6 max-md:col-span-12">
              <button
                className="button"
                disabled={isPending}
                onClick={() => handleClick()}
              >
                Let's get in Touch
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 max-lg:col-span-12">
          <p className="h1">Wish to Learn New Stuff!</p>
          <p className="h2 py-6 max-md:py-3">Make an Enquiry Today</p>
          <p className="h2 py-6 max-md:py-3">
            <a href="tel:83297 70223"> +91-83297 70223</a>
          </p>
          <p className="text-lg">
            Our Clinic has highly qualified dentists for the <br />
            making you understood complex things very easily.
          </p>
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default Academics;

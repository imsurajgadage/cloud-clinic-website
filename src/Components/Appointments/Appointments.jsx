import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Appointments = () => {
  const url = `${import.meta.env.VITE_API_ENDPOOINT}/sendAppointmentInfo`;
  const [isPending, setIsPending] = useState(false);
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    location: "",
  });
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleClick = async () => {
    setIsPending(true);
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(patientData),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res?.status == 201) {
        setIsPending(false);
        setPatientData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          date: "",
          time: "",
          location: "",
        });
        notify();
      }
    });
  };
  const location = [
    { label: "Jagtap Chowk", value: "Jagtap Chowk" },
    { label: "Bhekarai Nagar", value: "Bhekarai Nagar" },
    { label: "Tadiwala Road Clinic", value: "Tadiwala Road Clinic" },
    { label: "Tadiwala Road Trust", value: "Tadiwala Road Trust" },
    { label: "Bibwewadi", value: "Bibwewadi" },
    { label: "Mohamadwadi", value: "Mohamadwadi" },
    { label: "Kondhwa", value: "Kondhwa" },
    { label: "Vishwaraj", value: "Vishwaraj" },
    { label: "MIT Kotharud", value: "MIT Kotharud" },
  ];
  const notify = () => {
    toast.success(`Hey, ${patientData.firstName} Appointment Booked!`, {
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
      <p className="sections_heading" id="appointment">
        Schedule an Appointment
      </p>
      <div className="grid grid-cols-12 gap-8 place-items-center py-10 max-lg:px-2">
        <div className="col-span-6 max-lg:col-span-12">
          <p className="h1">Welcome!</p>
          <p className="h2 py-6 max-md:py-3">Make an Appointment Today</p>
          <p className="text-xl max-md:text-lg">
            Our Clinic has highly qualified dentists for the <br />
            treatment of any dental problems.
          </p>
        </div>
        <div className="col-span-6 max-lg:col-span-12 bg-slate-300 p-4 rounded-2xl">
          <div className="grid grid-cols-12 gap-2 max-lg:gap-4 mb-4">
            <div className="col-span-6 max-md:col-span-12">
              <input
                name="firstName"
                placeholder="First Name"
                className="input"
                value={patientData.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-6 max-md:col-span-12">
              <input
                name="lastName"
                placeholder="Last Name"
                className="input"
                value={patientData.lastName}
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
                value={patientData.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-6 max-md:col-span-12">
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                className="input"
                value={patientData.phoneNumber}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2 max-md:gap-4 mb-4">
            <div className="col-span-6 max-md:col-span-12 w-full">
              <input
                name="date"
                type="date"
                placeholder="Date"
                className="input"
                value={patientData.date}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-span-6 max-md:col-span-12 w-full">
              <input
                name="time"
                type="time"
                placeholder="Time"
                className="input"
                value={patientData.time}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2 max-md:gap-4">
            <div className="col-span-6 max-md:col-span-12">
              <select
                className="input"
                name="location"
                onChange={(e) => handleChange(e)}
                value={patientData.location}
              >
                <>
                  <option value="" disabled selected>
                    Select your Location
                  </option>
                  {location?.map((item, index) => (
                    <option value={item?.value} key={index}>
                      {item?.label}
                    </option>
                  ))}
                </>
              </select>
            </div>
            <div className="col-span-6 max-md:col-span-12">
              <button
                className="button"
                disabled={isPending}
                onClick={() => handleClick()}
              >
                {isPending ? "Please Wait Booking..." : " Make an Appointment"}
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
};

export default Appointments;

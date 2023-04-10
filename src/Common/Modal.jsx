import React, { useEffect, useState } from "react";
import "./Modal.css";
import { ToastContainer, toast } from "react-toastify";
const Modal = ({ modal, toggleModal }) => {
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
  const url = `${import.meta.env.VITE_API_ENDPOOINT}/sendAppointmentInfo`;
  const handleClick = async () => {
    setIsPending(true);
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(patientData),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res?.status == 201) {
        setIsPending(false);
        notify();
        toggleModal();
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
  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="grid grid-cols-12 gap-8 place-items-center py-10 max-lg:px-2 z-50">
              <div className="col-span-12 max-lg:col-span-12 bg-slate-300 p-4 rounded-2xl">
                <div className="grid grid-cols-12 gap-2 max-lg:gap-4 mb-4">
                  <div className="col-span-6 max-md:col-span-12">
                    <input
                      name="firstName"
                      placeholder="First Name"
                      className="input"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-span-6 max-md:col-span-12">
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      className="input"
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
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-span-6 max-md:col-span-12">
                    <input
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="input"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2 max-md:gap-4 mb-4">
                  <div className="col-span-6 max-md:col-span-12">
                    <input
                      name="date"
                      type="date"
                      placeholder="Date"
                      className="input"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-span-6 max-md:col-span-12">
                    <input
                      name="time"
                      type="time"
                      placeholder="Time"
                      className="input"
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
                      {isPending ? "Booking..." : "Make an Appointment"}
                    </button>
                  </div>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

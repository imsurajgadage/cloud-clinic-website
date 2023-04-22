import React, { useState } from "react";
import AppointmentModal from "../../Common/AppointmentModal";

const LandingPage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <div className="m-auto h-full rounded-2xl p-10">
        <div className="grid grid-cols-12 place-items-center mt-5">
          <div className="col-span-6 max-lg:col-span-12">
            <p className="h1 tracking-wide place-items-center capitalize">
              a chain of dental clinic <br /> that you can trust
            </p>
            <p className="h2 my-8 max-md:my-4 capitalize">
              start your best life with a great smile
            </p>
            <button className="button" onClick={() => toggleModal()}>
              Schedule Your Visit
            </button>
          </div>
          <div className="col-span-6 max-lg:col-span-12 max-md:my-5">
            <img src="./images/dentist.jpg" />
          </div>
        </div>
      </div>

      <AppointmentModal modal={modal} toggleModal={toggleModal} />
    </React.Fragment>
  );
};

export default LandingPage;

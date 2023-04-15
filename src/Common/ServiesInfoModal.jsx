import React, { useEffect } from "react";
import "./Modal.css";
import { ToastContainer, toast } from "react-toastify";
import { ourFirstExpertiseList, ourSecondExpertList } from "./Data";
const ServiesInfoModal = ({ modal, toggleModal, serviceId }) => {
  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal]);
  const servicesArray = [...ourFirstExpertiseList, ...ourSecondExpertList];

  const servicesInfo = servicesArray?.filter((item) => item.id == serviceId);
  return (
    <React.Fragment>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="grid grid-cols-12 gap-8 place-items-center py-10 max-lg:px-2 z-50">
              <div className="col-span-12 max-lg:col-span-12 bg-slate-300 p-4 rounded-2xl">
                <div className="grid grid-cols-12 gap-2 max-lg:gap-4 mb-4">
                  <div className="col-span-6 max-md:col-span-12">
                    <span className="text-center font-semibold text-lg">
                      {servicesInfo[0]?.title}
                    </span>
                  </div>
                  <div
                    className="col-span-6 max-md:col-span-12 text-right pr-4 cursor-pointer"
                    onClick={() => toggleModal()}
                  >
                    <span className="text-4xl text-neutral-500">&times;</span>
                  </div>

                  <div className="col-span-6 max-md:col-span-12 flex justify-center items-center">
                    <span className="text-center font-semibold text-lg">
                      <img src={servicesInfo[0]?.descriptionImage} className="w-72 max-md:w-56" />
                    </span>
                  </div>
                  <div className="col-span-6 max-md:col-span-12 flex justify-center items-center text-lg">
                    {servicesInfo[0]?.description}
                  </div>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ServiesInfoModal;

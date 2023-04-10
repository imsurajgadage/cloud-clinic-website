import React from "react";
import { locationsData } from "../../Common/Data";

const Locations = () => {
  return (
    <React.Fragment>
      <p className="sections_heading" id="locations">
        Our Locations
      </p>
      <div className="flex justify-center items-center flex-wrap gap-10 w-full mb-5">
        {locationsData?.map((item, index) => (
          <div
            className="w-80 bg-[#6A1B4D] h-80 rounded-2xl flex flex-col items-center p-3 relative"
            key={index}
          >
            <p className="text-center text-slate-50 text-2xl">{item?.title}</p>
            <p className="text-slate-50 my-4 text-center mx-2">
              {item?.address}
            </p>
            <a
              href={item?.redirect}
              target="_blank"
              className="button uppercase font-semibold cursor-pointer absolute bottom-5"
            >
              View on Map
            </a>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Locations;

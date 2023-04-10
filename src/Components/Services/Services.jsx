import React, { useEffect, useState } from "react";
import {
  ourFirstExpertiseList,
  ourSecondExpertList,
  informationsCardList,
} from "../../Common/Data";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isSeeAll, setIsSeeAll] = useState(false);
  useEffect(() => {
    isSeeAll
      ? setServices([...ourFirstExpertiseList, ...ourSecondExpertList])
      : setServices(ourFirstExpertiseList);
  }, [isSeeAll]);
  return (
    <React.Fragment>
      <div
        className="py-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(1,111,134,1) 0%, rgba(53,193,213,1) 78%)",
        }}
      >
        <div className="flex justify-center items-center flex-wrap gap-10 w-full">
          {informationsCardList?.map((item, index) => (
            <div
              className="w-80 bg-[#6A1B4D] h-80 rounded-2xl flex flex-col items-center"
              key={index}
            >
              <img
                src={item?.image}
                loading="lazy"
                className="w-20 h-20 object-cover text-center my-4"
              />
              <p className="text-center text-slate-50 text-2xl">
                {item?.title}
              </p>
              <p className="text-slate-50 my-4 text-center mx-2">
                {item?.description}
              </p>
              <a
                href={item?.redirect}
                className="button uppercase font-semibold cursor-pointer"
              >
                {item?.label}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-200 py-8 max-md:py-4" id="services">
        <p className="sections_heading">Our Services</p>
        <div className="flex flex-wrap justify-center items-center gap-10 transition delay-1000 duration-300">
          {services?.map((item, index) => (
            <div
              key={index}
              className="w-80 flex flex-col justify-center items-center bg-white p-8 rounded-2xl h-56"
            >
              <img
                src={item?.image}
                loading="lazy"
                className="w-20 h-20 object-contain"
              />

              <p className="title py-4 text-center">{item?.title}</p>
            </div>
          ))}
          <div className="w-full text-center">
            <button
              className="secondary-btn animate-bounce"
              onClick={() => setIsSeeAll(!isSeeAll)}
            >
              <span className="text-2xl">
                {isSeeAll ? (
                  <span className="secondary-btn-icon">&uarr;</span>
                ) : (
                  <span className="secondary-btn-icon">&darr; </span>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;

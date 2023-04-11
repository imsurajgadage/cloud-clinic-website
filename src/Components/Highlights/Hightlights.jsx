import React from "react";
import { ourHightlightsList } from "../../Common/Data";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

const Hightlights = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div
        className="flex justify-center items-center flex-wrap select-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(34,117,125,1) 3%, rgba(57,102,101,1) 100%)",
        }}
      >
        {ourHightlightsList?.map((item, index) => (
          <div
            className="text-center w-72 my-10 text-cyan-50 hover:scale-110 hover:duration-300 text-3xl max-md:text-lg"
            key={index}
          >
            <CountUp
              start={0}
              end={item.count}
              suffix="+"
              duration={5}
              enableScrollSpy={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef}>{item.count}</span>
                </div>
              )}
            </CountUp>
            <p className="h2">{item?.title}</p>
          </div>
        ))}
      </div>

      <div className="relative">
        <img
          src="./images/jeremy-bishop-G9i_plbfDgk-unsplash.jpg"
          className="object-cover w-full relative h-[500px]"
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
          <p className="h1 text-slate-50 py-5 text-center">Academics</p>
          <span className="underline text-slate-50"></span>
          <div>
            <p className="h1 text-slate-50 text-center pt-20 max-md:pt-10">
              Checkout Our Academics Courses!
            </p>
            <p className="h2 text-slate-50 text-center my-10 max-md:pt-10">
              we Offer Courses with Hands on Practice
            </p>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center my-10">
            <button
              className="text-slate-50 border p-3 rounded-lg text-2xl font-semibold flex justify-around items-center w-80"
              onClick={() => navigate("/academics")}
            >
              Go to Academics
              <img
                src="./images/Icons/mortarboard.png"
                className="h-9 w-9 animate-bounce"
              />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hightlights;

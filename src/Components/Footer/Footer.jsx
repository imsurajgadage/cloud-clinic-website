import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-8 place-items-center py-10 bg-[#03203C] text-slate-400">
        <div className="col-span-4 max-md:col-span-12 text-xl max-md:text-sm max-lg:text-center">
          <p className="text-2xl footer_text">Contact us</p>
          <div className="mb-2 footer_text">
            <span className="font-semibold">Email:&nbsp;</span>
            clouddentalclinicandacademy@gmail.com
          </div>

          <div className="footer_text">
            <span className="font-semibold">Contact No:</span>
            <a href="tel:83297 70223"> +91-83297 70223</a>
          </div>
        </div>

        <div className="col-span-4 max-md:col-span-12 text-xl max-lg:text-lg">
          <p className="text-3xl text-right py-4 footer_text">Contact us</p>
          <div className="flex flex-col justify-start items-center">
            <a href={"/#services"} className="navlink py-1 footer_text">
              Services
            </a>
            <a href={"/#team"} className="navlink py-1 footer_text">
              Team
            </a>

            <a href={"/#appointment"} className="navlink py-1 footer_text">
              Appoinment
            </a>
            <p
              onClick={() => {
                navigate("/academics");
                window.scrollTo(0, 0);
              }}
              className="navlink py-1 footer_text cursor-pointer"
            >
              Academics
            </p>
            <p
              onClick={() => {
                navigate("/maps");
                window.scrollTo(0, 0);
              }}
              className="navlink py-1 footer_text cursor-pointer"
            >
              Locations
            </p>
          </div>
        </div>
        <div className="col-span-4 max-md:col-span-12 max-sm:mb-10">
          <p className="text-2xl py-4 footer_text">Social Links</p>
          <div className="flex justify-around">
            <img
              src="./images/socials/instagram.png"
              className="ml-4 w-10 h-10 object-contain cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/cloud_dentist10/",
                  "_blank"
                )
              }
            />
            <img
              src="./images/socials/youtube.png"
              className="ml-4 w-10 h-10 object-contain cursor-pointer"
              onClick={() => window.open("", "_blank")}
            />
            <img
              src="./images/socials/facebook.png"
              className="ml-4 w-10 h-10 object-contain cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/dentist.cloud?mibextid=ZbWKwL",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <div className="grid col-span-12">
          <p className="text-center py-2 text-xl max-md:text-lg font-semibold footer_text">
            &#169; {new Date().getFullYear()} Copyrights All Rights Reserved!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;

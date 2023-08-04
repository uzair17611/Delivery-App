/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Theme from "./utilities/Theme";
import OrderManagement from "./OrderManagement/OrderManagement";
import RidersManagement from "./RidersManagement/RidersManagement";
import logo from "../assets/logo.svg";
import helpIcon from "../assets/helpIcon.svg";
import allocationIcon from "../assets/allocation.svg";
import customization from "../assets/custimaztion.svg";
import customerIcon from "../assets/customerManagement/customer.svg";

const Sidebar = () => {
  const [activeStatus, setActiveStatus] = useState("");
  const dropDownHandler = (status) => {
    if (activeStatus === status) {
      setActiveStatus("");
    } else {
      setActiveStatus(status);
    }
  };
  return (
    //sidebar
    <div>
      <div className="flex flex-col bg-[#FCFCFC] w-1/4 lg:w-[26%] xl:w-1/4  h-screen fixed z-50">
        <img
          src={logo}
          alt="logo"
          className="lg:w-8 lg:h-8 xl:w-12 xl:h-12 ml-3 mt-4"
        />
        <aside className="mt-3" aria-label="Sidebar">
          <div className="lg:w-[26vw] xl:w-[25vw] xl:h-[70vh] xl:overflow-y-auto xl:overflow-x-hidden">
            <OrderManagement
              activeStatus={activeStatus}
              dropDown={dropDownHandler}
            />
            <RidersManagement
              activeStatus={activeStatus}
              dropDown={dropDownHandler}
            />
            <ul className="lg:ml-[14px] xl:ml-[18px]">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base lg:text-sm rounded-lg  hover:bg-[#EFEFEF] xl:w-[23vw] lg:w-[23vw]"
                >
                  <img
                    src={customerIcon}
                    alt="logo"
                    className="lg:w-5 lg:h-5"
                  />
                  <span className="ml-3 text-[#6F767E] xl:text-lg font-semibold">
                    Customers
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base lg:text-sm rounded-lg  hover:bg-[#EFEFEF] xl:w-[23vw] lg:w-[23vw]"
                >
                  <img
                    src={allocationIcon}
                    alt="logo"
                    className="lg:w-5 lg:h-5 "
                  />
                  <span className="ml-3 text-[#6F767E] xl:text-lg font-semibold">
                    Allocation
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2  text-base lg:text-sm rounded-lg  hover:bg-[#EFEFEF] xl:w-[23vw] lg:w-[23vw]"
                >
                  <img
                    src={customization}
                    alt="logo"
                    className="lg:w-5 lg:h-5 "
                  />
                  <span className="ml-3 text-[#6F767E] xl:text-lg font-semibold">
                    Customization
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <hr className="lg:w-[20vw] h-[2px] text-[#F4F4F4] absolute lg:bottom-[90px] xl:bottom-[110px] rounded-sm ml-6" />
            <img
              className="absolute xl:bottom-20 lg:bottom-16 xl:w-6 xl:h-6 lg:w-5 lg:h-5 ml-6"
              src={helpIcon}
              alt="help icon"
            />
            <p className="absolute xl:bottom-20 lg:bottom-16 ml-14 font-semibold text-sm tracking-[-0.01em] text-[#6F767E]">
              Help & getting started
            </p>
            <span className="absolute xl:bottom-20 lg:bottom-16 xl:ml-72 lg:ml-56 text-xs font-semibold inline-block py-1 px-2  rounded bg-[#CABDFF] text-[#1A1D1F]  last:mr-0 mr-1">
              8
            </span>
            <Theme />
          </div>
        </aside>
      </div>
      <Topbar />
      <div className="absolute top-24 left-[27%]  flex flex-row justify-center align-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
